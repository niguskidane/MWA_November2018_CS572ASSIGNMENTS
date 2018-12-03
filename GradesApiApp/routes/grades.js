const express = require('express');
const router = express.Router();


const courses = [{ id: 1, name: 'Assad Saad', given_course: 'CS572', grade: 95 },
{ id: 2, name: 'Assad Saad', given_course: 'CS572', grade: 98 },
{ id: 3, name: 'Bob Anna', given_course: 'CS579', grade: 93 },
{ id: 4, name: 'Martin Alex', given_course: 'CS467', grade: 90 }
]


router.get('/', (req, res) => {
    res.send('Welcome to my courses api!');
    res.end();
})

router.get('/api/courses', (req, res) => {
    res.status(200);
    res.json(courses);
    res.end();
});


router.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name,
        given_course: req.body.given_course,
        grade: req.body.grade
    }
    res.status(200);
    courses.push(course);
    res.send(course);
});

router.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id == parseInt(req.params.id));
    if (!course) {
        res.status(404).send('The course with this id is not found');
    }
    res.send(course);
});

router.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id == parseInt(req.params.id));
    if (!course) {
        res.status(404).send('The course with this id is not found');
    }
    console.log(">>>", courses);
    console.log("---", course);
    console.log("***", req.body);
    //course.id=req.body.id;
    course.name = req.body.name;
    course.given_course = req.body.given_course;
    course.grade = req.body.grade;

    res.send(course);
});

router.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id == parseInt(req.params.id));
    if (!course) {
        res.status(404).send('The course with this id is not found');
    }
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
});


module.exports = router;