class IWebStateListener {

    update(webState) {
        throw new Error('update(webState) method must be implemented by subclass');
    }
}

export default IWebStateListener;