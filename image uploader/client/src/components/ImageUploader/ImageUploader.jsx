import axios from "axios";
import React, {useState} from "react";
import styled from "styled-components";
import {API_ENDPOINT} from "../../config";

import ImageUploaderInitial from "./ImageUploaderInitial";


const Container = styled.div`
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0,0,0,0.1);
`;

function ImageUploader() {
    const [state, setState] = useState("initial");

    function handleFileUpload(file) {
        const url = `${API_ENDPOINT}/upload_file`;
        const formData = new FormData();
        formData.append("file", file);

        axios.post(url, formData, {headers: {"Content-Type": "multipart/form-data"}}).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }

    return <Container>
        <ImageUploaderInitial onFileUpload={handleFileUpload}/>
    </Container>;
}

export default ImageUploader;