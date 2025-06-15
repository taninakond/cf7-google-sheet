import { __ } from '@wordpress/i18n';
import { updateSettings } from '../../utils/api';
import { notify } from '../../utils/notify';
import Button from './Button';
import { useEffect, useState } from '@wordpress/element';

const Topbar = ({ active, setActive, page }) => {
    const [_changeStatus, setChangeStatus] = useState(false);

    useEffect(() => {
        const handleSettingsChange = (event) => {
            if(event.detail.changes === 'on') {
                setChangeStatus(true);
            }else if(event.detail.changes === 'off') {
                setChangeStatus(false);
            }
        }
        window.addEventListener('bdpcgs:settings-changed', handleSettingsChange);
        return () => {
            window.removeEventListener('bdpcgs:settings-changed', handleSettingsChange);
        };

    }, []);

    function pageIdToTitle(page) {
        page = page.replaceAll('-', ' ');
        return page.charAt(0).toUpperCase() + page.slice(1);
    }

    async function handleSaveChange() {
        const settings = window.bdpcgs.changesQueue || {};

        try {
            const result = await updateSettings(settings, true);
            if (result) {
                window.bdpcgs.settings = result;
            }
            notify(__('Settings updated successfully', 'cf7-google-sheet'));
            return true;
        } catch (error) {
            console.error(__('Error updating settings:', 'cf7-google-sheet'), error);
            notify(__('Failed to update settings', 'cf7-google-sheet'));
            return;
        }
    }

    function handleToggle() {
        setActive(!active);
        localStorage.setItem('bdpcgs_sidebar_collapse', !active);
    }

    const isActive = (_changeStatus && window.bdpcgs.changesQueue && Object.keys(window.bdpcgs.changesQueue).length) > 0; 

    return (
        <div className="bdp-topbar">
            <div className="bdp-topbar-left">
                <div onClick={() => handleToggle(!active)} className="bdp-toggle">
                    {active ? (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M360-120v-720h80v720h-80Zm160-160v-400l200 200-200 200Z" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M440-280v-400L240-480l200 200Zm80 160h80v-720h-80v720Z" /></svg>
                    )}
                </div>
                <div className="bdp-page-title">{pageIdToTitle(page)}</div>
            </div>
            <div className="bdp-topbar-right">
                <Button disabled={!isActive} title="Save Changes" type="gradient" onClick={handleSaveChange}>
                    {(_changeStatus && window.bdpcgs.changesQueue && Object.keys(window.bdpcgs.changesQueue).length > 0) && <span className="save-status"></span>}
                </Button>
            </div>
        </div>
    )
}

export default Topbar