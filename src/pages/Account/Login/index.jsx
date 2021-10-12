import React from "react";
import styled from "styled-components";

import MainButton from "../../../components/Button/MainButton";
import MainInput from "../../../components/Input/MainInput";
import SignUpInput from "../../../components/Input/SignUpInput";

import { BrowserRouter } from "react-router-dom";
import { COLORS } from "../../../components/Colors";
import logo from "../../../assets/logo/logo.png";
import { Component } from "react";


const MainWrapper = styled.div`
    .logo_text1{
        text-align: center;
        color: ${COLORS.grey_text};
        font-size : 12px;
        padding: 10px;
    };
    .logo_text2{
        text-align: center;
        color: ${COLORS.red};
        font-size : 20px;
        font-weight: 600;
    }     
`;


// const CheckInput = () => {
//     const [isInput, setIsInput] = useState(false);
//     const [id, setId] = useState("");
//     const [pw, setPw] = useState("");

//     const onChangeId = (e) => {
//         setId(e.target.value);
//     };
//     const onChangePw = (e) => {
//         setPw(e.target.value);
//     };

//     const handleFocus = (e) => {
//         if (Input) {
//             console.log("false");
//             setIsInput(false);
//         } else {
//             console.log("true");
//             setIsInput(true);
//         }
//     };

// };


const Index = () => {
    return(
        <MainWrapper>
            <div>
                <img src = {logo} alt = "logo"></img>
                <p className = "logo_text1">대학 생활을 더 편하고 즐겁게</p>
                <p className = "logo_text2">에브리타임</p>
            </div>
            <MainInput placeholder = "아이디"/>
            <MainInput placeholder = "비밀번호"/>
            <MainButton text = "로그인" onClick={() => alert("로그인")}/>
            <SignUpInput text = "회원가입" onClick = {() => window.location.replace("/SignUp")}></SignUpInput> 
        </MainWrapper>
    );
};

export default Index;