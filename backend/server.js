import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// App initialization
const app = express()
const port = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use(cors())

// Database connection
connectDB()

// Api endpoints
app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads'))
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the backend server')
})

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})