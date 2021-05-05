const express = require('express');
const router = express.Router();
const invoiceModel =  require('../models/invoice.js');

router.post('/',(request, response)=>{
    const input = request.body;

    const newDocument = new invoiceModel({
        sellerName : input.sellerName,
        sellerAddres : input.sellerAddres,
        customerName : input.customerName,
        customerAddress: input.customerAddress,
        items : input.items,
        finalPrice : input.finalPrice,
        terms : input.terms,
        invoiceDescription : input.invoceDescription
    });

    //Salvando documento
    newDocument.save((err,doc)=>{
        if(err){
            console.log('ERROR: '+ err);
            response.status(500).json({message : 'No se pudo enviar la informacion.'})
        } else{
            console.log('la informacion se ha guardado.');
           // console.log(doc);
            response.status(200).json({message : 'la informacion se ha guardado.'})
            console.log(response.statusMessage);
        }
    });

    //response.send('<h1>Saludos desde router "create" </h1>');
});

module.exports = router;