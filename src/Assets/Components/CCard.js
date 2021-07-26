import { Card } from 'antd';
import React from 'react';

const { Meta } = Card;
export const CCard = (props) => {
  const { user } = props;

  const fullName = `${user.first_name} ${user.last_name}`;

  return (
    <Card
      hoverable
      style={{ width: 380 }}
      cover={<img alt={fullName} src={user.avatar} />}
    >
      <p>Name : {fullName}</p>
      <p>Email : {user.email}</p>
      <p>Gender : {user.gender}</p>
      <Meta description="www.instagram.com" />
    </Card>
  );
};

export const CCardWrap = (props) => {
  const { cardTitle, children } = props;
  return (
    <Card hoverable title={cardTitle} style={{ width: 300 }} {...props}>
      {children}
    </Card>
  );
};
