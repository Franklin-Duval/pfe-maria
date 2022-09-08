import styled from '@emotion/styled';
import { Button, Col, Input, Row } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
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

export const CompanyInfo = ({
  onFinish,
  data,
}: {
  onFinish: () => void;
  data: any;
}) => {
  const router = useNavigate();
  // useEffect(() => {
  //   console.log(data);
  //   console.log('data is just above : ');
  // }, [data]);

  const submit = () => {
    onFinish();
  };

  return (
    <Container>
      <h2>Company Information</h2>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Company name : </Col>
        <Col span={10}>
          <Input placeholder='Company name' />
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Address : </Col>
        <Col span={10}>
          <Input placeholder='Address' />
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Activity : </Col>
        <Col span={10}>
          <Input placeholder='Activity' />
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Employees : </Col>
        <Col span={10}>
          <Input placeholder='Employees' />
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Turnover : </Col>
        <Col span={10}>
          <Input placeholder='turnover' />
        </Col>
      </Row>

      <Button type='primary' size='large' onClick={submit}>
        Submit
      </Button>
    </Container>
  );
};
