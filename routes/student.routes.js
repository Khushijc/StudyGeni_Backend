import express from "express";
import { protect } from "../middleware/auth.js";

import { getAllFiles, getFileById } from "../controller/student.controller.js";

const router = express.Router();


router.get("/files", getAllFiles);
router.get("/files/:id", getFileById);

export default router;
