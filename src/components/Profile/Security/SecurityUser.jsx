import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import CollapsePanel from "antd/lib/collapse/CollapsePanel";
import React from "react";
import styled from "styled-components";

const WrapperStyledSecurityUser = styled.div`
  padding: 10px;
  border-top: 1px solid #eeeeee;
  width: 100%;

  .title {
    text-align: left;
  }

  .security {
    border: none;
    background: none;

    &__title {
      border: none;
    }
  }
`;
const SecurityUser = () => {
  return (
    <WrapperStyledSecurityUser>
      <Collapse
        accordion
        className="security"
        bordered={false}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      >
        <CollapsePanel
          header="Thiết lập bảo mật"
          key="1"
          className="security__title"
          style={{ textAlign: "left" }}
        >
          <p>Mã hóa đầu cuối</p>
          <p>Tin nhắn tự xóa</p>
          <p>Ẩn cuộc trò chuyện</p>
          <p>Báo xấu</p>
        </CollapsePanel>

        <CollapsePanel
          header="Files"
          className="security__title"
          key="2"
          style={{ textAlign: "left" }}
        >
          <p>Mã hóa đầu cuối</p>
          <p>Tin nhắn tự xóa</p>
          <p>Ẩn cuộc trò chuyện</p>
          <p>Báo xấu</p>
        </CollapsePanel>

        <CollapsePanel
          header="Ảnh/Video"
          className="security__title"
          key="3"
          style={{ textAlign: "left" }}
        >
          <p>Mã hóa đầu cuối</p>
          <p>Tin nhắn tự xóa</p>
          <p>Ẩn cuộc trò chuyện</p>
          <p>Báo xấu</p>
        </CollapsePanel>

        <CollapsePanel
          header="Cài đặt tin nhắn"
          className="security__title"
          key="4"
          style={{ textAlign: "left" }}
        >
          <p>Mã hóa đầu cuối</p>
          <p>Tin nhắn tự xóa</p>
          <p>Ẩn cuộc trò chuyện</p>
          <p>Báo xấu</p>
        </CollapsePanel>
      </Collapse>
    </WrapperStyledSecurityUser>
  );
};

export default SecurityUser;
