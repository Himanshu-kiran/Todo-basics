const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const cors=require("cors");//allow localhost to hit backend
const app = express();

//json data input or req working properly
app.use(express.json());//when a client sends a request with JSON data in the body, the express.json() middleware intercepts that request, reads the JSON data, and analyze and break down it into a JavaScript object that can be easily accessed and manipulated in your Express route handlers.
app.use(cors());

app.post("/todo", async function (req, res) {

  // payload refers to the data that is transmitted between the client (typically a web browser) and the server (your Node.js application)
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong  inputs",
    })
    return;
  }
  //put it in mongodb
  //await it to confirm the creation of todo then only show json msg
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  })
  res.json({
    msg: "Todo created"
  })
})

app.get("/todo", async function  (req, res) {
 const todos = await todo.find({});//will through promise as it will some time to find data and get abck from mongodb
 //commmenting out above line and sending todos :[]will give simply aarray 
 res.json({
    todos
  });

})

app.put("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    })
    return;
  }

  await todo.update({
    _id: req.body.id
  }, {
    completed: true
  })

  res.json({
    msg: "Todo marked as completed"
  })

})
const PORT=3000
app.listen(PORT,()=>{
  console.log(`the server is running on port ${PORT}`);
});