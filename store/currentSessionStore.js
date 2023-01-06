import { decorate, observable, action } from "mobx"

class CurrentSessionStore {
    currentSession = { id: "" }

    handleSetCurrentSession = (newSession) => {
        this.currentSession = newSession
    }

    handleClearCurrentSession = () => {
        this.currentSession = { id: "" }
    }
}

decorate(CurrentSessionStore, {
    currentSession: observable,
    handleSetCurrentSession: action,
    handleClearCurrentSession: action
})

export default new CurrentSessionStore()
