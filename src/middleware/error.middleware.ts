import { Request, Response, NextFunction } from 'express'

import HttpException from '../common/http-exception'

export const errorHandler = (error: HttpException, request: Request, response: Response, nest: NextFunction) => {
	const status = error.statusCode || 500
	const message = error.message || "It's not you. It's us. We have a problem our end."

	response.status(status).send(message)
}
