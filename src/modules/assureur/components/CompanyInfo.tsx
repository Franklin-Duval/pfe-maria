import styled from '@emotion/styled';
import { Button, Col, Input, Row, Space } from 'antd';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
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

export const CompanyInfo = ({
  setPage,
  data,
  updateData,
}: {
  setPage: (val: number) => void;
  data?: CompanyEntity;
  updateData: (val: CompanyEntity) => void;
}) => {
  const [name, setName] = useState(data?.company_name);
  const [address, setAddress] = useState(data?.address);
  const [activity, setActivity] = useState(data?.activity);
  const [numEmp, setNumEmp] = useState(data?.num_employees);
  const [website, setWebsite] = useState(data?.website);
  const [regNum, setRegNum] = useState(data?.registration_number);

  return (
    <Container>
      <h2>Company Information</h2>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Company name : </Col>
        <Col span={14}>
          <Input
            placeholder='Company name'
            value={name}
            onChange={(val) => {
              setName(val.target.value);
              if (data) {
                updateData({ ...data, company_name: val.target.value });
              }
            }}
          />
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Address : </Col>
        <Col span={14}>
          <Input
            placeholder='Address'
            value={address}
            onChange={(val) => {
              setAddress(val.target.value);
              if (data) {
                updateData({ ...data, address: val.target.value });
              }
            }}
          />
        </Col>
      </Row>

      {/* <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Website : </Col>
        <Col span={14}>
          <Input
            placeholder='website'
            value={website}
            onChange={(val) => {
              setWebsite(val.target.value);
              if (data) {
                updateData({ ...data, website: val.target.value });
              }
            }}
          />
        </Col>
      </Row> */}

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Activity : </Col>
        <Col span={14}>
          <Input
            placeholder='Activity'
            value={activity}
            onChange={(val) => {
              setActivity(val.target.value);
              if (data) {
                updateData({ ...data, activity: val.target.value });
              }
            }}
          />
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Registration number : </Col>
        <Col span={14}>
          <Input
            placeholder='registration number'
            value={regNum}
            onChange={(val) => {
              setRegNum(val.target.value);
              if (data) {
                updateData({ ...data, registration_number: val.target.value });
              }
            }}
          />
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>N° Employees : </Col>
        <Col span={14}>
          <Input
            placeholder='N° Employees'
            type='number'
            value={numEmp}
            onChange={(val) => {
              setNumEmp(Number(val.target.value));
              if (data) {
                updateData({
                  ...data,
                  num_employees: Number(val.target.value),
                });
              }
            }}
          />
        </Col>
      </Row>

      <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          icon={<FaArrowLeft style={{ marginRight: 5, marginBottom: -2 }} />}
          style={{ width: 200 }}
          onClick={() => setPage(0)}
        >
          Previous
        </Button>
        <Button
          type='primary'
          style={{ width: 200 }}
          onClick={() => setPage(2)}
        >
          Next <FaArrowRight style={{ marginLeft: 5, marginBottom: -2 }} />
        </Button>
      </Space>
    </Container>
  );
};
