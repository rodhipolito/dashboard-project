const RecentActivity = ({ activityData }) => {
    return (
        <div className="recent-activity">
            <div className="section-title">
                <i className="fas fa-history"></i> Atividade Recente
            </div>
            <ul className="activity-list">
                {activityData.map((activity, index) => (
                    <li key={index} className="activity-item">
                        <div className="activity-icon">
                            <i className={`fas fa-${activity.icon}`}></i>
                        </div>
                        <div className="activity-content">
                            <div className="activity-title">{activity.title}</div>
                            <div className="activity-desc">{activity.desc}</div>
                            <div className="activity-time">{activity.time}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};