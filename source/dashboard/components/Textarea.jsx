import { useState } from '@wordpress/element';

const Textarea = ({ id, label, value, onChange }) => {

    const [_value, setValue] = useState(value || '');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleBlur = (e) => {
        setValue(e.target.value);
        onChange({ value: e.target.value, target: id });
    }

    return (
        <div class="bdp-input-wrapper">
            <label class="bdp-input-label" htmlFor="textarea">{label}</label>
            <textarea onBlur={handleBlur} class="bdp-input bdp-input-textarea" onChange={handleChange} id={id} value={_value} name={id} placeholder={label}></textarea>
        </div>
    )
}

export default Textarea