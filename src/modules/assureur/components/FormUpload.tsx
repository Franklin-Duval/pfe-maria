import { UploadOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Alert, Button, Col, Row, Upload } from 'antd';
import { useState } from 'react';

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

export const FormUpload = ({
  onFinish,
  getData,
}: {
  onFinish: () => void;
  getData: (val: any) => void;
}) => {
  let formdata = new FormData();
  const [extract, setextract] = useState([]);
  const [policy, setpolicy] = useState(false);

  const extractHandler = (e: any) => {
    setextract(e.file.originFileObj);
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const policyHandler = (e: any) => {
    setpolicy(e.file.originFileObj);
  };

  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'http://www.baidu.com/xxx.png',
    },
  ]);

  const handleChange = (info: any) => {
    let newFileList = [...info.fileList]; // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new

    newFileList = fileList.slice(-2); // 2. Read from response and show file link

    newFileList = fileList.map((file: any) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }

      return file;
    });
    setFileList(newFileList);
  };

  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: handleChange,
    multiple: true,
    maxCount: 5,
    accept: '.pdf',
  };

  const submit = () => {
    console.log(extract);
    console.log(policy);

    // formdata.append('file1', extract);
    // formdata.append('file2', policy);

    fetch('http://127.0.0.1:5000/upload_form', {
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
      <h2>Upload one or more questionnaires</h2>
      <Alert
        type='info'
        message={
          <p style={{ margin: 0 }}>
            <strong>Important : </strong> You can upload upto 5 documents
          </p>
        }
        style={{ marginTop: 20, marginBottom: 20 }}
      />

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Questionnaire(s) : </Col>
        <Col span={10}>
          <Upload
            {...props}
            listType='text'
            onChange={
              extractHandler
              //   (e) => {
              //   console.log(e);
              // }
            }
          >
            <Button icon={<UploadOutlined />} style={{ width: 200 }}>
              Questionnaire(s)
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
