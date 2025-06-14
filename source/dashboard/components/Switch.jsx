import { useState } from '@wordpress/element';

const SwitchButton = ({ id, checked, onChange }) => {

    const [isChecked, setChecked] = useState(checked || false);

    const handleChange = (value) => {
        setChecked(value);
        onChange({ value, target: id });
    }

    return (
        <div onClick={() => handleChange(!isChecked)} className="bdp-switch-input">
            <span className={`bdp-slider bdp-switch-${isChecked ? 'active' : 'inactive'}`}></span>
        </div>
    )
}

const Switch = ({ id, label, checked, onChange }) => {

    return (
        <div className={`bdp-switch bdp-switch-${id}`}>
            {label && <strong className="bdp-switch-label">{label}</strong>}
            <div className="bdp-switch-wrapper">
                <SwitchButton id={id} checked={checked} onChange={onChange} />
            </div>
        </div>
    )
}

export default Switch