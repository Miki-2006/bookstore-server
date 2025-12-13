import express from 'express'
import 'dotenv/config'
import mainRouter from './src/routes/index.js'


const app = express()


app.use(express.json())
app.use('/api', mainRouter)
app.get('/', (req, res) => {
    res.send("Hello Mirlan!!!")
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

export default app;