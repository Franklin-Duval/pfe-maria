import styled from '@emotion/styled';
import { Col, Input, Row, Space } from 'antd';

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

export const AutreInfo = ({
  onChange,
}: {
  onChange: (field: any, val: any) => void;
}) => {
  return (
    <Container>
      <h2>Supplementary information </h2>
      <div className='content'>
        <Space size={50}>
          <Row>
            <Col span={12}>Solvency ratio : </Col>
            <Col span={12}>
              <Input
                placeholder='Solvency ratio'
                onChange={(e) =>
                  onChange('R_SOLVABILITE', Number(e.target.value))
                }
              />
            </Col>
          </Row>
          <Row>
            <Col span={12}>Debt coverage ratio : </Col>
            <Col span={12}>
              <Input
                placeholder='Debt coverage ratio'
                onChange={(e) =>
                  onChange('TAUX_COUVERTURE_DETTE', Number(e.target.value))
                }
              />
            </Col>
          </Row>
        </Space>
      </div>
    </Container>
  );
};
