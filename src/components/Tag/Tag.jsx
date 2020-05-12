import React from 'react';
import './style.scss';

const Tag = ({ text }) => {
  let disp = text;

  if (text === 'completed') {
    disp = 'COM';
  }
  if (text === 'assigned') {
    disp = 'ASD';
  }
  if (text === 'unassigned') {
    disp = 'UNA';
  }

  return (
    <div className={`tag ${text}`}>{disp}</div>
  );
}

export default Tag;
