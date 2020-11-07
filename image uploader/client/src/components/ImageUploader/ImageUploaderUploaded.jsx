import React from "react";
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 400px;
    height: 470px;
    padding: 10px 30px;
`;

const Title = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #4F4F4F;
`;

const ImageLinkContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 34px;
    background-color: #F6F8FB;
    border-radius: 8px;
    border: 1px solid #E0E0E0;
`;

const ImageLink = styled.p`
    font-size: 10px;
    color: #4F4F4F;
    margin: 0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const CopyLinkButton = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: #2F80ED;
    color: #FFFFFF;
    min-width: 74px;
    height: 100%;
    font-size: 10px;
    &:hover {
      background-color: #1570EB;
    }
`;

const Img = styled.img`
    width: 100%;
    height: 220px;
    border-radius: 12px;
`;

const SuccessIcon = styled.svg`
    height: 40px;
    width: 40px;
    fill: #219653;
`;

function ImageUploaderUploaded({imagePath}) {

    function handleCopyLinkButtonClick() {
        navigator.clipboard.writeText(imagePath);
    }

    return <Container>
        <SuccessIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"/>
        </SuccessIcon>
        <Title>Uploaded Successfully !</Title>
        <Img src={imagePath}/>
        <ImageLinkContainer>
            <ImageLink>{imagePath}</ImageLink>
            <CopyLinkButton type="button" onClick={handleCopyLinkButtonClick}>Copy link</CopyLinkButton>
        </ImageLinkContainer>
    </Container>;
}

export default ImageUploaderUploaded;