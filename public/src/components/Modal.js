const Modal = ({ isOpen, onClose, content }) => {
    if (!content) return null;
    
    return (
        <div className={`modal ${isOpen ? 'active' : ''}`} onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="modal-title">Detalhes: {content.title}</div>
                    <button className="modal-close" onClick={onClose}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Valor atual: <strong>{content.value}</strong></p>
                    <p>Tendência: 
                        <span className={content.growth < 0 ? 'card-growth negative' : 'card-growth'}>
                            <i className={`fas fa-${content.growth >= 0 ? 'arrow-up' : 'arrow-down'}`}></i>
                            {Math.abs(content.growth)}% {content.description}
                        </span>
                    </p>
                    <p>Este card mostra informações importantes sobre o desempenho desta métrica.</p>
                </div>
            </div>
        </div>
    );
};