const {Router} = require('express');
const { getuser, createuser, updateuser, deleteuser, upload ,get} = require('../controllers/user.controller');

const userRouter = Router();
userRouter.get('/',get);
userRouter.get('/books', getuser);
userRouter.post('/addbook',upload.single("img"), createuser);
userRouter.patch('/books/update/:id',updateuser);
userRouter.delete('/book/delete/:id',deleteuser);

userRouter.post("/upload",upload.single("img"), (req, res) => {
    console.log("req.file", req.file);
    res.send("file uploaded successfully")
})

module.exports = userRouter;