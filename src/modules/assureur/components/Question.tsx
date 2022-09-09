import styled from '@emotion/styled';
import { Button, Radio, Space } from 'antd';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
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
  data,
  updateData,
}: {
  setPage: (val: number) => void;
  data?: CompanyEntity;
  updateData: (val: CompanyEntity) => void;
}) => {
  const QUESTIONS = [
    {
      id: 1,
      question: 'Does the company use a firewall ?',
      select: data?.firewall ? true : false,
    },
    {
      id: 2,
      question: 'Does the company use an anti-malware ?',
      select: data?.antimalware ? true : false,
    },
    {
      id: 3,
      question: 'Regular software patches ?',
      select: data?.patch ? true : false,
    },
    {
      id: 4,
      question: 'Are pentests often conducted ?',
      select: data?.pentest ? true : false,
    },
    {
      id: 5,
      question: 'Is the Least privilege policy implemented?',
      select: data?.least_priv ? true : false,
    },
    {
      id: 6,
      question: 'Is access control implemented?',
      select: data?.access_control1 ? true : false,
    },
    {
      id: 7,
      question: 'Is there a password policy ?',
      select: data?.passw_policy ? true : false,
    },
    {
      id: 8,
      question: 'Is data encrypted ?',
      select: data?.encryption ? true : false,
    },
    {
      id: 9,
      question: 'Are they PCI compliant ?',
      select: data?.pci ? true : false,
    },

    {
      id: 10,
      question: 'Does the company have a continuity plan ?',
      select: data?.continuity_plan ? true : false,
    },
    {
      id: 11,
      question: 'Are RTOs/RPOs defined for all processes?',
      select: data?.rpo ? true : false,
    },
    {
      id: 12,
      question: 'Are employees trained concerning security awareness?',
      select: data?.emp_training ? true : false,
    },
  ];

  const getNewValue = (id: number, val: boolean) => {
    if (data) {
      switch (id) {
        case 1:
          updateData({ ...data, firewall: val });
          break;
        case 2:
          updateData({ ...data, antimalware: val });
          break;
        case 3:
          updateData({ ...data, patch: val });
          break;
        case 4:
          updateData({ ...data, pentest: val });
          break;
        case 5:
          updateData({ ...data, least_priv: val });
          break;
        case 6:
          updateData({ ...data, access_control1: val });
          break;
        case 7:
          updateData({ ...data, passw_policy: val });
          break;
        case 8:
          updateData({ ...data, encryption: val });
          break;
        case 9:
          updateData({ ...data, pci: val });
          break;
        case 10:
          updateData({ ...data, continuity_plan: val });
          break;
        case 11:
          updateData({ ...data, rpo: val });
          break;
        case 12:
          updateData({ ...data, emp_training: val });
          break;
        default:
          break;
      }
    }
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
                      getNewValue(item.id, e.target.value);
                    }}
                    defaultValue={item.select}
                  >
                    <Radio value={true}>Oui</Radio>
                    <Radio value={false}>Non</Radio>
                  </Radio.Group>
                </Space>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          icon={<FaArrowLeft style={{ marginRight: 5, marginBottom: -2 }} />}
          style={{ width: 200 }}
          onClick={() => setPage(1)}
        >
          Previous
        </Button>
        <Button
          type='primary'
          style={{ width: 200 }}
          onClick={() => setPage(3)}
        >
          Next <FaArrowRight style={{ marginLeft: 5, marginBottom: -2 }} />
        </Button>
      </Space>
    </Container>
  );
};
