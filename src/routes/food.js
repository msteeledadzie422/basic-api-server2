'use strict';

const express = require('express');
const { foodModel } = require('../models');

const router = express.Router();

// CREATE
router.post('/food', async (req, res, send) => {
  console.log('req.body', req.body);

  const newFood = await foodModel.create(req.body);
  res.status(200).send(newFood);
});

// READ - GET ALL
router.get('/food', async (req, res, next) => {
  let foods = await foodModel.findAll();
  res.status(200).send(foods);
});

// READ - GET ONE
router.get('/food/:id', async (req, res, next) => {
  let foodItem = await foodModel.findOne({where: {id: req.params}});
  res.status(200).send(foodItem);
});

// UPDATE
router.put('/food/:id', async (req, res, next) => {
  await foodModel.update(req.body, {where: {id: req.params}});
  let foodItem = await foodModel.findOne({where: {id: req.params}});
  res.status(200).send(foodItem);
});


// DESTROY
router.delete('/food/:id', async (req, res, next) => {
  await foodModel.delete(req.body, {where: {id: req.params}});
  res.status(200).send('item deleted');
});

module.exports = router;