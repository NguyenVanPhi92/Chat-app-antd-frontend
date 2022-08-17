import { Col, Layout, Row } from "antd";
import React from "react";
import styled from "styled-components";
import Body from "./Body/Body";
import HeaderCom from "./Header/HeaderCom";
import Profile from "./Profile/Profile";
import Sidebar from "./Sidebar/Sidebar";

const ChatWindow = () => {
  const WrapperStyled = styled(Layout)`
    height: 100vh;

    .body {
      height: calc(100vh - 64px);

      .sidebar__left {
        border-right: 1px solid #eeeeee;
        padding: 10px 10px 0 0;
      }

      .main {
        .current__user {
          border-left: 1px solid #eeeeee;
          height: 100%;
        }
      }
    }
  `;

  return (
    <WrapperStyled style={{ background: "white" }}>
      <HeaderCom />
      <Row className="body">
        <Col span={6} className="sidebar__left">
          <Sidebar />
        </Col>
        <Col span={18} className="main">
          <Row>
            <Col span={18} className="room__chat">
              <Body />
            </Col>

            <Col span={6} className="current__user">
              <Profile />
            </Col>
          </Row>
        </Col>
      </Row>
    </WrapperStyled>
  );
};

export default ChatWindow;
