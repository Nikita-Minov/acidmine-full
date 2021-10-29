const express = require('express');
const router = express.Router();
const Promo = require("../models/promo.model.js");

router.post('/api/create-promo', async(req, res) => {
  console.log(req.body.promocode + ' ' + req.body.percent)
  const newPromo = new Promo({ promocode: req.body.promocode, percent: req.body.percent });
  await newPromo.save();
  return res.json({message: 'Promo saved!'})
})

router.post('/api/find-promo', async(req, res) => {
  const promo = await Promo.findOne({promocode: req.body.promocode});
  console.log('promo: ' + promo)
  if(promo == null) return res.json({message: 'Promo don\'t finded'});
  else return res.json(promo);
})

router.post('/api/delete-promo', async(req, res) => {
  const promo = await Promo.findOneAndDelete({promocode: req.body.promocode})
  if(promo == null) return res.json({message: 'Promo don\'t finded and no deleted!'})
  else return res.json({message: 'Promo deleted'})
})

router.get('/api/get-all-promo', async(req, res) => {
  const promoCodes = await Promo.find();
  return res.json(promoCodes);
})

module.exports = router;