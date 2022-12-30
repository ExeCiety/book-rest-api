import express, {Router} from 'express'
import controller from "../controllers/controller";

const router: Router = express.Router()

router.get('/', controller.welcome)

export default router
