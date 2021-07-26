import { Avatar, Button, Col, Row } from 'antd';

import { CCardWrap } from '../../../Assets/Components/CCard';
import React from 'react';

const FetchIntervalComponent = (props) => {
  const { user, loading, users, addNewUser } = props;
  const { picture, name, gender, email } = user;

  const fullName = `${name?.title}, ${name?.first} ${name?.last}`;

  const renderUsers = users.map((item, index) => {
    const userName = `${item?.name?.title}, ${item?.name?.first} ${item?.name?.last}`;
    return (
      <Col style={{ margin: 12 }} key={index}>
        <CCardWrap>
          <Avatar size={64} src={item?.picture.thumbnail} />
          <p>{userName}</p>
          <p>{item.gender}</p>
          <p>{item.email}</p>
          <br />
        </CCardWrap>
      </Col>
    );
  });

  return (
    <div style={{ maxWidth: '1000px' }}>
      <Row style={{ justifyContent: 'center' }}>
        <Col style={{ margin: 12 }}>
          {loading === true || user === '' ? (
            <h1>Loadnig...</h1>
          ) : (
            <CCardWrap>
              <Avatar size={64} src={picture.thumbnail} />
              <p>{fullName}</p>
              <p>{gender}</p>
              <p>{email}</p>
            </CCardWrap>
          )}
        </Col>
      </Row>
      <Button onClick={addNewUser}>Tambah user</Button>
      <Row style={{ justifyContent: 'center' }}>
        {!users || users === [] ? <h1>Loading...</h1> : renderUsers}
      </Row>
    </div>
  );
};

export default FetchIntervalComponent;
