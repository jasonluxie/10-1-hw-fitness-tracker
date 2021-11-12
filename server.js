const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan"); // morgan npm request logger middleware
const PORT = process.env.PORT || 3000;
const routes = require("./controllers");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); //serving public files

app.use(morgan("devlog")); //to display morgan logs

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
    useNewUrlParser: true,
    useFindAndModify: false,
});

app.use(routes);

app.listen(PORT, () => {
    console.log(`App running at port localhost:${PORT}!`);
});
