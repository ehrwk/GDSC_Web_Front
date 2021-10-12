import React from "react";
import styled from "styled-components";

import BottomNavigation from "../../layout/BottomNavigation";
import { dummyMessage } from "../../components/dummyData";
import MessageWrapper from "./components/MessageWrapper";


const ContentWrapper = styled.div`
    padding-top: 20px;
    padding-bottom: 60px;

    .message{
      font-size : 16px;
      font-weight : 900;
      text-decoration : underline;
    }
`;

//스타일을 입력하는 동시에 컴포넌트를 만드는 역할
//``를 이용하는 이유는 변수로 출력되게 할려고
//'hello ${username}' -> hello ${username}
//'hello ${username}' -> hello Yun

const Index = () => {
  return (
    <div>
      <ContentWrapper>
        <div className = "message">쪽지함</div>

        <div>
          <MessageWrapper messageList = {dummyMessage}/>
        </div>

      </ContentWrapper>
        <div className="bottom-navigation">
          <BottomNavigation activeNum={3} />
        </div>
      
    </div>
  );
};

export default Index;
