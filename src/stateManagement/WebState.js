/**
 * WebState class implementing Singleton and Observer patterns
 * Manages the global application state including user, session, and view information
 */
class WebState {

    static instance = null;
    static subscribers = [];

    static currentView = '';
    static loginUser = null;
    static activeSession = null;
    static language = 'en';
    // Other state properties relevant to manage the state

    constructor() {
        if (WebState.instance) {
            return WebState.instance;
        }
        WebState.instance = this;
    }

    static getInstance() {
        if (!WebState.instance) {
            WebState.instance = new WebState();
        }
        return WebState.instance;
    }

    getCurrentView() {
        return this.currentView;
    }

    setCurrentView(view) {
        this.currentView = view;
        this.notify();
    }

    getLoginUser() {
        return this.loginUser;
    }

    setLoginUser(user) {
        this.loginUser = user;
        this.notify();
    }

    getActiveSession() {
        return this.activeSession;
    }

    setActiveSession(session) {
        this.activeSession = session;
        this.notify();
    }

    getLanguage() {
        return this.language;
    }

    setLanguage(language) {
        this.language = language;
        this.notify();
    }

    // Other getter and setter methods for state properties...

    // ***********************
    // Observer pattern methods
    // ***********************
    subscribe(listener) {
        this.subscribers.push(listener);
    }

    unsubscribe(listener) {
        const index = this.subscribers.indexOf(listener);
        if (index > -1) {
            this.subscribers.splice(index, 1);
        }
    }

    notify() {
        this.subscribers.forEach(listener => {
            try {
                // Pass the ENTIRE WebState instance to the update method
                listener.update(this);
            } catch (error) {
                // Call exceptionHandler to avoid breaking the notification loop
            }
        });
    }

}

export default WebState;