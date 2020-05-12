import React from 'react';
import { List, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import TicketListItem from './TicketListItem';
import './style.scss';

const TicketListHeader = () => (
  <div className="ticket-item-header">
    <div className="owner">OWNER</div>
    <div className="reported">REPORTED</div>
    <div className="asset">ASSET</div>
    <div className="status">STATUS</div>
  </div>
)

const TicketList = ({ loading, tickets, selected, onSelect }) => {
  return (
    <div style={{ height: '100%' }}>
      <Input
        className="search-input"
        prefix={<SearchOutlined style={{ color: '#a8a8a8' }} />}
        size="small"
      />
      <List
        className="ticket-list"
        loading={loading}
        header={<TicketListHeader />}
        dataSource={tickets}
        split={false}
        renderItem={item => (
          <List.Item style={{ padding: 0 }}>
            <TicketListItem ticket={item} selected={item.ticketId === selected} onSelect={onSelect} />
          </List.Item>
        )}
      />
    </div>
  );
}

export default TicketList;
