import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";

class Controller {
    /**
     * Welcome
     *
     * @param req
     * @param res
     */
    welcome(req: Request, res: Response) {
        return res.status(StatusCodes.OK)
            .json({
                'status_code': StatusCodes.OK,
                'message': 'Welcome to Book Rest API'
            })
    }
}

export default new Controller()
