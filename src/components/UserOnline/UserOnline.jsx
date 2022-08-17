import { Avatar, Typography } from "antd";
import React from "react";
import styled from "styled-components";

const WrapperAvatarStyled = styled.div`
  position: relative;

  .dot {
    background: #2f9a48;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    position: absolute;
    bottom: 16px;
    right: 3px;
    z-index: 99;
  }

  .user__name {
    font-size: 10px;
  }
`;

const UserOnline = () => {
  return (
    <WrapperAvatarStyled>
      <Avatar
        style={{ backgroundColor: "#f57f17", verticalAlign: "middle" }}
        size="large"
        className="user__avatar"
      >
        A
      </Avatar>
      <div className="dot"></div>
      <p className="user__name">
        <Typography.Text>Nguyen...</Typography.Text>
      </p>
    </WrapperAvatarStyled>
  );
};

export default UserOnline;
