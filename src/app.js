import express from 'express'
import morgan from 'morgan'
import productsRoutes from './routes/products.routes'
import userRoutes from './routes/auth.routes'
const app = express()

app.use(morgan('dev'))
app.use(express.json())


app.get('/', (req, res) =>{
    res.json('HELLO')
})

app.use('/api/products', productsRoutes)
app.use('/api/auth', userRoutes)

export default app