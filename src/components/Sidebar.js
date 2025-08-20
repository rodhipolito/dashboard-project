const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
            <div className="sidebar-header">
                <h2><i className="fas fa-chart-line"></i> DashboardPro</h2>
            </div>
            <a href="#" className="active"><i className="fas fa-home"></i> Início</a>
            <a href="#"><i className="fas fa-chart-bar"></i> Analytics</a>
            <a href="#"><i className="fas fa-shopping-cart"></i> Vendas</a>
            <a href="#"><i className="fas fa-users"></i> Clientes</a>
            <a href="#"><i className="fas fa-cog"></i> Configurações</a>
            <a href="#"><i className="fas fa-question-circle"></i> Ajuda</a>
        </div>
    );
};