const express = require("express");
const router = express.Router();
const recip=require('../models/recipes')
const veryfyTocken=require('../middleware/authMiddleware')


router.get("/recipes", veryfyTocken,async (req, res) => {
  const details = await recip.find({});
  res.json(details);
});

router.post("/recipes", async (req, res) => {
    try {
      const data = req.body;
      const result =await recip.create(data);
      res.status(201).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json();
    }
  });

  

  module.exports=router
