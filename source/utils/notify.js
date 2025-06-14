let notifyCallback = null;

export const notify = (options) => {
    if (!notifyCallback) {
        throw new Error('Notification system not initialized');
    }

    return new Promise((resolve) => {
        if (typeof options === 'string') {
            notifyCallback({ message: options, type: 'success', resolve });
        } else {
            notifyCallback({ ...options, resolve });
        }
    });
};

export const setNotifyCallback = (cb) => {
    notifyCallback = cb;
};
