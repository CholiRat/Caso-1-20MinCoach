import { Request, Response } from './MiddlewareBaseHandler';

export interface MiddlewareHandler {

    setNext(handler: MiddlewareHandler): MiddlewareHandler;

    handle(request: Request): Promise<Response>;
}