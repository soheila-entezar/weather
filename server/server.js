const express = require("express");
const app = express();
const PORT = process.env.PORT || 3031;
require('dotenv').config();

//Import Routes
const today = require("./routes/today");

app.use(express.json());

app.get("/api/weather/:city/:service", async (req, res) => {
    const { city, service } = req.params;

    switch (service) {
        case "today":
            const response = await today(city,process.env.APIKEY);
            res.send(response);
            break;
        default:
            break;
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});