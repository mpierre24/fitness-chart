var express = require('express')
var router = express.Router()
const path = require('path')
const db = require("../models/index.js")

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});


router.get("/api/workouts", (req, res) => {
    db.Workouts.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });

});

router.put("/api/workouts/:objectId", (req, res) => {
    db.Workouts.findOneAndUpdate({ _id: req.params.objectId }, { $push: { exercises: req.body } })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });

});

router.post("/api/workouts", ({ body }, res) => {
    db.Workouts.create(body)

        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });

});

router.get("/api/workouts/range", (req, res) => {
    db.Workouts.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });

});

// If no matching route is found default to home
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router