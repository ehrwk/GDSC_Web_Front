import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { COLORS } from "../../components/Colors";

const SettingWrapper = styled.div`
    input[type = "checkbox"]{
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 100%
        border: 1px;
    }

    input[type = "checkbox"]: checked{
        width: 12px;
        height: 12px;
        border: 1px;
    }


    .input-container{
        border-radius: 5px;
        border: 1px solid ${COLORS.grey_400};
    }

`

const Index = () => {
    
    const [setting, setSetting] = useState({
        isMine: false,
        isHot: false,
        isRealTime: false,
    });

    const onChangeCheck = (e) => {
        if(e.target.checked){
            const newObj = {...setting, [e.target.name]: true};
            window.localStorage.setItem("settting", JSON.stringify(newObj));
            setSetting(newObj);
        } else{
            const newObj = {...setting, [e.target.name]: false};
            window.localStorage.setItem("settting", JSON.stringify(newObj));
            setSetting(newObj);
        }  
    };

    useEffect(() => {
        const storageJson = JSON.parse(window.localStorage.getItem("setting"));
        setSetting({
            isMine: storageJson.isMine,
            isHot: storageJson.isHot,
            isRealTime: storageJson.isRealTime,
        });
    })

    

    return(
        <SettingWrapper>
            <div className> navigation</div>
            
            <div className>
                <input type = "checkbox" name = "isMine" id = "isMine" checked = {setting.isMine} onChange = {onChangeCheck}></input>
                <label htmlFor = "isMine">즐겨찾는 게시판</label>
                <input type = "checkbox" name = "isHot" id = "isHot" checked = {setting.isHot} onChange = {onChangeCheck}></input>
                <label htmlFor = "isHot">Hot 게시판</label>
                <input type = "checkbox" name = "isRealTime" id = "isRealTime" checked = {setting.isRealTime} onChange = {onChangeCheck}></input>
                <label htmlFor = "isRealTime">실시간 인기글</label>
            </div>
        </SettingWrapper>
    )
}