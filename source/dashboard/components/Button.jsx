const Button = ({ title, type = 'primary', onClick }) => {
    return (
        <button onClick={onClick} className={`bdp-button bdp-button-${type}`}>
            {title}
        </button>
    )
}

export default Button