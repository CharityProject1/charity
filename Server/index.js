const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const contactMessagesRoutes = require("./routes/contactMessagesRoutes");
const donorRoutes = require("./routes/donorRoutes");
const authRoutes = require('./routes/auth');
const cookieParser = require('cookie-parser');

dotenv.config();


const app = express();


app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api", adminRoutes);
app.use("/api", userRoutes);
app.use("/api", contactMessagesRoutes);
app.use("/api/donors", donorRoutes);
app.use('/api/auth', authRoutes);

// Start the server

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
