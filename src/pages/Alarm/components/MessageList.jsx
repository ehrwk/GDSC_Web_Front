import React from "react";
import styled from "styled-components";
import {COLORS} from "../../../components/Colors";
import { Link } from "react-router-dom";
import { dummyMessage } from "../../../components/dummyData";


const MessageItem = styled.div`
    display: block;
    height: 40px;
    margin-top: 25px;
    
    .nick{
        font-size : 16px;
        font-weight : 550;
    }
    .date{
        margin-left : auto;
        font-size : 14px;
        font-weight : 440;
        color: ${COLORS.grey_500};
    }
    .msg_top{
        float: left;
        width:100%;
    }
    
`;

const MessageList = ({msg}) => {
    return(
        <MessageItem>
            
            <div className = "msg_top">
                <p className = "nick"> {msg.nick} </p>
                <p className = "date"> {msg.date} </p>
            </div>
            <div>
                <p className = "title"> {msg.title}</p>
            </div>
            
        </MessageItem>         
    );
}

//닉네임하고 날짜 세로로 배치하는거 어떻게 하죠?

export default MessageList;
//함수형 컴포넌트중에서 비구조화 할당 문법을 이용함
//Link to를 사용하면 브라우저의 주소만 바뀔뿐, 페이지를 새로 불러오지 않음
//react에서는 class 대신 jsx문법으로 className을 이용함
//return 뒤에 ; 잊지 않기

