import Comment from "../models/Comment.js";
import User from "../models/user.js";

class CommentController {
  async addComment(req, res, next) {
    const { comment, projectId, userEmail } = req.body;

    try {
      const { email } = await User.findOne({ email: userEmail });

      if (!comment || !projectId || !email) {
        next({ message: `"Please provide all values"`, statusCode: 400 });
      }

      const userComment = await Comment.create({
        comment,
        projectId,
        userEmail: email,
      });

      res.status(201).json({ userComment });
    } catch (err) {
      next(err);
    }
  }

  async getComments(req, res, next) {
    const { projectId } = req.params;

    try {
      if (!projectId) {
        next({
          message: "Comments for this project does not exist",
          statusCode: 404,
        });
      }

      const comments = await Comment.find({ projectId });

      res.status(200).json({ comments: comments.reverse() });
    } catch (err) {
      next(err);
    }
  }

  async deleteComment(req, res, next) {
    const { commentId } = req.body;
    try {
      if (!commentId) {
        next({
          message: "Couldn't find the comment",
          statusCode: 404,
        });
      }

      const deletedComment = await Comment.findByIdAndRemove({
        _id: commentId,
      });

      res.status(200).json({ deletedComment });
    } catch (err) {
      next(err);
    }
  }
}

export { CommentController };
