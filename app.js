// npm install express
// npm install dotenv
// npm install ejs 

const express = require ('express')
const app = express()


const mainRouter = require('./source/routes/mainRouter');
const userRouter = require('./source/routes/userRouter');

app.listen(process.env.PORT, () => {
    console.log ("Servidor escuchando Puerto " + process.env.PORT)
}) 


app.use (express.urlencoded ({extended:false}))
app.use (express.json())
app.use ('/', mainRouter)
app.use ('/', userRouter)
app.use ('/', productRouter)

app.use(express.static('public'));