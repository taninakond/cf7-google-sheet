const Tabbar = ({ tabbarItems, activeTabbarItem, setActiveTabbarItem }) => {
  return (
    <div className="bdp-tabbar">
        <div className="tabbar-items">
            {tabbarItems.map((item) => (
                <div onClick={() => setActiveTabbarItem(item)} key={item.id} className={`tabbar-item ${activeTabbarItem.id === item.id ? 'active' : ''}`}>{item.name}</div>
            ))}
        </div>
    </div>
  )
}

export default Tabbar