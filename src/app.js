import express from 'express'
import morgan from 'morgan'
import {createRoles, createAdmin  } from "./libs/inicioSetup";
import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
const app = express()
createRoles()
createAdmin()

app.use(morgan('dev'))
app.use(express.json())


app.get('/', (req, res) =>{
    res.json('HELLO')
})

app.use('/api/products', productsRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)

export default app