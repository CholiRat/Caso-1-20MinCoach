interface IFormState<T> {
    fields: T;
    isSubmitting: boolean;
    error: string | null;
}

abstract class FormController<T> {
    protected updateStateCallback: (newState: IFormState<T>) => void;
    protected initialState: T;

    constructor(initialState: T, updateStateCallback: (newState: IFormState<T>) => void) {
        this.initialState = initialState;
        this.updateStateCallback = updateStateCallback;
    }

    public resetForm(): void {
        this.updateStateCallback({
            fields: this.initialState,
            isSubmitting: false,
            error: null,
        });
    }

    public setFormField(currentState: IFormState<T>, field: keyof T, value: any): void {
        this.updateStateCallback({
            ...currentState,
            fields: {
                ...currentState.fields,
                [field]: value,
            },
        });
    }

    public abstract onSubmit(fields: T): Promise<void>;
}

export default FormController;