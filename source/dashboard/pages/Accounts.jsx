import { updateSettings } from '../../utils/api'
import { notify } from '../../utils/notify'
import Section from '../components/Section'
import Switch from '../components/Switch'
import { __ } from '@wordpress/i18n'

const Accounts = () => {

    const handleChange = async (event) => {

		const key = event.target;
		const value = event.value;

		try {
			const response = await updateSettings({ [key]: value });
			window.bdpcgs.settings = response;
			
			if (window.bdpcgs.settings.auto_save) {
				notify(__('Settings updated successfully', 'cf7-google-sheet'));
			}

			return true;
		} catch (error) {
			console.error('Error updating settings:', error);
			notify(__('Failed to update settings', 'cf7-google-sheet'));
			return;
		}
	};



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