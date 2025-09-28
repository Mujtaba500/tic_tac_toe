import express from 'express';

const authRouter = express.Router();

authRouter.use('/login', (req, res) => {
  console.log('yolo');
  res.json({
    message: 'yolo'
  });
});

export default authRouter;
