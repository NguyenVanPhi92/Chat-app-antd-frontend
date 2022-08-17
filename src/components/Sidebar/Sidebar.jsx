import {
  AntDesignOutlined,
  FormOutlined,
  InfoCircleOutlined,
  PlusCircleOutlined,
  SearchOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Col,
  Input,
  Row,
  Space,
  Tooltip,
  Typography,
} from "antd";

import React from "react";
import styled from "styled-components";
import UserOnline from "../UserOnline/UserOnline";

const SidebarWrapperStyled = styled.div`
  .sidebar__top {
    margin-left: 10px;
  }

  .input-search {
    margin-left: 10px;
  }

  .sidebar__title {
    text-align: left;
    margin-left: 10px;
    margin-top: 8px;
  }

  .sidebar__user {
    margin-left: 10px;
    &__onl {
      padding: 10px 0 10px 0;
      border-bottom: 1px solid #f0f0f0;
    }

    &__chat {
      overflow-y: scroll;
      height: 446px;
      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #d9d9d9;
        border-radius: 2px;
      }

      &__message {
        padding: 10px 0 0 0;
        color: red;
      }
    }
  }

  .icon-size {
    font-size: 20px;
  }

  .button__icon {
    padding: 0 5px;
  }
`;

const WrapperStyledMessage = styled.div`
  display: flex;
  align-item: center;
  gap: 10px;

  &:hover {
    background-color: #fafafa;
  }

  .avatar {
    width: 15%;
  }

  .message {
    width: 70%;
    display: flex;
    align-item: center;
    justify-content: space-between;
    position: relative;

    p {
      margin: 0 0 0 10px;
    }

    &__new {
      background: #1770e6;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      position: absolute;
      top: 15px;
      right: 0;
      z-index: 99;
    }
  }
`;

const Sidebar = () => {
  return (
    <SidebarWrapperStyled>
      <Row justify="space-between" align="middle" className="sidebar__top">
        <Col>
          <Typography.Title level={2}>Chat</Typography.Title>
        </Col>
        <Col>
          <Space>
            <Button type="text" href="/" className="button__icon">
              <VideoCameraOutlined className="icon-size" />
            </Button>
            <Button type="text" href="/" className="button__icon">
              <FormOutlined className="icon-size" />
            </Button>
            <Button type="text" href="/" className="button__icon">
              <PlusCircleOutlined className="icon-size" />
            </Button>
          </Space>
        </Col>
      </Row>
      <Row className="input-search">
        <Col span={24}>
          <Input
            placeholder="Enter your phone number..."
            prefix={<UserOutlined />}
            suffix={
              <Tooltip title="Search">
                <SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
        </Col>
      </Row>
      <Typography.Title level={3} className="sidebar__title">
        Active Now
      </Typography.Title>
      <div className="sidebar__user">
        <Row gutter={22} className="sidebar__user__onl">
          {Array.from({ length: 6 }, (v, i) => (
            <Col key={i}>
              <UserOnline />
            </Col>
          ))}
        </Row>

        <Row className="sidebar__user__chat">
          <Col className="sidebar__user__chat__message" span={24}>
            {Array.from({ length: 10 }, (v, i) => (
              <WrapperStyledMessage key={i}>
                <div className="avatar">
                  <UserOnline />
                </div>
                <div className="message">
                  <div className="message__content">
                    <p>Nguyễn Vạn Phi</p>
                    <Space size={20}>
                      <Typography.Text>hello</Typography.Text>
                      <Typography.Text>1 ngày</Typography.Text>
                    </Space>
                  </div>

                  <div className="message__new"></div>
                </div>
              </WrapperStyledMessage>
            ))}
          </Col>
        </Row>
      </div>
    </SidebarWrapperStyled>
  );
};

export default Sidebar;
