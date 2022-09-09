import styled from '@emotion/styled';
import { Col, Input, Row, Space } from 'antd';
import { useState } from 'react';
import { CompanyEntity } from '../../entities/company';

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
  data,
  updateData,
}: {
  data?: CompanyEntity;
  updateData: (val: CompanyEntity) => void;
}) => {
  const [solvency, setSolvency] = useState(data?.solvency);
  const [coverage, setCoverage] = useState(data?.debt_coverage);

  return (
    <Container>
      <h2>Supplementary information </h2>
      <div className='content'>
        <Space size={50}>
          <Row>
            <Col span={12}>Solvency ratio : </Col>
            <Col span={12}>
              <Input
                type='number'
                value={solvency}
                placeholder='Solvency ratio'
                onChange={(val) => {
                  setSolvency(Number(val.target.value));
                  if (data) {
                    updateData({
                      ...data,
                      solvency: Number(val.target.value),
                    });
                  }
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col span={12}>Debt coverage ratio : </Col>
            <Col span={12}>
              <Input
                type='number'
                value={coverage}
                placeholder='Debt coverage ratio'
                onChange={(val) => {
                  setCoverage(Number(val.target.value));
                  if (data) {
                    updateData({
                      ...data,
                      debt_coverage: Number(val.target.value),
                    });
                  }
                }}
              />
            </Col>
          </Row>
        </Space>
      </div>
    </Container>
  );
};
