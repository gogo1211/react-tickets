import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import axios from 'axios';

import TicketList from './components/TicketList';
import TicketDetail from './components/TicketDetail';
import { TICKETS_URL } from './constants';
import './App.scss';

const { Sider, Content } = Layout;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [selectedTicketId, SetSelectedTicketId] = useState(0);
  
  useEffect(() => {
    setLoading(true);
    axios.get(TICKETS_URL)
      .then(res => {
        setTickets(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onSelect = (ticketId) => SetSelectedTicketId(ticketId);
  
  return (
    <div className="tickets-container">
      <h2 className="title">Tickets</h2>
      <div className="body">
        <Layout className="layout">
          <Sider className="sider" width="400px">
            <TicketList
              loading={loading}
              tickets={tickets}
              selected={selectedTicketId}
              onSelect={onSelect}
            />
          </Sider>
          <Content className="content">
            {
              selectedTicketId > 0
              ? <TicketDetail ticket={tickets.find(ticket => ticket.ticketId === selectedTicketId)} />
              : <div>No ticket selected</div>
            }
          </Content>
        </Layout>
      </div>
    </div>
  );
};

export default App;
