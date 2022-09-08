import styled from '@emotion/styled';
import { Steps } from 'antd';
import React, { useState } from 'react';
import { Drawer } from '../../shared/SidebarContainer';
import ExtractedTable from '../components/DataTable';
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
  const [getData, setgetData] = useState<any>();

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

  // useEffect(() => {
  //   console.log(getData);
  //   console.log('getData is just above : ');
  // }, [getData]);
  const submit = () => {
    //save to database... and show
  };
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

        <div className='content'>
          {step === 0 ? (
            <FormUpload onFinish={() => setStep(1)} getData={setgetData} />
          ) : (
            <ExtractedTable />
          )}
        </div>
      </Container>
    </Drawer>
  );
};
