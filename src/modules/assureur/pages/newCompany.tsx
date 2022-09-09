import styled from '@emotion/styled';
import { Button, Space, Steps } from 'antd';
import { useState } from 'react';
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import { CompanyEntity } from '../../entities/company';
import { Drawer } from '../../shared/SidebarContainer';
import { AutreInfo } from '../components/AutresInfo';
import { ChiffreAffaire } from '../components/ChiffreAffaire';
import { CompanyInfo } from '../components/CompanyInfo';
import { FileUpload } from '../components/FileUpload';
import { Questions } from '../components/Question';

const Container = styled.div`
  padding-bottom: 20px;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NewCompany = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<CompanyEntity>();
  const [loading, setLoading] = useState(false);

  const saveCompanyData = () => {
    setLoading(true);
    fetch('http://127.0.0.1:5000/<__route__>', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const pages = [
    <FileUpload setPage={setStep} getData={setData} />,
    <CompanyInfo setPage={setStep} data={data} updateData={setData} />,
    <Questions setPage={setStep} data={data} updateData={setData} />,

    <div>
      <ChiffreAffaire data={data} updateData={setData} />
      <AutreInfo data={data} updateData={setData} />

      <Space style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button
          icon={<FaArrowLeft style={{ marginRight: 5, marginBottom: -2 }} />}
          style={{ width: 200 }}
          onClick={() => setStep(2)}
        >
          Previous
        </Button>
        <Button
          type='primary'
          loading={loading}
          icon={<FaSave style={{ marginRight: 5, marginBottom: -2 }} />}
          style={{ width: 200 }}
          onClick={saveCompanyData}
        >
          Finish and Save
        </Button>
      </Space>
    </div>,
  ];
  return (
    <Drawer>
      <Container>
        <Steps current={step}>
          <Steps.Step
            title='Document Upload'
            description="Upload the company's files"
          />
          <Steps.Step
            title='General info'
            description='View general information of the company'
          />
          <Steps.Step
            title='Security'
            description="Company's security policies"
          />
          <Steps.Step
            title='Turnover'
            description="Company's turnover information"
          />
        </Steps>

        <div className='content'>{pages[step]}</div>
      </Container>
    </Drawer>
  );
};
