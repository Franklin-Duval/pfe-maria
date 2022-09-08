import styled from '@emotion/styled';
import { Col, Input, Row } from 'antd';

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
        <p style={{ display: 'block' }}>
          <Row>
            <Col span={25}>Solvency ratio : </Col>
            <Col span={14}>
              <Input
                placeholder='Solvency ratio'
                onChange={(e) =>
                  onChange('R_SOLVABILITE', Number(e.target.value))
                }
              />
            </Col>
          </Row>
        </p>
        <p style={{ display: 'block' }}>
          <Row>
            <Col span={25}>Debt coverage ratio : </Col>
            <Col span={14}>
              <Input
                placeholder='Debt coverage ratio'
                onChange={(e) =>
                  onChange('TAUX_COUVERTURE_DETTE', Number(e.target.value))
                }
              />
            </Col>
          </Row>
        </p>
      </div>
    </Container>
  );
};
