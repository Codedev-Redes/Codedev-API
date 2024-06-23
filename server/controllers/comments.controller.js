const commentsCtrl = {};

const Comment = require('../models/comments');

// Get
commentsCtrl.getComments = async (req, res) => {
    const comments = await Comment.find();
    res.json(comments);
}

// Get by id
commentsCtrl.getComment = async (req, res) => {
    try{
        const getComment = await Comment.findById(req.params.id);
        if (!getComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.json(getComment);
    } catch (error) {
        res.status(500).json({ message: 'Error getting comment', error });
    }
}

// Get by students_id
commentsCtrl.getCommentByStudent = async (req, res) => {
    try{
        const getComment = await Comment.find({ students_id: req.params.students_id });
        if (!getComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.json(getComment);
    } catch (error) {
        res.status(500).json({ message: 'Error getting comment', error });
    }
}

// Get by courses_id
commentsCtrl.getCommentByCourse = async (req, res) => {
    try {
        const getComment = await Comment.find({ courses_id: req.params.courses_id });
        if (!getComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.json(getComment);
    } catch (error) {
        res.status(500).json({ message: 'Error getting comment', error });
    }
}

// Post
commentsCtrl.createComment = async (req, res) => {
    try{
        const { id, students_id, courses_id, title, description, date } = req.body;
        const newComment = new Comment({ id, students_id, courses_id, title, description, date });
        await newComment.save();
        res.status(201).json({ message: 'Comment created successfully'});
    } catch (error) {
        res.status(500).json({ message: 'Error creating comment', error });
    }
}

// Update
commentsCtrl.putComment = async (req, res) => {
    try{
        const { students_id, courses_id, title, description, date } = req.body;
        const updtComment = await Comment.findByIdAndUpdate( req.params.id , { students_id, courses_id, title, description, date } , {new : true});
        if (!updtComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.json({message: 'Comment updated successfully'});
    } catch (error) {
        res.status(500).json({ message: 'Error updating comment', error });
    }
}

// Delete
commentsCtrl.deleteComment = async (req, res) => {
    try{
        const dltComment = await Comment.findByIdAndDelete(req.params.id);
        if (!dltComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.json({message: 'Comment deleted successfully'});
    } catch (error) {
        res.status(500).json({ message: 'Error deleting comment', error });
    }
}

module.exports = commentsCtrl;