const coursesCtrl = {};

const course = require('../models/courses');

// Get
coursesCtrl.getCourses = async (req, res) => {
    const courses = await course.find();
    res.json(courses);
}


// Get by id
coursesCtrl.getCourse = async (req, res) => {
    try{
        const getcourse = await course.findById(req.params.id);
        if (!getcourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.json(getcourse);
    } catch (error) {
        res.status(500).json({ message: 'Error getting course', error });
    }
}

// Get by categories_id
coursesCtrl.getCourseByCategory = async (req, res) => {
    try{
        const getcourse = await course.find({ categories_id: req.params.categories_id });
        if (!getcourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.json(getcourse);
    } catch (error) {
        res.status(500).json({ message: 'Error getting course', error });
    }
}

// Get by mentors_id
coursesCtrl.getCourseByMentor = async (req, res) => {
    try{
        const getcourse = await course.find({ mentors_id: req.params.mentors_id });
        if (!getcourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.json(getcourse);
    } catch (error) {
        res.status(500).json({ message: 'Error getting course', error });
    }
}

// Post
coursesCtrl.createCourse = async (req, res) => {
    try{
        const { id, name, description, course_price, categories_id, image, mentors_id } = req.body;
        const newCourse = new course({ id, name, description, course_price, categories_id, image, mentors_id });
        await newCourse.save();
        res.status(201).json({ message: 'Course created successfully'});
    } catch (error) {
        res.status(500).json({ message: 'Error creating course', error });
    }
}

// Update
coursesCtrl.putCourse = async (req, res) => {
    try{
        const { name, description, courses_price, categories_id, image, mentores_id } = req.body;
        const updtcourse = await course.findByIdAndUpdate( req.params.id , { name, description, courses_price, categories_id, image, mentores_id } , {new : true});
        if (!updtcourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.json({message: 'Course updated successfully'});
    } catch (error) {
        res.status(500).json({ message: 'Error updating course', error });
    }
}

// Delete
coursesCtrl.deleteCourse = async (req, res) => {
    try{
        const dltCourse = await course.findByIdAndDelete(req.params.id);
        if (!dltCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.json({message: 'Course deleted successfully'});
    } catch (error) {
        res.status(500).json({ message: 'Error deleting course', error });
    }
}

module.exports = coursesCtrl;