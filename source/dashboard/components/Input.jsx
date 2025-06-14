import { useState } from '@wordpress/element';

const InputField = ({ id, label, value, type, onChange }) => {
    const [_value, setValue] = useState(value || '');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleBlur = (e) => {
        setValue(e.target.value);
        onChange({ value: e.target.value, target: id });
    }

    return (
        <input onBlur={handleBlur} className="bdp-input" type={type} onChange={handleChange} id={id} value={_value} name={id} placeholder={label} />
    )
}

const Input = ({ id, label, value, type = 'text', onChange }) => {

    return (
        <div className="bdp-input-wrapper">
            <label className="bdp-input-label" htmlFor={id}>{label}</label>
            <InputField id={id} label={label} value={value} type={type} onChange={onChange} />
        </div>
    )
}

export default Input