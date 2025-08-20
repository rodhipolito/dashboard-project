// Serviço para simular chamadas à API
const ApiService = {
  // Simular busca de dados do dashboard
  fetchDashboardData: async () => {
    // Simular delay de rede
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Retornar dados simulados
    return {
      users: { 
        value: Math.floor(1200 + Math.random() * 100), 
        growth: (Math.random() * 20 - 5).toFixed(1) 
      },
      sales: { 
        value: Math.floor(300 + Math.random() * 50), 
        growth: (Math.random() * 15 - 3).toFixed(1) 
      },
      tickets: { 
        value: Math.floor(50 + Math.random() * 15), 
        growth: (Math.random() * 10 - 8).toFixed(1) 
      },
      conversion: { 
        value: (20 + Math.random() * 10).toFixed(1), 
        growth: (Math.random() * 8 - 2).toFixed(1) 
      },
      activities: [
        {
          icon: 'shopping-cart',
          title: `Novo pedido #${Math.floor(3000 + Math.random() * 300)}`,
          desc: `Cliente: Nome ${Math.floor(1 + Math.random() * 10)} • Valor: R$ ${(100 + Math.random() * 200).toFixed(2)}`,
          time: 'Há alguns minutos'
        },
        {
          icon: 'user-plus',
          title: 'Novo usuário registrado',
          desc: `Usuário ${Math.floor(1 + Math.random() * 100)} se registrou no sistema`,
          time: 'Há 32 minutos'
        },
        {
          icon: 'chart-line',
          title: 'Relatório atualizado',
          desc: 'Dados de performance foram atualizados',
          time: 'Há 1 hora'
        }
      ]
    };
  },
  
  // Buscar dados de uma API real (exemplo com JSONPlaceholder)
  fetchRealData: async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      
      return {
        users: {
          value: users.length,
          growth: 10.5
        },
        sales: {
          value: 350,
          growth: 8.3
        }
      };
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      throw error;
    }
  }
};