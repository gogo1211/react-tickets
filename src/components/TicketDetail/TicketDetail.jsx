import React from 'react';
import { Card, Avatar, Space } from 'antd';

import Tag from '../Tag';
import { getTimeFormat } from '../../utils';
import './style.scss';

const { Meta } = Card;

const InfoCard = ({ title, children }) => (
  <Card
    className="card"
    title={title}
    headStyle={{
      backgroundColor: '#2c2c2c',
      border: 'none',
      color: 'white'
    }}
  >
    {children}
  </Card>
)

const TicketDetail = ({ ticket }) => {
  return (
    <div className="ticket-detail-container">
      <Space direction="vertical" style={{ width: '100%' }}>
        <div className="ticket-detail-number">
          <div>TICKET NO. <span>{ticket.number}</span></div>
          <div>LAST UPDATED {getTimeFormat(ticket.lastUpdatedTime)}</div>
        </div>
        <InfoCard title="Onwer">
          <Meta
            avatar={<Avatar src={ticket.owner.avatar} />}
            title={`${ticket.owner.firstName} ${ticket.owner.lastName}`}
            description={ticket.owner.specialities.join(', ')}
          />
        </InfoCard>
        <InfoCard title="Details">
          <Meta
            title={`${ticket.owner.firstName} ${ticket.owner.lastName}`}
            description={ticket.owner.specialities.join(', ')}
          />
          <Meta
            title="Reported"
            description={getTimeFormat(ticket.reportedTime)}
          />
          <Meta
            title="Status"
            description={<Tag text={ticket.status} />}
          />
        </InfoCard>
        <InfoCard title="Asset">
          <Meta
            title="Name"
            description={ticket.asset.name}
          />
          <Meta
            title="GeoCode"
            description={ticket.asset.geoCode}
          />
          <Meta
            title="Location"
            description={<div><Tag text={ticket.asset.kmFrom} /><Tag text={ticket.asset.kmTo} /></div>}
          />
        </InfoCard>
      </Space>
    </div>
  );
}

export default TicketDetail;
