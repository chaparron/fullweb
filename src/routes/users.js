const express = require('express');
const router = express.Router();

router.get('/notes', (req,res) =>{
    res.send('Notas en la bbdd')
})



module.exports = router;