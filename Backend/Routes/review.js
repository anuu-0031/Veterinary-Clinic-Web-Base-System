import express from 'express'
import { getAllReviews, createReview } from '../Controllers/reviewController.js'
import { authenticate, restrict } from '../auth/verifyToken.js'


const router = express.Router({mergeParams:true})



router
      .route('/:id')
      .get(getAllReviews)
      .post(authenticate,restrict(['petOwner']), createReview)
      
export default router;