import { useState } from '@wordpress/element';

const Textarea = ({ id, label, value, onChange }) => {

  const [_value, setValue] = useState(value || '');

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  }

  return (
    <div class="bdp-input-wrapper">
      <label class="bdp-input-label" htmlFor="textarea">{label}</label>
      <textarea class="bdp-input bdp-input-textarea" onChange={handleChange} id={id} value={_value} name={id} placeholder={label}></textarea>
    </div>
  )
}

export default Textarea