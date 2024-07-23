const express = require("express");
const router = express.Router();
const certificate = require("../Models/Certificate");

router.get("/", async (req, res) => {
    const details = await certificate.find({});
    res.json(details)
  });

  router.post('/certificate',async (req, res) => {
    try{
        const data=req.body;
        console.log(data)
        const details= await certificate.create(data);
        // console.log(details)
        res.status(201).json(details)
    
       }
    catch(error){
    res.status(500).json
    }
        
    // Redirect to the certificate view page with the details
    // res.redirect(`/certificate?id=${id}`);
});

router.get("/view/:id", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'view.html'));
  
});

router.get('/certificate/:id',async (req, res) => {
    const id= req.params.id;
    const details= await certificate.findOne({certid: id})
    // console.log(id);
    // console.log(details);
    res.json(details);
});


module.exports = router;