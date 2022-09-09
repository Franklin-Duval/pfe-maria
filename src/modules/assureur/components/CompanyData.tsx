import styled from '@emotion/styled';
import { Col, Divider, Row } from 'antd';
import { FaCheckSquare, FaTimesCircle } from 'react-icons/fa';
import { CompanyEntity } from '../../entities/company';

const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 30px;
  border-raduis: 20px;
  width: 100%;
  margin: 0px 0px 0px 30px;
`;

export const CompanyData = ({ data }: { data: CompanyEntity }) => {
  const display = (val?: string | number) => {
    return val ? <p style={{ fontFamily: 'Montserrat' }}>val</p> : '----';
  };

  const displayBool = (val: boolean) => {
    if (val) {
      return <FaCheckSquare size={25} color='green' />;
    } else {
      return <FaTimesCircle size={25} color='red' />;
    }
  };

  return (
    <Container>
      <h2>Company data</h2>
      <Divider />

      <div className='compInfo'>
        <h3>Insurer : {display(data.insurer)} </h3>
        <Row>
          <Col span={8}>Name : {display(data.company_name)} </Col>
          <Col span={8}>Address : {display(data.address)} </Col>
          <Col span={8}>Website : {display(data.website)} </Col>
        </Row>

        <Row>
          <Col span={8}>Activity : {display(data.company_name)} </Col>
          <Col span={8}>Registration Number : {display(data.address)} </Col>
          <Col span={8}>
            Number of Employees: {display(data.num_employees)}{' '}
          </Col>
        </Row>

        <Row>
          <Col span={8}>Online Share : {display(data.online_share)} </Col>
          <Col span={8}>Marge brut : {display(data.marge_brut)} </Col>
          <Col span={8}>Number of Clients: {display(data.num_clients)} </Col>
        </Row>
      </div>

      <Divider>Security Policies</Divider>
      <Row>
        <Col span={6}>Firewall : {displayBool(data.firewall)} </Col>
        <Col span={6}>Antimalware: {displayBool(data.antimalware)} </Col>
        <Col span={6}>Patch: {displayBool(data.patch)} </Col>
        <Col span={6}>Pen Testing: {displayBool(data.pentest)} </Col>
      </Row>

      <Row>
        <Col span={6}>
          Access control : {displayBool(data.access_control1)}{' '}
        </Col>
        <Col span={6}>Password Policy: {displayBool(data.passw_policy)} </Col>
        <Col span={6}>Encryption: {displayBool(data.encryption)} </Col>
        <Col span={6}>PCI: {displayBool(data.pci)} </Col>
      </Row>

      <Divider>Turnover Information</Divider>
      <Row>
        <Col span={8}>Present Turnover : {display(data.present_turnover)} </Col>
        <Col span={8}>Future Turnover : {display(data.future_turnover)} </Col>
        <Col span={8}>Past Turnover : {display(data.past_turnover)} </Col>
      </Row>
    </Container>
  );
};
