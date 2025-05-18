const Section = ({ title, children }) => {
    return (
        <div className="bdp-section-wrapper">
            <div className="bdp-section">
            <h3 className="bdp-section-title">{title}</h3>
                {children}
            </div>
        </div>
    )
}

export default Section