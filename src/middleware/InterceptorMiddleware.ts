// src/middleware/InterceptorMiddleware.ts
import axios from 'axios';
import { MiddlewareBaseHandler, Request, Response } from './MiddlewareBaseHandler';

// Este es el último eslabón, que hace la llamada real usando axios
export class InterceptorMiddleware extends MiddlewareBaseHandler {
    public async handle(request: Request): Promise<Response> {
        try {
            const response = await axios({
                url: request.url,
                method: request.method,
                headers: request.headers,
                data: request.data,
                baseURL: 'https://api.20mincoach.com/v1',
            });
            return { status: response.status, data: response.data };
        } catch (error: any) {
            // Si axios falla, convierte el error en una estructura que el ErrorHandlingMiddleware pueda entender
            if (axios.isAxiosError(error)) {
                throw {
                    ...error,
                    response: {
                        status: error.response?.status,
                        data: error.response?.data
                    }
                };
            }
            throw error;
        }
    }
}