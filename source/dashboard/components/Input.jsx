import { useState } from '@wordpress/element';

const Input = ({ id, label, value, type = 'text', onChange }) => {

    const [_value, setValue] = useState(value || '');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleBlur = (e) => {
        setValue(e.target.value);
        onChange({ value: e.target.value, target: id });
    }

    return (
        <div className="bdp-input-wrapper">
            <label className="bdp-input-label" htmlFor={id}>{label}</label>
            <input onBlur={handleBlur} className="bdp-input" type={type} onChange={handleChange} id={id} value={_value} name={id} placeholder={label} />
        </div>
    )
}

export default Input