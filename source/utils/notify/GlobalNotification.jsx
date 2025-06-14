import React, { useState, useEffect } from 'react';
import { setNotifyCallback } from '../notify';
import './Notification.css';
import { __ } from '@wordpress/i18n';

const GlobalNotification = () => {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState('success');
    const [resolvePromise, setResolvePromise] = useState(() => () => { });
    const [duration, setDuration] = useState(3000);

    useEffect(() => {
        setNotifyCallback(({ message, type = 'success', duration = 2000, resolve }) => {
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
        <div className={`bdpcgs-notification bdpcgs-notification-${type}`}>
            <span className="bdpcgs-notification-message">{message}</span>
            {type === 'confirm' ? (
                <div className="buttons">
                    <button className="bdpcgs-notification-confirm" onClick={handleConfirm}>{__('Confirm', 'cf7-google-sheet')}</button>
                    <button className="bdpcgs-notification-cancel" onClick={handleCancel}>{__('Cancel', 'cf7-google-sheet')}</button>
                </div>
            ) : (
                <button className="bdpcgs-notification-close" onClick={handleClose}>×</button>
            )}
        </div>
    );
};

export default GlobalNotification;
