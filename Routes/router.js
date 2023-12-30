const express = require('express')
const menproductController = require('../Contollers/menproductController')
const womenproductController = require('../Contollers/womenproductController')
const wishlistController = require('../Contollers/wishlistController')
const cartController = require('../Contollers/cartController')

const userController = require('../Contollers/userContoller')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')

const router = new express.Router()


// register

router.post('/user/register',userController.registerController)

// get home men products

router.get('/products/men',menproductController.getHomeMenProductsController)

// get all men products

router.get('/men/all-products',menproductController.getAllMenProductsController)

// get single men product
router.get('/view/men/:id',menproductController.getAMenProductController)

// get single women product
router.get('/view/women/:id',womenproductController.getAWomenProductController)


// get home women products

router.get('/products/women',womenproductController.getHomeWomenProductsController)

// get all women products

router.get('/women/all-products',womenproductController.getAllWomenProductsController)

// login

router.post('/user/login',userController.loginContoller)


// add to wishlist

router.post('/wishlist/add',jwtMiddleware,wishlistController.addToWishlistController)

// get wishlist
 router.get('/wishlist/allproducts',jwtMiddleware,wishlistController.getWishlistController)


//  remove wishlist

router.delete("/wishlist/product/:id",jwtMiddleware,wishlistController.removeFromWishlist)

// add to cart

router.post("/cart/add",jwtMiddleware,cartController.addToCartController)

// get cart
router.get("/cart/allproducts",jwtMiddleware,cartController.getCartController)

// increment cart
router.get("/cart/increment/:id",jwtMiddleware,cartController.incrementCartController)

// decrement cart
router.get("/cart/decrement/:id",jwtMiddleware,cartController.decrementCartController)



// delete cart item

router.delete("/cart/remove/:id",jwtMiddleware,cartController.removeCartItemContoller)


// empty cart

router.delete("/cart/empty",jwtMiddleware,cartController.emptyCartContoller)



module.exports = router
