import { UploadOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Button, Col, Row, Upload } from 'antd';
import React, { useState } from 'react';

const Container = styled.div`
  min-width: 600px;

  > h2 {
    font-family: Montserrat;
    margin-bottom: 30px;
    text-align: center;
  }
  .ant-row {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const FileUpload = ({
  onFinish,
  getData,
}: {
  onFinish: () => void;
  getData: (val: any) => void;
}) => {
  let formdata = new FormData();
  const [extract, setextract] = useState<any>();
  const [policy, setpolicy] = useState<any>();

  const extractHandler = (e: any) => {
    setextract(e.file.originFileObj);
  };
  const policyHandler = (e: any) => {
    setpolicy(e.file.originFileObj);
  };

  const submit = () => {
    console.log(extract);
    console.log(policy);

    formdata.append('file1', extract);
    formdata.append('file2', policy);

    fetch('http://127.0.0.1:5000/uploader', {
      method: 'POST',
      body: formdata,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
        getData(result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    onFinish();
  };

  return (
    <Container>
      <h2>Upload the following files</h2>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Company Extract : </Col>
        <Col span={10}>
          <Upload
            name='dextract'
            listType='text'
            onChange={
              extractHandler
              //   (e) => {
              //   console.log(e);
              // }
            }
          >
            <Button icon={<UploadOutlined />} style={{ width: 200 }}>
              Company Extract
            </Button>
          </Upload>
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Security policy : </Col>
        <Col span={10}>
          <Upload
            name='dsecurity'
            listType='text'
            onChange={
              policyHandler
              //   (e) => {
              //   console.log(e.file);
              // }
            }
          >
            <Button icon={<UploadOutlined />} style={{ width: 200 }}>
              Security policy
            </Button>
          </Upload>
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Business balance sheet : </Col>
        <Col span={10}>
          <Upload
            name='dbalance'
            listType='text'
            onChange={(e) => {
              console.log(e.file);
            }}
          >
            <Button icon={<UploadOutlined />} style={{ width: 200 }}>
              Business balance sheet
            </Button>
          </Upload>
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Income statement : </Col>
        <Col span={10}>
          <Upload
            name='dincome'
            listType='text'
            onChange={(e) => {
              console.log(e.file);
            }}
          >
            <Button icon={<UploadOutlined />} style={{ width: 200 }}>
              Income statement
            </Button>
          </Upload>
        </Col>
      </Row>

      <Button type='primary' size='large' onClick={submit}>
        Submit
      </Button>
    </Container>
  );
};
