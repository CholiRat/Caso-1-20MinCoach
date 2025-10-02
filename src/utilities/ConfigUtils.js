import { LogLevel } from '../logging/LogLevel';

class Utilities {
    static instance = null;
    config = {};

    constructor() {
        if (Utilities.instance) {
            return Utilities.instance;
        }
        this.loadEnvironmentVariables();
        this.validateConfiguration();
        Utilities.instance = this;
    }

    static getInstance() {
        if (this.instance === null) {
            this.instance = new Utilities();
        }
        return this.instance;
    }

    loadEnvironmentVariables() {
        // Cargar variables desde import.meta.env
        this.config = {
            API_URL: import.meta.env.VITE_API_URL,
            LANGUAGES: [], 
            AUTH_PROVIDER: import.meta.env.VITE_AUTH_PROVIDER,
            ENVIRONMENT: import.meta.env.VITE_ENVIRONMENT,
            LOG_LEVEL: LogLevel[import.meta.env.VITE_LOG_LEVEL] || LogLevel.INFO,
            SESSION_TIMEOUT: parseInt(import.meta.env.VITE_SESSION_TIMEOUT, 10) || 900
        };
    }

    validateConfiguration() {
        const requiredKeys = ["API_URL", "AUTH_PROVIDER"];
        for (const key of requiredKeys) {
            if (!this.config[key]) {
                throw new Error(`Error de Configuración: La clave requerida "${key}" no está definida.`);
            }
        }
    }

    getApiURL() {
        return this.config.API_URL;
    }
    

    getSessionTimeout() {
        return this.config.SESSION_TIMEOUT;
    }

    getLanguages() {
        return this.config.LANGUAGES;  
    }

    getAuthProvider() {
        return this.config.AUTH_PROVIDER;
    }
    
    getEnvironment() {
        return this.config.ENVIRONMENT;
    }

    getLogLevel() {
        return this.config.LOG_LEVEL;
    }
}

export default Utilities.getInstance();