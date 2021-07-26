import { Col, Row } from 'antd';

import { CCard } from '../../../Assets/Components/CCard';
import React from 'react';

const FetchUserComponent = (props) => {
  const { users, loading } = props;

  const usersMap = users.map((user) => {
    return (
      <Col style={{ margin: 12 }} key={user.id}>
        <CCard user={user} />
      </Col>
    );
  });

  return (
    <>
      {loading === true ? (
        <h1>Loading...</h1>
      ) : (
        <Row style={{ justifyContent: 'center' }}>{usersMap}</Row>
      )}
    </>
  );
};

export default FetchUserComponent;
