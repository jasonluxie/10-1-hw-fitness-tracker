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

router.post(`/workouts`, ({ body }, res) => {
    //route testing with insomnia, data is actually send as full body in front end
    Workout.create(body)
        .then((workoutTransaction) => {
            res.json(workoutTransaction);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.put(`/workouts/:id`, (req, res) => {
    console.log(req.body);
    Workout.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { exercises: req.body } }
    )
        .then((workoutTransaction) => {
            res.json(workoutTransaction);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get(`/workouts/range`),
    (req, res) => {
        Workout.find({});
    };

module.exports = router;
