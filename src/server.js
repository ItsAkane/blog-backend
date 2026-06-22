import "dotenv/config";
import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors);

// Server running
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
	res.status(200).send("Hello word");
});

app.post("/", (req, res) => {
	res.status(200).send({});
});
