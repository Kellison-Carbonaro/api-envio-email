require("dotenv").config();
const express = require('express');
const app = express();
const sendEmailRoutes = require('./routes/sendEmailRoutes');
const swaggerConfig = require('./swagger');


swaggerConfig(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/send-email', sendEmailRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});