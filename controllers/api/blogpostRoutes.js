const router = require('express').Router();
const { BlogPost } = require('../../models');

router.post('/', async (req, res) => {
  if(!req.session.logged_in){
    return res.status(403).json({msg:"Login first!"})
  }
  try {
    const newBlogPost = await BlogPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  if(!req.session.logged_in){
    return res.status(403).json({msg:"Login first!"})
  }
  try {
    const blogData = await BlogPost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog post found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
