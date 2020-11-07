import React from "react";
import {useDropzone} from 'react-dropzone';
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

const Subtitle = styled.p`
    font-size: 10px;
    color: #828282;
`;

const Dropzone = styled.div`
    width: 100%;
    height: 220px;
    border-radius: 12px;
    border: 1px dashed #97BEF4;
    background-color: #F6F8FB;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    outline: none;
`;

const PictureIcon = styled.svg`
    height: 60px;
    width: 60px;
`;

const LightText = styled.p`
    font-size: 12px;
    color: #BDBDBD;
`;

const ChooseFileButton = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: #2F80ED;
    color: #FFFFFF;
    width: 100px;
    height: 32px;
    font-size: 10px;
    &:hover {
      background-color: #1570EB;
    }
`;


function ImageUploaderInitial({onFileUpload}) {

    function handleFileChange(acceptedFiles) {
        onFileUpload(acceptedFiles[0]);
    }

    const {getRootProps, getInputProps, isDragActive, open} = useDropzone({
        onDrop: handleFileChange,
        multiple: false,
        noClick: true,
        noKeyboard: true
    });

    return <Container>
        <Title>Upload your image</Title>
        <Subtitle>File should be Jpeg, Png...</Subtitle>
        <Dropzone {...getRootProps()}>
            <PictureIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                    d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z"/>
            </PictureIcon>
            <input {...getInputProps()}/>
            {isDragActive ?
                <LightText>Drop your image</LightText> :
                <LightText>Drag & Drop your image here</LightText>}
        </Dropzone>
        <LightText>Or</LightText>
        <ChooseFileButton type="button" onClick={open}>Choose a file</ChooseFileButton>
    </Container>;
}

export default ImageUploaderInitial;