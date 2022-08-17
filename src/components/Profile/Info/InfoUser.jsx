import {
  BarsOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
  WindowsOutlined,
} from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import SecurityUser from "../Security/SecurityUser";

const WrapperStyledInfoUser = styled.div`
  .wrapper {
    padding: 10px 25px 0 25px;

    &__left {
      display: flex;
      gap: 15px;
    }

    &__right {
      width: 100px;
      text-align: left;
    }
  }
`;

const InfoUser = () => {
  return (
    <WrapperStyledInfoUser>
      <Row className="wrapper" justify="space-between">
        <Col className="wrapper__left">
          <a href="/" className="icon">
            <WindowsOutlined />
          </a>
          <div className="content">company</div>
        </Col>

        <Col className="wrapper__right">
          <div>Set a wrapper</div>
        </Col>
      </Row>

      <Row className="wrapper" justify="space-between">
        <Col className="wrapper__left">
          <a href="/" className="icon">
            <PhoneOutlined />
          </a>
          <div className="content">Phone</div>
        </Col>

        <Col className="wrapper__right">
          <div>(+84) 6788 112</div>
        </Col>
      </Row>

      <Row className="wrapper" justify="space-between">
        <Col className="wrapper__left">
          <a href="/" className="icon">
            <UserOutlined />
          </a>
          <div className="content">Role</div>
        </Col>

        <Col className="wrapper__right">
          <div>Set a role...</div>
        </Col>
      </Row>

      <Row className="wrapper" justify="space-between">
        <Col className="wrapper__left">
          <a href="/" className="icon">
            <MailOutlined />
          </a>
          <div className="content">Email</div>
        </Col>

        <Col className="wrapper__right">
          <div>Send email...</div>
        </Col>
      </Row>

      <Row className="wrapper" justify="space-between">
        <Col className="wrapper__left">
          <a href="/" className="icon">
            <BarsOutlined />
          </a>
          <div className="content">Tag</div>
        </Col>

        <Col className="wrapper__right">
          <div>
            <Button type="text" shape="round" size={25}>
              Lead
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        <SecurityUser />
      </Row>
    </WrapperStyledInfoUser>
  );
};

export default InfoUser;
