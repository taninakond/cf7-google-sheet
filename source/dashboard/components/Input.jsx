import { useState } from '@wordpress/element';

const Input = ({ id, label, value, type = 'text', onChange }) => {

    const [_value, setValue] = useState(value || '');

    const handleChange = (e) => {
        setValue(e.target.value);
        onChange(e.target.value);
    }

    return (
        <div className="bdp-input-wrapper">
            <label className="bdp-input-label" htmlFor={id}>{label}</label>
            <input className="bdp-input" type={type} onChange={handleChange} id={id} value={_value} name={id} placeholder={label} />
        </div>
    )
}

export default Input