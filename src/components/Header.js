const Header = ({ darkMode, toggleTheme, sidebarOpen, setSidebarOpen, onRefresh }) => {
    return (
        <div className="header">
            <div className="header-left">
                <div className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <i className="fas fa-bars"></i>
                </div>
                <h1>Visão Geral</h1>
            </div>
            <div className="header-right">
                <div className="search-box">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Pesquisar..." />
                </div>
                <div className="theme-toggle" onClick={toggleTheme}>
                    <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
                </div>
                <div className="theme-toggle" onClick={onRefresh} title="Atualizar dados">
                    <i className="fas fa-sync-alt"></i>
                </div>
                <div className="user-profile">
                    <div className="user-avatar">RS</div>
                    <span>Rodrigo Silva</span>
                </div>
            </div>
        </div>
    );
};