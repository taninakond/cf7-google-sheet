import React, { useState, useEffect } from 'react';
import { setNotifyCallback } from './notify';
import './Notification.css';

const GlobalNotification = () => {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState('success');
    const [resolvePromise, setResolvePromise] = useState(() => () => { });
    const [duration, setDuration] = useState(3000);

    useEffect(() => {
        setNotifyCallback(({ message, type = 'success', duration = 3000, resolve }) => {
            setMessage(message);
            setType(type);
            setResolvePromise(() => resolve);
            setDuration(duration);
            setVisible(true);
        });
    }, []);

    useEffect(() => {
        if (visible && type !== 'confirm') {
            const timer = setTimeout(() => {
                setVisible(false);
                resolvePromise({ isConfirmed: true });
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [visible, duration, type, resolvePromise]);

    const handleConfirm = () => {
        resolvePromise({ isConfirmed: true });
        setVisible(false);
    };

    const handleCancel = () => {
        resolvePromise({ isConfirmed: false });
        setVisible(false);
    };

    const handleClose = () => {
        if (type === 'confirm') {
            resolvePromise({ isConfirmed: false });
        } else {
            resolvePromise({ isConfirmed: true });
        }
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className={`bdpcgs-notification ${type}`}>
            <span>{message}</span>
            {type === 'confirm' ? (
                <div className="buttons">
                    <button className="confirm" onClick={handleConfirm}>Confirm</button>
                    <button className="cancel" onClick={handleCancel}>Cancel</button>
                </div>
            ) : (
                <button onClick={handleClose}>×</button>
            )}
        </div>
    );
};

export default GlobalNotification;
