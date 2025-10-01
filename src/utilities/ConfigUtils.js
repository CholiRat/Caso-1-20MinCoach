
import {LogLevel} from '../logging/LogLevel'

class Utilities {
    static instance = null;
    config = {};

    constructor() {
        if (Utilities.instance) {
            return Utilities.instance;
        }
        this.loadEnvironmentVariables();
        this.validateConfiguration();
    }

    static getInstance() {
        if (this.instance === null) {
            this.instance = new Utilities();
        }
        return this.instance;
    }

    loadEnvironmentVariables() {
        // mover a .env para mayor seguridad
        this.config = {
            API_URL: "https://api.20mincoach.com/v1",
            LANGUAGES: [],
            AUTH_PROVIDER: "auth0",
            ENVIRONMENT: "Dev", // Cambiar si es produccion o desarrollo
            LOG_LEVEL: LogLevel,
            SESSION_TIMEOUT: 900
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

    getSessionTimeout() {
        return this.config.SESSION_TIMEOUT;
    }

}

export default Utilities.getInstance();