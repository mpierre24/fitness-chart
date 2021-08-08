var express = require('express')
var router = express.Router()
const path = require('path')
// const db = require("./models")

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});


// router.get("/notes", (req, res) => {
//     db.Note.find({})
//         .then(dbNote => {
//             res.json(dbNote);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

// router.get("/user", (req, res) => {
//     db.User.find({})
//         .then(dbUser => {
//             res.json(dbUser);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

// router.post("/submit", ({ body }, res) => {
//     db.Note.create(body)
//         .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
//         .then(dbUser => {
//             res.json(dbUser);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

// router.get("/populateduser", (req, res) => {
//     db.User.find({})
//         .populate("notes")
//         .then(dbUser => {
//             res.json(dbUser);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

// If no matching route is found default to home
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router