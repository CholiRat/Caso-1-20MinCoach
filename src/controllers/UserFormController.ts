import FormController from './FormController';


interface UserFormFields {
    firstName: string;
    lastName: string;
    email: string;
    avatarURL: string;
}

class UserFormController extends FormController<UserFormFields> {
    
    public async onSubmit(fields: UserFormFields): Promise<void> {
        this.updateStateCallback({ fields, isSubmitting: true, error: null });

        try {
            if (fields.firstName.length < 2 || fields.lastName.length < 2) {
                throw new Error("El nombre y el apellido son obligatorios.");
            }

            console.log("Guardando perfil de usuario:", fields);
            // await userService.saveProfile(user);
            
            await new Promise(resolve => setTimeout(resolve, 1000));

            this.updateStateCallback({ fields, isSubmitting: false, error: null });
            
        } catch (error: any) {
            this.updateStateCallback({ fields, isSubmitting: false, error: error.message });
        }
    }
}