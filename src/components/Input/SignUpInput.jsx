import React from "react";
import styled from "styled-components";

import { COLORS } from "../Colors";

const CustomSignUpInput = styled.div`
    width: 100%;
    height: 32px;
    border-radius: 10px;
    color: black;
    font-size: 15px;

`;


const SignUpInput = ({ text, onClick }) => {
    return(
        <CustomSignUpInput onClick = {onClick} className="arrange-center-center">
            {text}
        </CustomSignUpInput>

    );
};

export default SignUpInput;