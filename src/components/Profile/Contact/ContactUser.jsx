import {
  EllipsisOutlined,
  MailOutlined,
  MessageOutlined,
  PhoneOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Col, Row, Tooltip } from "antd";
import React from "react";
import styled from "styled-components";

const WrapperStyledContractUser = styled.div`
  border-bottom: 1px solid #eeeeee;
  .contract {
    margin-bottom: 15px;
  }

  .btn-contact {
    background-color: #fafafa;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

const ContactUser = () => {
  return (
    <WrapperStyledContractUser>
      <Row className="contract">
        <Col span={6}>
          <Tooltip title="call now">
            <Button
              className="btn-contact"
              type="text"
              size="large"
              shape="circle"
              icon={<PhoneOutlined />}
            />
          </Tooltip>
        </Col>

        <Col span={6}>
          <Tooltip title="chat now">
            <Button
              className="btn-contact"
              type="text"
              size="large"
              shape="circle"
              icon={<MessageOutlined />}
            />
          </Tooltip>
        </Col>
        <Col span={6}>
          <Tooltip title="send email">
            <Button
              className="btn-contact"
              type="text"
              size="large"
              shape="circle"
              icon={<MailOutlined />}
            />
          </Tooltip>
        </Col>
        <Col span={6}>
          <Tooltip title="...">
            <Button
              className="btn-contact"
              type="text"
              size="large"
              shape="circle"
              icon={<EllipsisOutlined />}
            />
          </Tooltip>
        </Col>
      </Row>
    </WrapperStyledContractUser>
  );
};

export default ContactUser;
