const studentsCtrl = {}

const student = require('../models/students')

// Get
studentsCtrl.getStudents = async (req, res) => {
    const students = await student.find();
    res.json(students);
}

// Get by id
studentsCtrl.getStudent = async (req, res) => {
    try{
        const getstudent = await student.findById(req.params.id);
        if (!getstudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(getstudent);
    }catch (error) {
        res.status(500).json({ message: 'Error getting student', error });
    }
}

// Got by email
studentsCtrl.getStudentByEmail = async (req, res) => {
    try{
        const getstudent = await student.findOne({email: req.params.email});
        if (!getstudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(getstudent);
    }
    catch (error) {
        res.status(500).json({ message: 'Error getting student', error });
    }   
}

// Post
studentsCtrl.createStudent = async (req, res) => {
    try{
        const {id, name, last_name, email, phone, password } = req.body;
        const newStudent = new student({ id, name, last_name, email, phone, password });
        await newStudent.save();
        res.status(201).json({ message: 'Student created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating student', error });
    }
}

// Update
studentsCtrl.putStudent = async (req, res) => {
    const { name, last_name, email, phone, password } = req.body;
    const updtstudent = await student.findByIdAndUpdate( req.params.id, { name, last_name, email, phone, password } , {new : true});
    if (!updtstudent) {
        return res.status(404).json({ message: 'Student not found' });
    }
    res.json({message: 'Student updated successfully'});
}

// Delete
studentsCtrl.deleteStudent = async (req, res) => {
    try{
        await student.findByIdAndDelete(req.params.id);
        res.json({message: 'Student deleted successfully'});
    } catch (error) {
        res.status(500).json({ message: 'Error deleting student', error });
    }
}

module.exports = studentsCtrl;
