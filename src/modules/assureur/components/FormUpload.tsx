import { UploadOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Alert, Button, Col, Row, Upload } from 'antd';
import { UploadChangeParam, UploadFile } from 'antd/lib/upload';
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
  const [pdfs, setPdfs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const updloadHandler = (e: UploadChangeParam<UploadFile<any>>) => {
    setPdfs(e.fileList.map((item) => item.originFileObj));
  };

  const submit = () => {
    console.log(pdfs);
    setLoading(true);
    let formdata = new FormData();

    pdfs.forEach((el) => formdata.append('files', el));

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
      })
      .finally(() => {
        setLoading(false);
        onFinish();
      });
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
            action={undefined}
            multiple={true}
            maxCount={5}
            accept='.pdf'
            listType='text'
            onChange={updloadHandler}
          >
            <Button icon={<UploadOutlined />} style={{ width: 200 }}>
              Questionnaire(s)
            </Button>
          </Upload>
        </Col>
      </Row>

      <Button
        type='primary'
        loading={loading}
        style={{ width: 200 }}
        onClick={submit}
      >
        Submit
      </Button>
    </Container>
  );
};
