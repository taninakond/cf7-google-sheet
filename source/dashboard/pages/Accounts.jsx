import Section from '../components/Section'
import Switch from '../components/Switch'

const Accounts = () => {
    const handleChange = (value) => {
		console.log(value);
	}
    return (
        <div className="bdp-content-box">
            <Section title="Authorization Type">
                <Switch id="oneClickAuthorization" label="One Click Authorization" onChange={handleChange} />
                <div className="bdp-section-description">If you want to use one click authorization, you can enable this option</div>
            </Section>
        </div>
    )
}

export default Accounts