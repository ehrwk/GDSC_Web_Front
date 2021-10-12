import React, { useState } from "react";
import styled from "styled-components";

import MainInput from "../../../components/Input/MainInput";
import MainButton from "../../../components/Button/MainButton";
import TopNavigation from "../../../layout/TopNavigation";


const MainWrapper = styled.div``;

const Index = () => {

    const [id, setid] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [nickname, setNickname] = useState("")
    const [major, setMajor] = useState("")

    const [errorNum, setErrorNum] = useState(0);

    //e는 이벤트 처리하는거 react사용설명서 다시 읽기
    const onChangeId = (e) => {
        setid(e.target.value)
    }

    const onChangePassword = (e) => {

        const { value } = e.target;

        const patternSpecial = /[~!@#$%^&*()_+|<>?:{}]/; 
        const patternEng = /[a-zA-Z]/; 
        const patternNum = /[0-9]/;
        
        if (
            !patternSpecial.test(value) ||
            !patternNum.test(value) ||
            !patternEng.test(value)
        ) {
            setErrorNum(1);
        } else {
            setErrorNum(0);
        }
        setPassword(value);

        setPassword(e.target.value)
    }

    const onChangeRePassword = (e) => {
        setRePassword(e.target.value)
    }

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangeNickname = (e) => {
        setNickname(e.target.value)
    }

    const onChangeMajor = (e) => {
        setMajor(e.target.value)
    }

    return (
        <MainWrapper>
            
            <MainInput value = {id} type = "text" onChange = {onChangeId} placeholder = "아이디를 입력해주세요"/>
            <MainInput value = {password} type = "password" onChange = {onChangePassword} placeholder = "비밀번호 입력해주세요"/>
            {errorNum == 1 && (
                <p style={{color:"red"}}>비밀번호 일치x</p>
            )}
            <MainInput value = {rePassword} type = "text" onChange = {onChangeRePassword} placeholder = "비밀번호를 다시 입력해주세요"/>
            <MainInput value = {name} type = "text" onChange = {onChangeName} placeholder = "이름을 입력해주세요"/>
            <MainInput value = {email} type = "text" onChange = {onChangeEmail} placeholder = "이메일를 입력해주세요"/>
            <MainInput value = {nickname} type = "text" onChange = {onChangeNickname} placeholder = "닉네임를 입력해주세요"/>
            <MainInput value = {major} type = "text" onChange = {onChangeMajor} placeholder = "전공를 입력해주세요"/>
            <MainButton text = "회원가입" onClick = {() =>alert("회원가입")}/>
        </MainWrapper>
    );
};

export default Index;
