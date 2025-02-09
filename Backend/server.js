import express from "express";
import cors from "cors";
import contactRoutes from "./src/routes/contactRoutes.js"

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api", contactRoutes);

app.listen(PORT, () => 
    console.log(`Server is running on port ${PORT}`)
);