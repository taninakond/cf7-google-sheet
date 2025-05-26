
//const tabbarItems = [{ name: 'Dashboard', id: 'dashboard' }, { name: 'Settings', id: 'settings' }, { name: 'Help', id: 'help' }];
import Input from '../components/Input';
import Section from '../components/Section';
import Select from '../components/Select';
import Switch from '../components/Switch';
import Textarea from '../components/Textarea';

const Dashboard = () => {

	

	const handleChange = (value) => {
		console.log(value);
	}

	return (
		<div className="bdp-content-box">
			<Section title="Dashboard settings">
				<Switch id="autoSave" label="Auto Save" onChange={handleChange} />
				<div className="bdp-section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel, placeat nam facilis aliquid magnam facere consequatur voluptatibus itaque. Doloribus?</div>
			</Section>

			<Section title="Settings">
				<Switch id="debug" label="Debug" onChange={handleChange} />
				<div className="bdp-section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel, placeat nam facilis aliquid magnam facere consequatur voluptatibus itaque. Doloribus?</div>
			</Section>

			<Section title="Settings">
				<Select id="theme" label="Theme" value="" options={[{ label: 'Light', value: 'light' }, { label: 'Dark', value: 'dark' }]} onChange={handleChange} />
				<div className="bdp-section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel, placeat nam facilis aliquid magnam facere consequatur voluptatibus itaque. Doloribus?</div>
			</Section>

			<Section title="Theme">
				<Input id="theme1" label="Theme1" onChange={handleChange} value="Default1" />
				<div className="bdp-section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel, placeat nam facilis aliquid magnam facere consequatur voluptatibus itaque. Doloribus?</div>
			</Section>

			<Section title="Theme">
				<Textarea id="theme2" label="Theme2" onChange={handleChange} value="Default2" />
				<div className="bdp-section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel, placeat nam facilis aliquid magnam facere consequatur voluptatibus itaque. Doloribus?</div>
			</Section>

		</div>
	)
}

export default Dashboard