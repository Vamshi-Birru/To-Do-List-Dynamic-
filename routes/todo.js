const router = require('express').Router();
const Todo = require("../models/Todo")

router.post("/add/todo", (req, res) => {
  const { todo } = req.body;
  const newTodo = new Todo({ todo });
  newTodo.save()
    .then(() => {
      console.log(`Successfully added ${newTodo.todo} !!`);
      res.redirect("/")
    })
    .catch((err) => {
      console.log("Its an error");
    })
})
  .get("/delete/todo/:_id/:todo", (req, res) => {
    const { _id } = req.params;
    const { todo } = req.params;
    Todo.deleteOne({ _id })
      .then(() => {
        console.log(`Deleted  ${todo} Successfully!`);
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });
module.exports = router