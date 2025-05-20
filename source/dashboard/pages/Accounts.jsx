import Section from '../components/Section'
import Switch from '../components/Switch'
import __ from '@wordpress/i18n'

const Accounts = () => {
    const handleChange = (value) => {
		console.log(value);
	}
    return (
        <div className="bdp-content-box">
            <Section title={__('Authorization Type', 'cf7-google-sheet')}>
                <Switch id="oneClickAuthorization" label={__('One Click Authorization', 'cf7-google-sheet')} onChange={handleChange} />
                <div className="bdp-section-description">{__('If you want to use one click authorization, you can enable this option.', 'cf7-google-sheet')}</div>
            </Section>
        </div>
    )
}

export default Accounts