import Coach from '../models/CoachUser';


// Interfaz para el estado de la página principal
export interface IMainPageState {
    searchResults: Coach[];
    isLoading: boolean;
    error: string | null;
}

export class MainPageController {
    private updateStateCallback: (newState: IMainPageState) => void;

    constructor(updateStateCallback: (newState: IMainPageState) => void) {
        this.updateStateCallback = updateStateCallback;
    }

    public async onSearch(query: string): Promise<void> {
        this.updateStateCallback({ searchResults: [], isLoading: true, error: null });
        try {
            // const results = await coachService.search(query);
            console.log("Buscando:", query);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simular llamada
            
            this.updateStateCallback({ searchResults: [], isLoading: false, error: null });
        } catch (error: any) {
            this.updateStateCallback({ searchResults: [], isLoading: false, error: error.message });
        }
    }
    
    public clearSearch(currentState: IMainPageState): void {
        this.updateStateCallback({ ...currentState, searchResults: [] });
    }
}