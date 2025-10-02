// src/middleware/ErrorHandlingMiddleware.ts
import { MiddlewareBaseHandler, Request, Response } from './MiddlewareBaseHandler';
import exceptionHandler from '../exceptionHandling/exceptionHandler';

export class ErrorHandlingMiddleware extends MiddlewareBaseHandler {
    public async handle(request: Request): Promise<Response> {
        try {
            // Intenta ejecutar la cadena
            return await super.handle(request);
        } catch (error: any) {
            const status = error.response?.status;
            if (status === 401 || status === 403) {
                exceptionHandler.handleException('AUTH-001');
            } else if (status >= 500) {
                exceptionHandler.handleException('API-001');
            } else if (!error.response) {
                exceptionHandler.handleException('NETWORK-001');
            } else {
                exceptionHandler.handleException('UNKNOWN_001');
            }
            // Re-lanzamos para que la llamada original falle
            throw error;
        }
    }
}