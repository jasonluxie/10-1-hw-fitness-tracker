const router = require("express").Router();
const api = require("./apis");
const path = require("path"); //not sure if i need this

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("exercise?:id", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
} )
module.exports = router;
