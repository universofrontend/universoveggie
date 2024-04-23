import express from "express";
import cors from "cors";
import users from "./routes/users.js";

const DEFAULT_PORT = 5050; 

const PORT = process.env.PORT || DEFAULT_PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", users);

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});