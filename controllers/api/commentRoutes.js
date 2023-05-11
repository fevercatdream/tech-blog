const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
  if(!req.session.logged_in){
    return res.status(403).json({msg:"Login first!"})
  }
  try {
    console.log("Howdy", req.body);
    const newCommentPost = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCommentPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

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
