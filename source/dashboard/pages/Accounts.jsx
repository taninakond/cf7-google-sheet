import { updateSettings } from '../../api'
import Section from '../components/Section'
import Switch from '../components/Switch'
import { __ } from '@wordpress/i18n'

const Accounts = () => {

    const handleChange = (event) => {
        updateSettings({ [event.target]: event.value })
            .then(response => {
                window.bdpcgs.settings = response;
            }).catch(error => {
                console.error('Error updating settings:', error);
            });


    }
    return (
        <div className="bdp-content-box">
            <Section title={__('Authorization Type', 'cf7-google-sheet')}>
                <Switch checked={window.bdpcgs.settings.one_click_authorization} id="one_click_authorization" label={__('One Click Authorization', 'cf7-google-sheet')} onChange={handleChange} />
                <div className="bdp-section-description">{__('If you want to use one click authorization, you can enable this option.', 'cf7-google-sheet')}</div>
            </Section>
        </div>
    )
}

export default Accounts