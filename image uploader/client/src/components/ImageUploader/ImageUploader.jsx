import axios from "axios";
import React, {useState} from "react";
import styled from "styled-components";
import {API_ENDPOINT} from "../../config";

import ImageUploaderInitial from "./ImageUploaderInitial";
import ImageUploaderUploading from "./ImageUploaderUploading";


const Container = styled.div`
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0,0,0,0.1);
`;

const INITIAL_STATE = "initial";
const UPLOADING_STATE = "uploading";
const UPLOADED_STATE = "uploaded";

function ImageUploader() {
    const [state, setState] = useState(INITIAL_STATE);

    function handleFileUpload(file) {
        const url = `${API_ENDPOINT}/upload_file`;
        const formData = new FormData();
        formData.append("file", file);

        setState(UPLOADING_STATE);
        axios.post(url, formData, {headers: {"Content-Type": "multipart/form-data"}}).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }

    return <Container>
        {(function () {
            switch (state) {
                case INITIAL_STATE:
                    return <ImageUploaderInitial onFileUpload={handleFileUpload}/>;
                case UPLOADING_STATE:
                    return <ImageUploaderUploading/>;
                default:
                    return <ImageUploaderInitial onFileUpload={handleFileUpload}/>;
            }
        })()}
    </Container>;
}

export default ImageUploader;