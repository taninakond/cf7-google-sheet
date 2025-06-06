import { useState } from '@wordpress/element';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Help from './pages/Help';
import Settings from './pages/Settings';
import Accounts from './pages/Accounts';
const App = () => {

    const [page, setPage] = useState(localStorage.getItem('bdp_page') || 'dashboard');
    const [active, setActive] = useState(false);

    const handlePage = (page) => {
        setPage(page);
        localStorage.setItem('bdp_page', page);
    }

    return (
        <>
            <div className="bdp-container">
                <Sidebar active={active} page={page} handlePage={handlePage} />

                <div className={`bdp-main ${active ? 'active' : ''}`}>
                    <Topbar active={active} setActive={setActive} page={page} />
                    <div className="bdp-content">
                        {page === 'dashboard' && <Dashboard />}
                        {page === 'settings' && <Settings />}
                        {page === 'accounts' && <Accounts />}
                        {page === 'help' && <Help />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default App