import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import AvatarUser from "./Avatar/AvatarUser";
import ContactUser from "./Contact/ContactUser";
import InfoUser from "./Info/InfoUser";

const WrapperStyledProfile = styled.div`
  padding: 0;
  overflow-y: scroll;
  height: 670px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 2px;
  }
`;

const Profile = () => {
  return (
    <WrapperStyledProfile>
      <AvatarUser />
      <ContactUser />
      <InfoUser />

      <Button type="primary" danger style={{ width: "90%" }}>
        Delete Chat
      </Button>
    </WrapperStyledProfile>
  );
};

export default Profile;
