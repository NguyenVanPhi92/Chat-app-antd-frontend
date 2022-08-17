import { Avatar, Image } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

const WrapperStyledUserAvatar = styled.div`
  .avatar {
    &__image {
      border-radius: 50px;
    }
  }
  h3 {
    font-size: 30px;
  }
`;

const AvatarUser = () => {
  const [visible, setVisible] = useState(false);

  //handle
  const handelShowAvatar = (e) => {
    e.preventDefault();
    setVisible(true);
  };

  return (
    <WrapperStyledUserAvatar>
      <a href="/" onClick={handelShowAvatar} className="avatar">
        <Avatar
          className="user__avatar"
          size={100}
          src={
            <Image
              className="avatar__image"
              preview={{
                visible: false,
              }}
              src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
              onClick={() => setVisible(true)}
            />
          }
        />

        <div style={{ display: "none" }}>
          <Image.PreviewGroup
            preview={{
              visible,
              onVisibleChange: (vis) => setVisible(vis),
            }}
          >
            <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
            <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
            <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
          </Image.PreviewGroup>
        </div>
      </a>
      <h3 className="user__title">name user chat</h3>
    </WrapperStyledUserAvatar>
  );
};

export default AvatarUser;
