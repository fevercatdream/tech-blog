const router = require('express').Router();
const { Comment } = require('../../models');

// back end route add comment
router.post('/', async (req, res) => {
  if(!req.session.logged_in){
    return res.status(403).json({msg:"Login first!"})
  }
  try {
    const newCommentPost = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCommentPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// back end route delete comment
router.delete('/:id', async (req, res) => {
  if(!req.session.logged_in){
    return res.status(403).json({msg:"Login first!"})
  }
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
