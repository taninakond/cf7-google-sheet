import { useState } from '@wordpress/element';

const SelectOptions = ({ id, options, value, onChange }) => {
    const [_value, setValue] = useState(value || '');

    const handleChange = (value) => {
        setValue(value);
        onChange({ value, target: id });
    }

    return (
        <select value={_value} onChange={(e) => handleChange(e.target.value)} className="bdp-select" id={id}>
            <option value="">Select One</option>
            {options.map((option) => (
                <option className="bdp-select-option" key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    )
}

const Select = ({ id, label, value, options, onChange }) => {

    return (
        <div className="bdp-select-wrapper">
            <label className="bdp-select-label" htmlFor={id}>{label}</label>
            <SelectOptions id={id} options={options} value={value} onChange={onChange} />
        </div>
    )
}

export default Select