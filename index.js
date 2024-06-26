const express = require("express")
const app = express()
const PORT = 3001
const cors = require ('cors')
//const { typeError } = require('./middlewares/errors');

app.use(express.json())
app.use(cors())

app.use("/products",require("./routes/products"))
app.use("/categories",require("./routes/categories"))
app.use("/users",require("./routes/user"));
app.use('/orders',require('./routes/orders'));



//app.use(typeError)



app.listen(PORT,()=> console.log(`Servidor levantado en el puerto ${PORT}`))