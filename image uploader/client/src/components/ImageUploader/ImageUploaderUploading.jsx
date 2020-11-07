import React from "react";
import styled, {keyframes} from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 400px;
    height: 140px;
    padding:  15px 30px;
`;

const Title = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #4F4F4F;
`;

const indeterminateProgressAnimation = keyframes`
  from {
    margin-left: -100px;
    margin-right: 100%;
  }
  to {
     margin-left: 100%;
     margin-right: -100px;
  }
`;
const IndeterminateProgress = styled.div`
    display: flex;
    height: 6px;
    width: 100%;
    background-color: #F2F2F2;
    overflow: hidden;
    :before {
        height: 6px;
        width: 100%;
        background-color: #2F80ED;
        content: "";
        animation: ${indeterminateProgressAnimation} 1s infinite linear;
    }
`;

function ImageUploaderUploading() {
    return <Container>
        <Title>Uploading...</Title>
        <IndeterminateProgress/>
    </Container>;
}

export default ImageUploaderUploading;