import 'dotenv/config'
import express, {Express} from 'express'
import publicRouter from './routes/public'

const app: Express = express()
const appHost = String(process.env.APP_HOST)
const appPort = Number(process.env.APP_PORT)

// Routers
app.use('/', publicRouter)

app.listen(appPort, appHost, () => {
    console.log(`App Running on http://${appHost + ':' + appPort}`)
})
