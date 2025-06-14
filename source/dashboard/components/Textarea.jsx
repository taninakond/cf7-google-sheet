import { useState } from '@wordpress/element';

const TextareaField = ({ id, label, value, onChange }) => {

    const [_value, setValue] = useState(value || '');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleBlur = (e) => {
        setValue(e.target.value);
        onChange({ value: e.target.value, target: id });
    }

    return (
        <textarea onBlur={handleBlur} class="bdp-input bdp-input-textarea" onChange={handleChange} id={id} value={_value} name={id} placeholder={label}></textarea>
    )
}

const Textarea = ({ id, label, value, onChange }) => {

    

    return (
        <div class="bdp-input-wrapper">
            <label class="bdp-input-label" htmlFor="textarea">{label}</label>
            <TextareaField id={id} label={label} value={value} onChange={onChange} />
        </div>
    )
}

export default Textarea