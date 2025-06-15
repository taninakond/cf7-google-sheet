const Button = ({ title, type = 'primary', onClick, disabled = false, classes = '', childPosition = 'left', children }) => {
    return (
        <button onClick={onClick} className={`bdp-button bdp-button-${type}${classes ? ' ' + classes : ''}`} disabled={disabled}>
            {childPosition === 'left' && children}
            {title}
            {childPosition === 'right' && children}
        </button>
    )
}

export default Button