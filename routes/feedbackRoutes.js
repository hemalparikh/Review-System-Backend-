import express from 'express'; 
import { createadmin, createalumni, createstudent, getAllUsers } from "../controllers/usercontroller.js";
import { createCompany, getAllCompanies } from "../controllers/companycontroller.js";
import { createReview, getAllReviews } from "../controllers/reviewController.js";
import { likeReviews } from "../controllers/likeController.js";
import { isAdmin, isAlumni, isStudent } from '../middleware/Middleware.js';

const router = express.Router();

router.post("/admin/create", createadmin);
router.post("/alumni/create", createalumni);
router.post("/student/create", createstudent);
router.get("/getusers", getAllUsers);

router.post("/company",isAdmin, createCompany);
router.get("/getcompany", getAllCompanies);

router.post("/review",isAlumni, createReview);
router.get("/getreview", getAllReviews);

router.post("/like",isStudent, likeReviews);

export default router;