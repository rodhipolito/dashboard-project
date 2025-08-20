const DashboardCharts = ({ activeView, setActiveView }) => {
    const salesChartRef = React.useRef(null);
    const distributionChartRef = React.useRef(null);
    
    React.useEffect(() => {
        // Dados do gráfico de vendas
        const salesData = {
            monthly: [120, 190, 300, 500, 200, 300, 450, 480, 420, 600, 750, 900],
            quarterly: [610, 980, 1350, 2070],
            yearly: [5200]
        };
        
        const salesLabels = {
            monthly: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            quarterly: ['Q1', 'Q2', 'Q3', 'Q4'],
            yearly: ['Anual']
        };
        
        // Configurar gráfico de vendas
        const salesCtx = salesChartRef.current.getContext('2d');
        if (window.salesChartInstance) {
            window.salesChartInstance.destroy();
        }
        
        window.salesChartInstance = new Chart(salesCtx, {
            type: 'bar',
            data: {
                labels: salesLabels[activeView],
                datasets: [
                    {
                        label: 'Vendas',
                        data: salesData[activeView],
                        backgroundColor: '#4361ee',
                        borderColor: '#4361ee',
                        borderWidth: 1
                    },
                    {
                        label: 'Meta',
                        type: 'line',
                        data: salesData[activeView].map(val => val * 1.1),
                        borderColor: '#f72585',
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        pointStyle: 'circle',
                        pointRadius: 5,
                        pointHoverRadius: 7
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
        
        // Configurar gráfico de distribuição (CORREÇÃO APLICADA AQUI)
        const distributionCtx = distributionChartRef.current.getContext('2d');
        if (window.distributionChartInstance) {
            window.distributionChartInstance.destroy();
        }
        
        window.distributionChartInstance = new Chart(distributionCtx, {
            type: 'doughnut',
            data: {
                labels: ['Eletrônicos', 'Roupas', 'Casa', 'Esportes', 'Livros'],
                datasets: [{
                    data: [35, 25, 20, 15, 5],
                    backgroundColor: [
                        '#4361ee',
                        '#3a0ca3',
                        '#4cc9f0',
                        '#f72585',
                        '#fca311'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                cutout: '70%'
            }
        });
    }, [activeView]);
    
    return (
        <div className="charts">
            <div className="chart-container">
                <div className="chart-header">
                    <div className="chart-title">Desempenho de Vendas</div>
                    <div className="chart-actions">
                        <button 
                            className={activeView === 'monthly' ? 'active' : ''}
                            onClick={() => setActiveView('monthly')}
                        >
                            Mensal
                        </button>
                        <button 
                            className={activeView === 'quarterly' ? 'active' : ''}
                            onClick={() => setActiveView('quarterly')}
                        >
                            Trimestral
                        </button>
                        <button 
                            className={activeView === 'yearly' ? 'active' : ''}
                            onClick={() => setActiveView('yearly')}
                        >
                            Anual
                        </button>
                    </div>
                </div>
                <canvas id="salesChart" ref={salesChartRef}></canvas>
            </div>
            <div className="chart-container">
                <div className="chart-header">
                    <div className="chart-title">Distribuição de Vendas</div>
                    <div className="chart-actions">
                        <button><i className="fas fa-download"></i></button>
                    </div>
                </div>
                <canvas id="distributionChart" ref={distributionChartRef}></canvas>
            </div>
        </div>
    );
};