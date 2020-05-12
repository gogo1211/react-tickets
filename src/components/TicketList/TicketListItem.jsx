import React from 'react';
import { Avatar } from 'antd';

import Tag from '../Tag';
import { getTimeFormat } from '../../utils';
import './style.scss';

const TicketListItem = ({ ticket, selected, onSelect }) => {
  return (
    <div className={`ticket-item-container${selected ? ' selected' : ''}`} onClick={() => onSelect(ticket.ticketId)}>
      <div className="ticket-item-content">
        <div className="avatar">
          <Avatar src={ticket.owner.avatar}></Avatar>
        </div>
        <div className="reported">
          { getTimeFormat(ticket.reportedTime) }
        </div>
        <div className="asset">
          { ticket.asset.name }
        </div>
        <Tag text={ticket.status} />
      </div>
    </div>
  );
}

export default TicketListItem;
