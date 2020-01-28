const express = require('express');
const router = express.Router();

router.get('/users/sigin', (req,res) =>{
    res.send('Ingresando a la app')
})

router.get('/users/sigup', (req,res) =>{
    res.send('Formulario de autenticación')
})

module.exports = router;