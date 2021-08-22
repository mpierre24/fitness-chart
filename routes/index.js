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
    //     db.User.find({})
    //         .then(dbUser => {
    //             res.json(dbUser);
    //         })
    //         .catch(err => {
    //             res.json(err);
    //         });
    res.send("Hit route 2!");
});

router.post("api/workouts", ({ body }, res) => {
    //     db.Note.create(body)
    //         .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
    //         .then(dbUser => {
    //             res.json(dbUser);
    //         })
    //         .catch(err => {
    //             res.json(err);
    //         });
    res.send("Hit route 3!");
});

router.get("/api/workouts/range", (req, res) => {
    //     db.User.find({})
    //         .populate("notes")
    //         .then(dbUser => {
    //             res.json(dbUser);
    //         })
    //         .catch(err => {
    //             res.json(err);
    //         });
    res.send("Hit route 4!");
});

// If no matching route is found default to home
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router