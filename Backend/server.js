import express from "express";
import cors from "cors";
import contactRoutes from "./src/routes/contactRoutes.js"

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", contactRoutes);

app.listen(5000, () => 
    console.log(`Server is running on http://localhost:5000`)
);