// src/middleware/LoggingMiddleware.ts
import { MiddlewareBaseHandler, Request, Response } from './MiddlewareBaseHandler';
import logger from '../logging/Logger';
import { LogLevel } from '../logging/LogLevel';

export class LoggingMiddleware extends MiddlewareBaseHandler {
    public async handle(request: Request): Promise<Response> {
        logger.log('console', LogLevel.DEBUG, { message: `Enviando petición a ${request.url}` });
        
        try {
            const response = await super.handle(request);
            logger.log('console', LogLevel.INFO, { message: `Respuesta recibida de ${request.url}` });
            return response;
        } catch (error) {
            logger.log('sentry', LogLevel.ERROR, { message: `Error en la petición a ${request.url}`, error });
            throw error; // Re-lanza el error para que el siguiente middleware lo capture
        }
    }
}