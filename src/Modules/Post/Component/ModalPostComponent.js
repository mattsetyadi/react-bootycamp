import { Button, Modal } from 'antd';
import React, { useState } from 'react';

const ModalPostComponent = (props) => {
  console.log(props);
  const { deleting, postId, deletePost } = props;
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(
    'Apakah anda yakin ingin menghapus?'
  );

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    deletePost(postId);
    setModalText('Post sedang dihapus');
    setConfirmLoading(true);
    setVisible(deleting);
    setConfirmLoading(deleting);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <>
      <Button
        style={{ width: 100, marginTop: 8, alignSelf: 'flex-end' }}
        type="primary"
        danger
        onClick={showModal}
      >
        Hapus Post
      </Button>
      <Modal
        title="Pehatian!"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default ModalPostComponent;
