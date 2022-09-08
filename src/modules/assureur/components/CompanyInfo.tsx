import styled from '@emotion/styled';
import { Button, Col, Input, Row, Space } from 'antd';
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
}: {
  setPage: (val: number) => void;
  data: any;
}) => {
  // useEffect(() => {
  //   console.log(data);
  //   console.log('data is just above : ');
  // }, [data]);

  const submit = () => {
    setPage(2);
  };

  return (
    <Container>
      <h2>Company Information</h2>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Company name : </Col>
        <Col span={14}>
          <Input placeholder='Company name' />
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Address : </Col>
        <Col span={14}>
          <Input placeholder='Address' />
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Activity : </Col>
        <Col span={14}>
          <Input placeholder='Activity' />
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Employees : </Col>
        <Col span={14}>
          <Input placeholder='Employees' />
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Turnover : </Col>
        <Col span={14}>
          <Input placeholder='turnover' />
        </Col>
      </Row>

      <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button style={{ width: 200 }} onClick={() => setPage(0)}>
          Previous
        </Button>
        <Button type='primary' style={{ width: 200 }} onClick={submit}>
          Next
        </Button>
      </Space>
    </Container>
  );
};
