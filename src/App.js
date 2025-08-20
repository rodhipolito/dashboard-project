const App = () => {
    const [darkMode, setDarkMode] = React.useState(false);
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const [activeView, setActiveView] = React.useState('monthly');
    const [modalOpen, setModalOpen] = React.useState(false);
    const [modalContent, setModalContent] = React.useState(null);
    const [cardData, setCardData] = React.useState({
        users: { value: 1245, growth: 12.5 },
        sales: { value: 327, growth: 8.3 },
        tickets: { value: 58, growth: -5.7 },
        conversion: { value: 24.8, growth: 3.2 }
    });
    const [loading, setLoading] = React.useState(false);
    const [activityData, setActivityData] = React.useState([]);

    // Alternar tema claro/escuro
    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('light-mode');
        document.body.classList.toggle('dark-mode');
    };

    // Buscar dados da API
    const fetchData = async () => {
        setLoading(true);
        try {
            const data = await ApiService.fetchDashboardData();
            setCardData(data);
            setActivityData(data.activities || []);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        } finally {
            setLoading(false);
        }
    };

    // Abrir modal com detalhes
    const openModal = (content) => {
        setModalContent(content);
        setModalOpen(true);
    };

    // Inicializar dados
    React.useEffect(() => {
        fetchData();
        
        // Configurar atualização periódica
        const interval = setInterval(fetchData, 30000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="dashboard">
            <Sidebar 
                sidebarOpen={sidebarOpen} 
                setSidebarOpen={setSidebarOpen} 
            />
            
            <div className="main">
                <Header 
                    darkMode={darkMode}
                    toggleTheme={toggleTheme}
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                    onRefresh={fetchData}
                />
                
                <div className="content">
                    {loading ? (
                        <div className="loading">
                            <i className="fas fa-spinner"></i> Carregando dados...
                        </div>
                    ) : (
                        <>
                            <DashboardCards 
                                cardData={cardData} 
                                onCardClick={openModal}
                            />
                            
                            <DashboardCharts 
                                activeView={activeView}
                                setActiveView={setActiveView}
                            />
                            
                            <RecentActivity activityData={activityData} />
                        </>
                    )}
                </div>
            </div>
            
            <Modal 
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                content={modalContent}
            />
        </div>
    );
};