const express = require('express');
const productRoute = require('../controllers/product.controller')
const profileRoute = require('../controllers/profile.controller')
const router = express.Router();

router.get('/', (req, res)=>{
    res.json({message: 'Hello'})
});

router.post('/product', productRoute.insertProduct);
router.get('/product/:id', productRoute.detailProduct);
router.get('/product', productRoute.listProduct);
router.put('/product/:id', productRoute.updateProduct);
router.delete('/product/:id', productRoute.deleteProduct);

router.post('/profile', profileRoute.insertProfile);
router.get('/profile/:id', profileRoute.detailProfile);
router.get('/profile', profileRoute.listProfile);
router.put('/profile/:id', profileRoute.updateProfile);
router.delete('/profile/:id', profileRoute.deleteProfile);

module.exports = router;
