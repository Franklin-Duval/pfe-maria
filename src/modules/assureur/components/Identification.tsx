import styled from '@emotion/styled';
import { Col, Input, Row, Select } from 'antd';

const Container = styled.div`
  > h2 {
    font-family: Montserrat;
  }

  > .content {
    margin-left: 30px;
    margin-bottom: 20px;

    > .ant-row {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }
`;

export const Identification = ({
  // id_data,
  onChange,
  setCompany,
}: {
  // id_data: any;
  onChange: (field: any, val: any) => void;
  setCompany: (field: any, val: any) => void;
}) => {
  return (
    <Container>
      <h2>Identification</h2>
      <div className='content'>
        <Row>
          <Col span={10}>Company name : </Col>
          <Col span={14}>
            <Input
              placeholder='Company name'
              onChange={(e) => setCompany('socialReason', e.target.value)}
            />{' '}
          </Col>
        </Row>
        <Row>
          <Col span={10}>Company address: </Col>
          <Col span={14}>
            <Input
              placeholder='Company address'
              onChange={(e) => setCompany('address', Number(e.target.value))}
            />
          </Col>
        </Row>
        <Row>
          <Col span={10}>Business sector : </Col>
          <Col span={14}>
            <Select
              placeholder='Business sector'
              style={{ width: '100%' }}
              onChange={(e) => onChange('SEC_ACT', e)}
            >
              <Select.Option value='Informatique'>
                Computer Science
              </Select.Option>
              <Select.Option value='Cyber sécurité'>
                Cyber security
              </Select.Option>
              <Select.Option value='Audit des systèmes'>
                System auditing
              </Select.Option>
            </Select>{' '}
          </Col>
        </Row>
        <Row>
          <Col span={10}>Number of employees : </Col>
          <Col span={14}>
            <Input
              placeholder='Number of employees'
              onChange={(e) => onChange('NBRE_EMPL', Number(e.target.value))}
            />
          </Col>
        </Row>
      </div>
      {/* <div>
        <Button type='primary' size='large' onClick={submit}>
          Submit
        </Button>
      </div> */}
    </Container>
  );
};
