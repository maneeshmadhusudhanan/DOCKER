const {Schema}=require('mongoose');
const {model}=require('mongoose');
const demo= new Schema({
    certid:{type :Number,required:true, unique : true} , //fields
    cname:{type :String,required:true},
    course:{type :String,required:true},
    grade:{type :String,required:true},
    date:{type :Date,required:true},

});

const Certidetails=model('Cert-collection',demo);
module.exports=Certidetails;
