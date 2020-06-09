// No Typescript os imports devem vir com a definição de tipos
import express from 'express' // Adicionar "npm install @types/express -D"
import cors from 'cors'
import path from 'path'

import routes from './routes'
import { errors } from 'celebrate' 

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors())

app.listen(3333)
