import {
  BellOutlined,
  CaretDownOutlined,
  CommentOutlined,
  GlobalOutlined,
  IdcardOutlined,
  InfoCircleOutlined,
  MailOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Col, Popover, Row, Space, Typography } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../contexts/AppProvider";

const { Title, Text } = Typography;

const HeaderWrapperStyled = styled(Header)`
  border-bottom: 1px solid #eeeeee;

  .icon-size {
    font-size: 20px;
  }

  .button__icon {
    padding: 0 5px;
  }
`;

const HeaderLeftStyled = styled(Col)`
  .header__icon {
    &__item {
      font-size: 25px;
    }
  }

  .header__title {
    h3 {
      margin: 0;
    }
  }
`;

const HeaderMiddleStyled = styled(Col)`
  .header-middle {
    .active {
      border: none;
      box-shadow: none;
    }

    .menu__icon {
      .ant-menu-item {
        &-content {
          font-size: 16px;
        }

        svg {
          font-size: 16px;
        }
      }
    }
  }
`;

const HeaderRightStyled = styled(Col)`
  .user {
  }
`;

const HeaderCom = () => {
  const { setIsShowUserInfo } = useContext(AppContext);
  const [current, setCurrent] = useState("email");

  //fake data

  const icons = [
    {
      icon: <CommentOutlined />,
      link: "/login",
    },
    {
      icon: <TeamOutlined />,
      link: "/register",
    },
    { icon: <MailOutlined />, link: "/email" },
    { icon: <GlobalOutlined />, link: "/world" },
    { icon: <IdcardOutlined />, link: "/profile" },
    { icon: <SettingOutlined />, link: "/setting" },
  ];

  //handle
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <HeaderWrapperStyled style={{ background: "white" }}>
      <Row justify="space-between" className="header-left">
        <HeaderLeftStyled className="logo" span={4}>
          <Row align="middle">
            <Space size={8}>
              <Col className="header__icon">
                <Link to="/">
                  <BellOutlined className="header__icon__item" size="35px" />
                </Link>
              </Col>
              <Col className="header__title">
                <Title level={3}>Chatties</Title>
              </Col>
            </Space>
          </Row>
        </HeaderLeftStyled>
        <HeaderMiddleStyled span={15}>
          <Row justify="center" gutter={10} className="header-middle">
            {icons.map((icon, index) => (
              <Col span={2} key={index}>
                <Button onClick={onClick}>
                  <Link to={icon.link}>{icon.icon}</Link>
                </Button>
              </Col>
            ))}
          </Row>
        </HeaderMiddleStyled>
        <HeaderRightStyled className="user" span={5}>
          <Row align="middle" justify="space-around" className="header-right">
            <Col>
              <a
                type="text"
                href="/"
                style={{ color: "#ff9100" }}
                className="button__icon"
              >
                <BellOutlined className="icon-size" />
              </a>
              <a type="text" href="/" className="button__icon">
                <InfoCircleOutlined className="icon-size" />
              </a>
            </Col>
            <Col>
              <div className="user__account">
                <Space>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsShowUserInfo(true);
                    }}
                  >
                    <Avatar
                      style={{
                        backgroundColor: "rebeccapurple",
                        verticalAlign: "middle",
                      }}
                      size="small"
                      src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                    />
                  </a>
                  <Text onClick={() => setIsShowUserInfo(true)}>
                    Van Phi Nguyen
                  </Text>

                  <Popover
                    placement="bottomRight"
                    title="Logout"
                    content={
                      <>
                        <div>
                          <p>Content</p>
                          <p>Content</p>
                          <p>Content</p>
                          <p>Content</p>
                          <p>Content</p>
                          <p>Content</p>
                        </div>
                      </>
                    }
                    trigger="click"
                  >
                    <CaretDownOutlined />
                  </Popover>
                </Space>
              </div>
            </Col>
          </Row>
        </HeaderRightStyled>
      </Row>
    </HeaderWrapperStyled>
  );
};

export default HeaderCom;
