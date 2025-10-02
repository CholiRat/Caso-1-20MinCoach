import axios from 'axios'; // Es necesario instalar axios para el uso de interceptores
import logger from '../logging/Logger';
import { LogLevel } from '../logging/LogLevel';
import exceptionHandler from '../exceptionHandling/exceptionHandler';


const apiClient = axios.create({
  baseURL: 'https://api.20mincoach.com/v1', // URL base de la API
  headers: {
    'Content-Type': 'application/json',
  },
});


apiClient.interceptors.request.use(
  (config) => {
    const token = "TokeAuth0";
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    logger.log('console', LogLevel.DEBUG, { message: `Enviando petición a ${config.url}` });
    return config;
  },
  (error) => {
    logger.log('sentry', LogLevel.ERROR, { message: 'Error en la configuración de la petición', error });
    return Promise.reject(error);
  }
);


apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Errores de API
    const { response } = error;

    if (response) {
      // El servidor respondió con un código de estado de error
      logger.log('sentry', LogLevel.WARN, { 
        message: `Error de API: ${response.status} en ${response.config.url}`,
        data: response.data 
      });

      if (response.status === 401 || response.status === 403) {
        // Error de permisos o no autenticado
        exceptionHandler.handleException('AUTH-001');
      } else {
        // Otros errores del servidor (500, etc.)
        exceptionHandler.handleException('API-001');
      }

    } else if (error.request) {
      // La petición se hizo pero no se recibió respuesta (ej. sin conexión)
      exceptionHandler.handleException('NETWORK-001');
    } else {
      // Error al configurar la petición
      exceptionHandler.handleException('UNKNOWN_001');
    }

    return Promise.reject(error);
  }
);

export default apiClient;