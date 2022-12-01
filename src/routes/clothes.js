'use strict';

const express = require('express');
const { clothesModel } = require('../models');

const router = express.Router();

// CREATE
router.post('/clothes', async (req, res, send) => {
  console.log('req.body', req.body);

  const newClothes = await clothesModel.create(req.body);
  res.status(200).send(newClothes);
});

// READ - GET ALL
router.get('/clothes', async (req, res, next) => {
  let clothing = await clothesModel.findAll();
  res.status(200).send(clothing);
});

// READ - GET ONE
router.get('/clothes/:id', async (req, res, next) => {
  let clothingItem = await clothesModel.findOne({where: {id: req.params}});
  res.status(200).send(clothingItem);
});

// UPDATE
router.put('/clothes/:id', async (req, res, next) => {
  await clothesModel.update(req.body, {where: {id: req.params}});
  let clothingItem = await clothesModel.findOne({where: {id: req.params}});
  res.status(200).send(clothingItem);
});


// DESTROY
router.delete('/clothes/:id', async (req, res, next) => {
  await clothesModel.delete(req.body, {where: {id: req.params}});
  res.status(200).send('item deleted');
});

module.exports = router;