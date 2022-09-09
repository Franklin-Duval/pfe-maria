import styled from '@emotion/styled';
import { Input } from 'antd';
import { useState } from 'react';
import { CompanyEntity } from '../../entities/company';

const Container = styled.div`
  p {
    font-size: 16px;
  }
  > h2 {
    font-family: Montserrat;
  }

  > .content {
    margin-left: 30px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 20px;
  }

  td {
    border: 2px solid #dddddd;
    text-align: center;
    padding: 10px;
  }

  th {
    border: 2px solid #dddddd;
    text-align: center;
    padding: 8px;
    font-size: 18px;
    font-weight: normal;
  }
`;

export const ChiffreAffaire = ({
  data,
  updateData,
}: {
  data?: CompanyEntity;
  updateData: (val: CompanyEntity) => void;
}) => {
  const [lastTurn, setLastTurn] = useState(data?.past_turnover);
  const [presTurn, setPresTurn] = useState(data?.present_turnover);
  const [futTurn, setFutTurn] = useState(data?.future_turnover);

  return (
    <Container>
      <h2>Company turnover</h2>
      <div className='content'>
        <p style={{ display: 'block' }}>Amount of the turnover achieved :</p>

        <table>
          <tr>
            <th>Last fiscal year</th>
            <th>Current fiscal year</th>
            <th>Next fiscal year</th>
          </tr>
          <tr>
            <td>
              <Input.Group compact>
                <Input
                  style={{ width: '60%' }}
                  type='number'
                  suffix='$'
                  value={lastTurn}
                  onChange={(val) => {
                    setLastTurn(Number(val.target.value));
                    if (data) {
                      updateData({
                        ...data,
                        past_turnover: Number(val.target.value),
                      });
                    }
                  }}
                />
              </Input.Group>
            </td>
            <td>
              <Input.Group compact>
                <Input
                  style={{ width: '60%' }}
                  type='number'
                  suffix='$'
                  value={presTurn}
                  onChange={(val) => {
                    setPresTurn(Number(val.target.value));
                    if (data) {
                      updateData({
                        ...data,
                        present_turnover: Number(val.target.value),
                      });
                    }
                  }}
                />
              </Input.Group>
            </td>
            <td>
              <Input.Group compact>
                <Input
                  style={{ width: '60%' }}
                  type='number'
                  suffix='$'
                  value={futTurn}
                  onChange={(val) => {
                    setFutTurn(Number(val.target.value));
                    if (data) {
                      updateData({
                        ...data,
                        future_turnover: Number(val.target.value),
                      });
                    }
                  }}
                />
              </Input.Group>
            </td>
          </tr>
        </table>
        {/* <div>
          <Space>
            <p style={{ margin: 0 }}>
              Gross operating margin for the last fiscal year
            </p>
            <Input
              style={{ width: 100 }}
              size='large'
              suffix='%'
              onChange={(e) => onChange('MARGE_BRUTE_EXPL', e.target.value)}
            />
          </Space>
        </div> */}
      </div>
    </Container>
  );
};
