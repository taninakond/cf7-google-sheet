
//const tabbarItems = [{ name: 'Dashboard', id: 'dashboard' }, { name: 'Settings', id: 'settings' }, { name: 'Help', id: 'help' }];
import { updateSettings } from '../../api';
import Input from '../components/Input';
import Section from '../components/Section';
import Select from '../components/Select';
import Switch from '../components/Switch';
import Textarea from '../components/Textarea';

const Dashboard = () => {



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