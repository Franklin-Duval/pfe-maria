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
  onFinish,
  onChange,
}: {
  onFinish: () => void;
  onChange: (field: any, val: any) => void;
}) => {
  const submit = () => {
    onFinish();
  };

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
        <div>
          <Button type='primary' size='large' onClick={submit}>
            Submit
          </Button>
        </div>
      </div>
    </Container>
  );
};

const QUESTIONS = [
  {
    id: 'ANTIVIRUS_FIREWALL',
    question: 'Does the company use a firewall ?',
  },
  {
    id: 'ANTIMALWARE',
    question: 'Does the company use an anti-malware ?',
  },
  {
    id: 'MISES_A_JOUR',
    question: 'Regular software patches ?',
  },
  {
    id: 'ANALYSE_VULNERABILITES',
    question: 'Are pentests often conducted ?',
  },
  {
    id: 'LEAST_PRIVILEGE',
    question: 'Is the Least privilege policy implemented?',
  },
  {
    id: 'CONTROLE_ACCES',
    question: 'Is access control implemented?',
  },
  {
    id: 'CHARTE_MOT_DE_PASSE',
    question: 'Is there a password policy ?',
  },
  {
    id: 'DONNEES_CRYPTEES',
    question: 'Is data encrypted ?',
  },
  {
    id: 'STANDARD_PCI_DSS',
    question: 'Are they PCI compliant ?',
  },

  {
    id: 'PLAN_CONTINUITE',
    question: 'Does the company have a continuity plan ?',
  },
  {
    id: 'RTO_RPO_DEFINIS',
    question: 'Are RTOs/RPOs defined for all processes?',
  },
  {
    id: 'FORMATION_EMPLOYES',
    question: 'Are employees trained concerning security awareness?',
  },
];
