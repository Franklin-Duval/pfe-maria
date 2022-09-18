import { UploadOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Button, Col, Row, Upload } from 'antd';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { CompanyEntity } from '../../entities/company';

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
  getData,
  setPage,
}: {
  getData: (val: CompanyEntity) => void;
  setPage: (val: number) => void;
}) => {
  const [extract, setextract] = useState<any>();
  const [policy, setpolicy] = useState<any>();
  const [balance, setbalance] = useState<any>();
  const [loading, setLoading] = useState(false);

  const extractHandler = (e: any) => {
    setextract(e.file.originFileObj);
  };
  const policyHandler = (e: any) => {
    setpolicy(e.file.originFileObj);
  };
  const balanceHandler = (e: any) => {
    setbalance(e.file.originFileObj);
  };
  const submit = () => {
    setLoading(true);
    console.log(extract);
    console.log(policy);
    console.log(balance);
    let formdata = new FormData();

    formdata.append('file1', extract);
    formdata.append('file2', policy);
    formdata.append('file3', balance);

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
      })
      .finally(() => {
        setPage(1);
        setLoading(false);
      });
  };

  return (
    <Container>
      <h2>Upload the following files</h2>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Company Extract : </Col>
        <Col span={10}>
          <Upload listType='text' onChange={extractHandler}>
            <Button icon={<UploadOutlined />} style={{ width: 200 }}>
              Company Extract
            </Button>
          </Upload>
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Security policy : </Col>
        <Col span={10}>
          <Upload listType='text' onChange={policyHandler}>
            <Button icon={<UploadOutlined />} style={{ width: 200 }}>
              Security policy
            </Button>
          </Upload>
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Business balance sheet : </Col>
        <Col span={10}>
          <Upload listType='text' onChange={balanceHandler}>
            <Button icon={<UploadOutlined />} style={{ width: 200 }}>
              Business balance sheet
            </Button>
          </Upload>
        </Col>
      </Row>

      {/* <Row style={{ marginBottom: 30 }}>
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
      </Row> */}

      <Button
        type='primary'
        loading={loading}
        style={{ width: 200 }}
        onClick={submit}
      >
        Next <FaArrowRight style={{ marginLeft: 5, marginBottom: -2 }} />
      </Button>
    </Container>
  );
};
