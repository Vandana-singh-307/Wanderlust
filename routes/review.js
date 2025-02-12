const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const Listing  = require("../models/listing.js");
const{validateReview,isLoggedIn,isReviewAuthor} = require("../middleware.js");
const reivewController = require("../controllers/review.js");


//Post Route
router.post("/",isLoggedIn,validateReview,wrapAsync(reivewController.createReview)
  );
  // Delete Review Route
  router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor,wrapAsync(reivewController.destroyReview)
  );

  module.exports = router;
  
  