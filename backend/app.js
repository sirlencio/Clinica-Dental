const express = require('express')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 3000;

app.use(cors())

app.use(express.json())

const patientsRoutes = require('./routes/patients')

app.use('/pacientes', patientsRoutes)

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})