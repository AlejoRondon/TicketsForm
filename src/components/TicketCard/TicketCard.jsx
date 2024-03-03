import React from 'react';
import './TicketCard.scss';

const TicketCard = ({ title, priority, description, resolved }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-info">
        <div className="ticket-priority">
          <span className={`priority-label priority-${priority}`}>
            Priority
          </span>
          <span className={`priority-value priority-${priority}`}>
            {priority}
          </span>
        </div>
        <div className="ticket-status">
          <span
            className={`status-label ${
              resolved ? 'status-resolved' : 'status-unresolved'
            }`}
          >
            {resolved ? 'Resolved' : 'Unresolved'}
          </span>
        </div>
      </div>
      <h2 className="ticket-title">{title}</h2>
      <p className="ticket-description">{description}</p>
    </div>
  );
};

export default TicketCard;
