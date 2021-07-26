import { Button, Col, Form, Input, Row, Select, Skeleton } from 'antd';

import { CCardWrap } from '../../../Assets/Components/CCard';
import FlipMove from 'react-flip-move';
import ModalPostComponent from './ModalPostComponent';
import React from 'react';
import moment from 'moment';

const PostComponent = (props) => {
  const { posts, loading, addPost, compLoading } = props;
  const [form] = Form.useForm();

  const onFinish = (value) => {
    addPost(value);
    form.resetFields();
  };

  const { Option } = Select;

  const layout = {
    wrapperCol: { span: 0 },
  };

  return (
    <div className="postSection">
      <Row>
        <Col
          className="colAddPost"
          style={{
            marginTop: 20,
            alignItems: 'center',
          }}
          span={8}
        >
          <CCardWrap>
            <h1>Tambah Post</h1>
            <Form
              {...layout}
              form={form}
              style={{ padding: 8 }}
              name="control-hooks"
              onFinish={onFinish}
            >
              <Form.Item name="creator" rules={[{ required: true }]}>
                <Input placeholder="Penulis" />
              </Form.Item>
              <Form.Item name="title" rules={[{ required: true }]}>
                <Input placeholder="Judul Post" />
              </Form.Item>
              <Form.Item name="message" rules={[{ required: true }]}>
                <Input.TextArea placeholder="Silahkan Tulis Post Anda" />
              </Form.Item>
              <Form.Item
                name="tags"
                rules={[
                  {
                    type: 'array',
                  },
                ]}
              >
                <Select mode="multiple" placeholder="Tags">
                  <Option value="musik">Musik</Option>
                  <Option value="Coding">Coding</Option>
                  <Option value="Front End">Front End</Option>
                  <Option value="Back End">Back End</Option>
                </Select>
              </Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                style={{ marginRight: 4 }}
                loading={compLoading}
              >
                Submit
              </Button>
              <Button
                htmlType="reset"
                type="default"
                style={{ marginRight: 4 }}
                loading={compLoading}
              >
                Reset
              </Button>
            </Form>
          </CCardWrap>
        </Col>
        {loading === true ? (
          <Col span={16} style={{ marginTop: 24 }}>
            <Skeleton active />
          </Col>
        ) : (
          <Col span={16} style={{ marginTop: 24 }}>
            <FlipMove>
              {posts.map((post) => {
                const { _id, creator, message, title, createdAt, tags } = post;
                const newDate = moment(createdAt).format('DD-MMM-YYYY');
                return (
                  <Row
                    style={{
                      backgroundColor: 'beige',
                      flexDirection: 'column',
                      marginBottom: 12,
                      borderRadius: 8,
                      padding: 8,
                      paddingLeft: 18,
                    }}
                    key={_id}
                  >
                    <h2>{title}</h2>
                    <p>{message}</p>
                    <p>Author : {creator}</p>
                    <small>Posted {newDate}</small>
                    <br />
                    <small>
                      <b>Tags :</b>
                      <ul>
                        {tags?.length > 0 &&
                          tags.map((tag, index) => (
                            <li
                              style={{ display: 'inline', marginRight: 4 }}
                              key={index}
                            >
                              🚀 {tag}.
                            </li>
                          ))}
                      </ul>
                    </small>
                    {/* <Button onClick={() => deletePost(_id)}>Delete Post</Button> */}
                    <div
                      style={{ borderTop: '1px solid black', marginTop: 6 }}
                    ></div>
                    <ModalPostComponent postId={_id} {...props} />
                  </Row>
                );
              })}
            </FlipMove>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default PostComponent;
