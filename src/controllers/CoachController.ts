import FormController from './FormController';

interface CoachFormFields {
    firstName: string;
    lastName: string;
    avatarURL: string;
    backgroundDesc: string;
    specialties: string[];
    isAvailable: boolean;
}

class CoachFormController extends FormController<CoachFormFields> {
    
    public async onSubmit(fields: CoachFormFields): Promise<void> {
        this.updateStateCallback({ fields, isSubmitting: true, error: null });

        try {
            if (fields.firstName.length < 2) {
                throw new Error("El nombre es demasiado corto.");
            }
            if (fields.backgroundDesc.length < 50) {
                throw new Error("La descripción debe tener al menos 50 caracteres.");
            }

            console.log("Actualizando perfil del coach con:", fields);
            // await coachService.updateProfile(updatedCoach);

            await new Promise(resolve => setTimeout(resolve, 1500));

            this.updateStateCallback({ fields, isSubmitting: false, error: null });
            
        } catch (error: any) {
            this.updateStateCallback({ fields, isSubmitting: false, error: error.message });
        }
    }
}