import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import XvectorNavigation from "./components/XvectorNavigation";

const mapPageToNavi = {
    messageBox: <MessageBoxNavigation />,
    main: <MainNavigation />,
    join: <XvectorNavigation pageName="회원가입" />,
    auth: <XvectorNavigation pageName="학교 인증" back="/mypage" />,
    updateNick: <XvectorNavigation pageName="닉네임 변경" back="/mypage" />,
    authDetail: <XvectorNavigation pageName="이메일 인증" back="/mypage" />,
    };
  
  const TopNavigation = ({ activePage }) => {
    return <NavigationWrapper>{mapPageToNavi[activePage]}</NavigationWrapper>;
  };

export default TopNavigation;