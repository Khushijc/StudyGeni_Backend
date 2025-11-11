import express from "express";
import { uploadFile, getAllFiles, getFileById } from "../controller/file.controller.js";
import { protect, isTeacher } from "../middleware/auth.js";
import upload from "../middleware/upload.js";
import { getContentQuiz, getContentSummary } from "../controller/ai.controller.js";

const router = express.Router();

router.post("/", protect, isTeacher, upload.single("file"), uploadFile);
router.get("/", protect, getAllFiles);
router.get("/:id", protect, getFileById);
router.get("/:id/summary",getContentSummary)
router.get("/:id/quiz",getContentQuiz)

export default router;