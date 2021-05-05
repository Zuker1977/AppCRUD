const express = require('express');
const router = express.Router();
const invoiceModel =  require('../models/invoice.js');

router.delete('/:invoiceId',(request, response)=>{ 
    invoiceModel.deleteOne({
        _id : request.params.invoiceId
    },        
        (err)=>{
        if(err){
            console.log('ERROR: '+ err);
            response.status(500).json({message : 'No se pudo borrar la información.'})
        } else{
            console.log(request.params.invoiceId);        
            console.log('La factura se elimino');
            response.status(200).json({message : 'La factura se elimino'});
        }
    });

});

module.exports = router;
