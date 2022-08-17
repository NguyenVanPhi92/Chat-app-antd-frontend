import { Modal } from "antd";
import React, { useContext } from "react";
import { AppContext } from "../contexts/AppProvider";

const UserInfoModal = () => {
  const { isShowUerInfo, setIsShowUserInfo } = useContext(AppContext);

  //handle
  const handleOk = () => {
    // reset form value
    setIsShowUserInfo(false);
  };

  const handleCancel = () => {
    setIsShowUserInfo(false);
  };
  return (
    <Modal
      title="Basic Modal"
      visible={isShowUerInfo}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default UserInfoModal;
