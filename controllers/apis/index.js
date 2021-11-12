const router = require("express").Router();
const Workout = require("../../models/workout");

router.get(`/workouts`, (req, res) => {
    Workout.find({})
        .then((workoutTransaction) => {
            res.json(workoutTransaction);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.post(`/workouts`, (req /*{data}*/, res) => {
    console.log(req.body)
    const data = req.body //route testing with insomnia, data is actually send as full body in front end
    Workout.create(data)
        .then((workoutTransaction) => {
            res.json(workoutTransaction);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// router.put(`/workouts/":id`);

// router.get(`/workouts/range`);

module.exports = router