const express = require("express")
const app = express()
const PORT = 3001

app.use(express.json())

// app.use("/shoes",require("./routes/shoes"))

app.listen(PORT,()=> console.log(`Servidor levantado en el puerto ${PORT}`))