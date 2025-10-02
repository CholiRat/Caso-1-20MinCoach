import FormController from './FormController';

interface LoginFormFields {
    email: string;
    password: string;
}

class LoginController extends FormController<LoginFormFields> {
    
    public async onSubmit(fields: LoginFormFields): Promise<void> {
        this.updateStateCallback({ fields, isSubmitting: true, error: null });

        try {
            if (!fields.email || !fields.password) {
                throw new Error("El correo y la contraseña son obligatorios.");
            }
            if (!/^\S+@\S+\.\S+$/.test(fields.email)) {
                throw new Error("El formato del correo no es válido.");
            }

            console.log("Iniciando sesión con:", fields.email);
            // await authService.login(fields.email, fields.password);
            
            await new Promise(resolve => setTimeout(resolve, 1000)); 

            this.updateStateCallback({ fields, isSubmitting: false, error: null });
            
        } catch (error: any) {
            this.updateStateCallback({ fields, isSubmitting: false, error: error.message });
        }
    }
}