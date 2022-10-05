const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');
const Place  = require('../models/place');
const User = require('../models/user');
const mongoose = require('mongoose');
const fs = require('fs');

//Get place by Place ID
const getPlaceById = async (req, res, next) => {
    const placeId = req.params.pid;
    let place;
    try{
        place = await Place.findById(placeId);
    } catch(err){
        const error = new HttpError('Fetching a place failed, please try again later', 500);
        return next(error);
    }
    
    if(!place){
        return next(new HttpError('Could not find a place for the provided ID', 404));
    }
    res.json({place: place.toObject({getters: true})});
};
//Get places by User ID
const getPlacesByUserId = async (req, res, next) => {
    const userId = req.params.uid;
    let places;
    try{
        places = await Place.find({creator: userId});
    }catch(err){
        const error = new HttpError('Fetching places failed, please try again later', 500);
        return next(error);
    }
    
    if(!places || places.length === 0){
        return next(new HttpError('Could not find a place for the provided user ID', 404));
    }
    res.json({ places: places.map(place => place.toObject({getters: true})) });
};
const createPlace = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error = new HttpError('Invalid inputs, please check the data entered!', 422);
        return next(error);
    }
    const { title, description, address} = req.body;
    const createdPlace = new Place({
       title,
       description,
       address,
      // location: coordinates,
       image: req.file.path,
       creator: req.userData.userId
    });
    let user;
    try{
        user = await User.findById(req.userData.userId);
    }catch(err){
        const error = new HttpError('Creatibf place failed, please try again later!',500);
        return next(error);
    }
    if(!user){
        const error =  new HttpError('Could not find user for the provided ID', 404);
        return next(error);
    }
    try{
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await createdPlace.save({session: sess});
        user.places.push(createdPlace);
        await user.save({session: sess});
        await sess.commitTransaction();
    }catch(err){
       const error = new HttpError('Could not save place, please try again!', 500);
       return next(error);
    }
    
    res.status(201).json({place: createdPlace});
};
const updatePlace = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error = new HttpError('Invalid inputs, please check the data entered!', 422);
        return next(error);
    }
    const { title, description } = req.body;
    const placeId = req.params.pid;

    let place;
    try{
        place = await Place.findById(placeId);
    } catch(err){
        const error = new HttpError('Something went wrong, please try again later', 500);
        return next(error);
    }
    /* To check if the person trying to edit is the creator */
    if(place.creator.toString() !== req.userData.userId){
        const error = new HttpError('You are not allowed to update this place!', 401);
        return next(error);
    }
    place.title = title;
    place.description = description;

    try{
        await place.save();
    }catch(err){
        const error = new HttpError('Something went wrong, please try again later', 500);
        return next(error);  
    }
    res.status(200).json({place: place.toObject({getters: true})});
};
const deletePlace = async (req, res, next) => {
    const placeId = req.params.pid;
    let place;
    try{
        place = await Place.findById(placeId).populate('creator');
    } catch(err){
        const error = new HttpError('Something went wrong, please try again later', 500);
        return next(error);
    }
    if(!place){
        const error = new HttpError('Could not find place for this ID!', 404);
        return next(error);
    }
     /* To check if the person trying to delete is the creator */
     if(place.creator.id !== req.userData.userId){
        const error = new HttpError('You are not allowed to delete this place!', 401);
        return next(error);
    }

    const imagePath = place.image;

    try{
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await place.remove({session: sess});
        place.creator.places.pull(place);
        await place.creator.save({session: sess});
        await sess.commitTransaction();
    }catch(err){
        const error = new HttpError('Something went wrong, please try again later', 500);
        return next(error);
    }
    fs.unlink(imagePath, err => {
        console.log(err);
    })
    res.status(200).json({message: 'Deleted successfully!'});
};

//Exporting the functions
exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;