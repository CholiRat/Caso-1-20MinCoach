// src/middleware/PermissionsMiddleware.ts
import { MiddlewareBaseHandler, Request, Response } from './MiddlewareBaseHandler';

export class PermissionsMiddleware extends MiddlewareBaseHandler {
    public async handle(request: Request): Promise<Response> {
        console.log("PermissionsMiddleware: Añadiendo token...");
        // const token = authService.getToken();
        const token = "dummy-token-for-now";
        
        request.headers['Authorization'] = `Bearer ${token}`;
        
        // Pasa la petición al siguiente eslabón
        return super.handle(request);
    }
}