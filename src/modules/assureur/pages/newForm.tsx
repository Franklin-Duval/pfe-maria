import styled from '@emotion/styled';
import { Steps } from 'antd';
import { useState } from 'react';
import { CompanyEntity } from '../../entities/company';
import { Drawer } from '../../shared/SidebarContainer';
import { ExtractedInfo } from '../components/DataTable';
import { FormUpload } from '../components/FormUpload';

const Container = styled.div`
  padding-bottom: 20px;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NewForm = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<CompanyEntity[]>([]);

  const pages = [
    <FormUpload onFinish={() => setStep(1)} getData={setData} />,
    <ExtractedInfo setPage={setStep} data={data} />,
  ];

  return (
    <Drawer>
      <Container>
        <Steps current={step}>
          <Steps.Step
            title='Document Upload'
            description='Upload one or more questionnaires'
          />
          <Steps.Step
            title='Viewing data'
            description='View the extracted information'
          />
        </Steps>

        <div className='content'>{pages[step]}</div>
      </Container>
    </Drawer>
  );
};
