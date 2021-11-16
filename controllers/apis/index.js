const router = require("express").Router();
const Workout = require("../../models/workout");

router.get(`/workouts`, (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalWeight: { $sum: "$exercises.weight" },
                totalDuration: { $sum: "$exercises.duration" },
            },
        },
    ])
        .then((workoutTransaction) => {
            res.json(workoutTransaction);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.post(`/workouts`, ({ body }, res) => {
    Workout.create(body)
        .then((workoutTransaction) => {
            res.json(workoutTransaction);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.put(`/workouts/:id`, (req, res) => {
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

router.get(`/workouts/range`, (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                // totalWeight: { $sum: "$exercises.weight" },
                totalDuration: { $sum: "$exercises.duration" },
            },
        },
    ])
        .then((workout) => {
            console.log(workout);
            const sevenRecent = [];
            i = 0;
            while (i < 7) {
                if (workout) {
                    let workoutDay = workout.pop();
                    sevenRecent.push(workoutDay);
                }
                i++;
            }
            res.json(sevenRecent);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;
