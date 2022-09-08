import styled from '@emotion/styled';
import { Button, Space, Steps } from 'antd';
import { useState } from 'react';
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
  const [getData, setgetData] = useState<any>();

  // const [company, setCompany] = useState<any>();
  const [questionnaire, setQuestionnaire] = useState<any>({
    SEC_ACT: '',
    CA_LAST: 0,
    CA_PREVISIONNEL: 0,
    CA_A_VENIR: 0,
    MARGE_BRUTE_EXPL: 0,
    NBRE_EMPL: 0,
    DATA_NBRE_PERS: '',
    SAUVEGARDES_REG: false,
    ANTIVIRUS_FIREWALL: false,
    MISES_A_JOUR: false,
    ANALYSE_VULNERABILITES: false,
    LEAST_PRIVILEGE: false,
    CONTROLE_ACCES: false,
    CHARTE_MOT_DE_PASSE: false,
    DONNEES_CRYPTEES: false,
    STANDARD_PCI_DSS: false,
    VERIF_SECU_PRESTATAIRES: false,
    AUDIT_ANNUEL_PRESTATAIRES: false,
    POLITIQUE_REF_SECU: false,
    PLAN_CONTINUITE: false,
    RTO_RPO_DEFINIS: false,
    FORMATION_EMPLOYES: false,
    VICTIME_SINISTRE: false,
    OBJET_ENQUETES: false,
    DEJA_ETE_ASSURE: false,
    MAJ_GARANTIE_AUG: false,
    MAJ_GARANTIE_DIM: false,
    NBRE_RECLAMATIONS: 0,
    R_SOLVABILITE: 0,
    TAUX_COUVERTURE_DETTE: 0,
  });

  // const submit = () => {
  //   //save to database... and show
  // };

  const pages = [
    <FileUpload setPage={setStep} getData={setgetData} />,
    <CompanyInfo setPage={setStep} data={getData} />,
    <Questions
      setPage={setStep}
      onChange={(field: any, value: any) => {
        questionnaire[field] = value;
        setQuestionnaire({ ...questionnaire });
      }}
    />,

    <div>
      <ChiffreAffaire
        onChange={(field: any, value: any) => {
          questionnaire[field] = value;
          setQuestionnaire({ ...questionnaire });
        }}
      />
      <AutreInfo
        onChange={(field: any, value: any) => {
          questionnaire[field] = value;
          setQuestionnaire({ ...questionnaire });
        }}
      />
      <Space style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button style={{ width: 200 }} onClick={() => setStep(2)}>
          Previous
        </Button>
        <Button type='primary' style={{ width: 200 }} onClick={() => {}}>
          Next
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
            description='Validate the auto-filled form'
          />
          <Steps.Step
            title='Security'
            description='Validate the auto-filled form'
          />
          <Steps.Step
            title='Security'
            description='Validate the auto-filled form'
          />
        </Steps>

        <div className='content'>{pages[step]}</div>
      </Container>
    </Drawer>
  );
};
