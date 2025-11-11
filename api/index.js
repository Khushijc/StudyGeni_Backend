import express from "express";
import connectDB from "../config/db.js";
import dotenv from "dotenv"
import authRoutes from "../routes/auth.routes.js";
import fileRoutes from "../routes/file.routes.js";
import studentRoutes from "../routes/student.routes.js";

dotenv.config();
const app = express();
app.use(express.json());
connectDB();
const port = 3000;


app.use("/api/auth", authRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/student", studentRoutes);

app.get('/',(req, res) => {
    res.send('Heyyy, StudyGeniii!!!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});