import express from 'express'
import { readdirSync, readFileSync } from 'fs'
require('dotenv').config()
const morgan = require('morgan')
import cors from 'cors'
import connectDB from './config/db'
import color from 'colors'

connectDB()
const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

readdirSync('./routes').map((r) => {
    app.use('/api', require(`./routes/${r}`))
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server connected on PORT:${PORT}`))