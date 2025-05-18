const sidebarItems = [
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Zm0-80h640v-560H160v560Zm80-80h480v-80H240v80Zm0-160h160v-240H240v240Zm240 0h240v-80H480v80Zm0-160h240v-80H480v80ZM160-200v-560 560Z" /></svg>),
        title: 'Dashboard',
        id: 'dashboard',
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" /></svg>),
        title: 'Settings',
        id: 'settings',
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z" /></svg>),
        title: 'Accounts',
        id: 'accounts',
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-80q-50 0-85-35t-35-85v-120h120v-560l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-560H320v440h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h240v80H360Zm0 120v-80h240v80H360Zm320-120q-17 0-28.5-11.5T640-640q0-17 11.5-28.5T680-680q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600Zm0 120q-17 0-28.5-11.5T640-520q0-17 11.5-28.5T680-560q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm-40 0v-80 80Z" /></svg>),
        title: 'Google Sheet Log',
        id: 'google-sheet-log',
    }
];

const Sidebar = ({ page, active, handlePage }) => {
    return (
        <div className={`bdp-navigation ${active ? 'active' : ''}`}>
            <ul className="bdp-menu-items">
                <li className="bdp-menu-item">
                    <span className="bdp-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" fill="none"><path fill="#00AD3C" d="M15.818 24H1.636C.736 24 0 23.264 0 22.364V1.636C0 .736.736 0 1.636 0h9.819l6 6v16.364c0 .9-.737 1.636-1.637 1.636Z" /><path fill="#00831E" d="m11.455 0 6 6h-6V0Z" /><path fill="#FBFFFF" d="M3.273 9.41v7.636h10.909V9.409H3.272Zm4.772 6.272H4.636v-1.773h3.41v1.773Zm0-3.136H4.636v-1.773h3.41v1.773Zm4.773 3.136H9.41v-1.773h3.41v1.773Zm0-3.136H9.41v-1.773h3.41v1.773Z" /></svg>
                    </span>
                    <span className="bdp-title">CF7 To G. Sheet</span>
                </li>
                {sidebarItems.map(item => (
                    <li key={item.id} onClick={() => handlePage(item.id)} className={`bdp-menu-item ${page === item.id ? 'active' : ''}`}>

                        <span className="bdp-icon">
                            {item.icon}
                        </span>
                        <span className="bdp-title">{item.title}</span>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar