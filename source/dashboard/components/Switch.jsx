import { useState } from '@wordpress/element';

const Switch = ({id, label, checked, onChange}) => {
    const [_checked, setChecked] = useState(checked || false);

    const handleChange = (value) => {
        setChecked(value);
        onChange(value);
    }

    return (
        <div className={`bdp-switch bdp-switch-${id}`}>
            {label && <strong className="bdp-switch-label">{label}</strong>}
            <div className="bdp-switch-wrapper">
                <div onClick={() => handleChange(!_checked)} className="bdp-switch-input">
                    <span className={`bdp-slider bdp-switch-${_checked ? 'active' : 'inactive'}`}></span>
                </div>
            </div>
        </div>
    )
}

export default Switch