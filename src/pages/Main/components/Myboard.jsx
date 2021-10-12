import React from "react";
import styled from "styled-components";
import {COLORS} from "../../../components/Colors";
import { Link } from "react-router-dom";
import { dummyMyboard } from "../../../components/dummyData";

const MyBoradItem = styled.div`

`;


const MyboradList = ({myboard}) => {
    return(
        <MyboradItem>
            <div className = "Myborad_top">
                <p className = "category"> {myboard.category} </p>
            </div>
            <div>
                <p className = "title"> {myboard.title}</p>
            </div>
            
        </MyboradItem>         
    );
}

export default MyboradList;