// Tipos para la petición y respuesta (simplificados)
export type Request = { url: string; method: string; headers: Record<string, string>; data?: any; };
export type Response = { status: number; data: any; };

// Interfaz que debe cumplir cada eslabón de la cadena
export interface IHandlerMiddleware {
    setNext(handler: IHandlerMiddleware): IHandlerMiddleware;
    handle(request: Request): Promise<Response>;
}

// Clase base abstracta
export abstract class MiddlewareBaseHandler implements IHandlerMiddleware {
    protected nextMiddleware: IHandlerMiddleware | null = null;

    public setNext(handler: IHandlerMiddleware): IHandlerMiddleware {
        this.nextMiddleware = handler;
        return handler;
    }

    public async handle(request: Request): Promise<Response> {
        if (this.nextMiddleware) {
            return this.nextMiddleware.handle(request);
        }
        // El último eslabón de la cadena debe hacer la llamada real
        throw new Error("El último middleware debe ser el que realiza la petición (InterceptorMiddleware).");
    }
}