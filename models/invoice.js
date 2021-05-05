const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
sellerName:{
    type : String,
    requerid:true
},
sellerAddres:{
    type : String,
    requerid : true
},
customerName:{
    type : String,
    requerid : true
},
customerAddress
:{
    type : String,
    requerid:true
},
items:[
    {
        description:{
        type : String,
        requerid : true
        },
        price:{
        type : Number,
        requerid : true
        }
    }
    ],
finalsPrice:{
    type : Number,
    requerid : true
            },
terms:{
    type : String,
    requerid : true
    },
invoiceDescription:{
    type : String,
    requerid : true
},
date :{
    type : Date,
    default : Date.now
}
});

module.exports = mongoose.model('invoice',invoiceSchema);