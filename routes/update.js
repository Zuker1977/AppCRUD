const express = require('express');
const router = express.Router();
const invoiceModel =  require('../models/invoice.js');

router.patch('/:invoiceId',(request, response)=>{ 

    invoiceModel.updateOne({
        _id : request.params.invoiceId
        },{
            sellerName : request.body.sellerName,
            sellerAddress : request.body.sellerAddress,
            CustomerName : request.body.CustomerName,
            customerAddress: request.body.customerAddress,
            items : request.body.items,
            finalPrice : request.body.finalPrice,
            terms : request.body.terms,
            invoiceDescription : request.body.invoceDescription
        },function(err, result){
            if(err){
                console.log('ERROR: '+ err);
                response.status(500).json({message : 'No se pudo actualizar.'})
                
            } else {
                console.log('Toda la informaciónse pudo actualizar');        
                response.status(200).json({message : 'Todo se pudo actualizar.'})
            }
        });

});

module.exports = router;
