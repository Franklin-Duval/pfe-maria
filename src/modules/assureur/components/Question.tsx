import styled from '@emotion/styled';
import { Button, Radio, Space } from 'antd';

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

    > .ant-row {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 5px;
  }

  td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    font-size: 15px;
  }

  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    font-size: 16px;
  }
`;

export const Questions = ({
  setPage,
  onChange,
}: {
  setPage: (val: number) => void;
  onChange: (field: any, val: any) => void;
}) => {
  const QUESTIONS = [
    {
      id: 'ANTIVIRUS_FIREWALL',
      question: 'Does the company use a firewall ?',
      select: false,
    },
    {
      id: 'ANTIMALWARE',
      question: 'Does the company use an anti-malware ?',
      select: false,
    },
    {
      id: 'MISES_A_JOUR',
      question: 'Regular software patches ?',
      select: false,
    },
    {
      id: 'ANALYSE_VULNERABILITES',
      question: 'Are pentests often conducted ?',
      select: false,
    },
    {
      id: 'LEAST_PRIVILEGE',
      question: 'Is the Least privilege policy implemented?',
      select: false,
    },
    {
      id: 'CONTROLE_ACCES',
      question: 'Is access control implemented?',
      select: false,
    },
    {
      id: 'CHARTE_MOT_DE_PASSE',
      question: 'Is there a password policy ?',
      select: false,
    },
    {
      id: 'DONNEES_CRYPTEES',
      question: 'Is data encrypted ?',
      select: false,
    },
    {
      id: 'STANDARD_PCI_DSS',
      question: 'Are they PCI compliant ?',
      select: false,
    },

    {
      id: 'PLAN_CONTINUITE',
      question: 'Does the company have a continuity plan ?',
      select: false,
    },
    {
      id: 'RTO_RPO_DEFINIS',
      question: 'Are RTOs/RPOs defined for all processes?',
      select: false,
    },
    {
      id: 'FORMATION_EMPLOYES',
      question: 'Are employees trained concerning security awareness?',
      select: false,
    },
  ];

  return (
    <Container>
      <h2>Questions</h2>
      <div className='content'>
        <table>
          {QUESTIONS.map((item) => (
            <tr id={item.id.toString()}>
              <td>{item.question}</td>
              <td style={{ width: 150 }}>
                <Space>
                  <Radio.Group
                    onChange={(e) => {
                      console.log(item.question, e.target.value);
                    }}
                  >
                    <Radio value='oui'>Oui</Radio>
                    <Radio value='non'>Non</Radio>
                  </Radio.Group>
                </Space>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button style={{ width: 200 }} onClick={() => setPage(1)}>
          Previous
        </Button>
        <Button
          type='primary'
          style={{ width: 200 }}
          onClick={() => setPage(3)}
        >
          Next
        </Button>
      </Space>
    </Container>
  );
};
