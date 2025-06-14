
//const tabbarItems = [{ name: 'Dashboard', id: 'dashboard' }, { name: 'Settings', id: 'settings' }, { name: 'Help', id: 'help' }];
import { __ } from '@wordpress/i18n';
import { updateSettings } from '../../utils/api';
import { notify } from '../../utils/notify';
import Input from '../components/Input';
import Section from '../components/Section';
import Select from '../components/Select';
import Switch from '../components/Switch';
import Textarea from '../components/Textarea';

const Dashboard = () => {



	const handleChange = async (event) => {

		const key = event.target;
		const value = event.value;

		try {
			const response = await updateSettings({ [key]: value });
			window.bdpcgs.settings = response;

			if (window.bdpcgs.settings.auto_save) {
				notify({
					message: __('Settings updated successfully', 'cf7-google-sheet'),
					type: 'success',
				});
			}

			return true;
		} catch (error) {
			console.error('Error updating settings:', error);
			notify({
				message: __('Failed to update settings', 'cf7-google-sheet'),
				type: 'error',
			});
			return;
		}
	};


	return (
		<div className="bdp-content-box">
			<Section title="Dashboard settings">
				<Switch checked={window.bdpcgs.settings.auto_save} id="auto_save" label="Auto Save" onChange={handleChange} />
				<div className="bdp-section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel, placeat nam facilis aliquid magnam facere consequatur voluptatibus itaque. Doloribus?</div>
			</Section>

			<Section title="Settings">
				<Switch checked={window.bdpcgs.settings.debug} id="debug" label="Debug" onChange={handleChange} />
				<div className="bdp-section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel, placeat nam facilis aliquid magnam facere consequatur voluptatibus itaque. Doloribus?</div>
			</Section>

			<Section title="Settings">
				<Select value={window.bdpcgs.settings.theme} id="theme" label="Theme" options={[{ label: 'Light', value: 'light' }, { label: 'Dark', value: 'dark' }]} onChange={handleChange} />
				<div className="bdp-section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel, placeat nam facilis aliquid magnam facere consequatur voluptatibus itaque. Doloribus?</div>
			</Section>

			<Section title="Theme">
				<Input id="theme1" label="Theme1" onChange={handleChange} value={window.bdpcgs.settings.theme1} />
				<div className="bdp-section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel, placeat nam facilis aliquid magnam facere consequatur voluptatibus itaque. Doloribus?</div>
			</Section>

			<Section title="Theme">
				<Textarea id="theme2" label="Theme2" onChange={handleChange} value={window.bdpcgs.settings.theme2} />
				<div className="bdp-section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel, placeat nam facilis aliquid magnam facere consequatur voluptatibus itaque. Doloribus?</div>
			</Section>

		</div>
	)
}

export default Dashboard