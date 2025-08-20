const DashboardCards = ({ cardData, onCardClick }) => {
    const cards = [
        {
            key: 'users',
            title: 'Usuários Ativos',
            icon: 'users',
            value: cardData.users.value.toLocaleString('pt-BR'),
            growth: cardData.users.growth,
            description: 'desde o mês passado'
        },
        {
            key: 'sales',
            title: 'Vendas Hoje',
            icon: 'shopping-cart',
            value: cardData.sales.value.toLocaleString('pt-BR'),
            growth: cardData.sales.growth,
            description: 'desde ontem'
        },
        {
            key: 'tickets',
            title: 'Tickets Abertos',
            icon: 'ticket-alt',
            value: cardData.tickets.value.toLocaleString('pt-BR'),
            growth: cardData.tickets.growth,
            description: 'desde ontem'
        },
        {
            key: 'conversion',
            title: 'Taxa de Conversão',
            icon: 'percent',
            value: `${cardData.conversion.value}%`,
            growth: cardData.conversion.growth,
            description: 'desde ontem'
        }
    ];

    return (
        <div className="cards">
            {cards.map(card => (
                <div 
                    key={card.key} 
                    className="card"
                    onClick={() => onCardClick(card)}
                >
                    <div className="card-header">
                        <div className="card-title">{card.title}</div>
                        <div className="card-icon">
                            <i className={`fas fa-${card.icon}`}></i>
                        </div>
                    </div>
                    <div className="card-value">{card.value}</div>
                    <div className={`card-growth ${card.growth < 0 ? 'negative' : ''}`}>
                        <i className={`fas fa-${card.growth >= 0 ? 'arrow-up' : 'arrow-down'}`}></i>
                        <span>{Math.abs(card.growth)}% {card.description}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};