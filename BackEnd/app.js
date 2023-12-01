const express = require("express");
const cors = require("cors");

const authRoutes = require("./Routes/authRoutes");
const imageRoutes = require("./Routes/imageRoutes");

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

//authentication
app.use("/auth", authRoutes);

app.use("/api/images", imageRoutes);

app.listen(PORT, () => console.log(`Server is listening at ${PORT} port`));
