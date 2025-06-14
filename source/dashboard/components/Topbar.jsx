import Button from './Button';

const Topbar = ({ active, setActive, page }) => {

    function pageIdToTitle(page) {
        page = page.replaceAll('-', ' ');
        return page.charAt(0).toUpperCase() + page.slice(1);
    }

    function handleSaveChange() {
        console.log('handleSaveChange');
    }

    function handleToggle() {
        setActive(!active);
        localStorage.setItem('bdpcgs_sidebar_collapse', !active);
    }

    return (
        <div className="bdp-topbar">
            <div className="bdp-topbar-left">
                <div onClick={() => handleToggle(!active)} className="bdp-toggle">
                    {active ? (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M360-120v-720h80v720h-80Zm160-160v-400l200 200-200 200Z" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M440-280v-400L240-480l200 200Zm80 160h80v-720h-80v720Z" /></svg>
                    )}
                </div>
                <div className="bdp-page-title">{pageIdToTitle(page)}</div>
            </div>
            <div className="bdp-topbar-right">
                <Button title="Save Changes" type="gradient" onClick={handleSaveChange} />
            </div>
        </div>
    )
}

export default Topbar