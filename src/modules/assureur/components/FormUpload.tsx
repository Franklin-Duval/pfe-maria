import { UploadOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Alert, Button, Col, Row, Upload } from 'antd';
import { UploadChangeParam, UploadFile } from 'antd/lib/upload';
import { useState } from 'react';

const Container = styled.div`
  min-width: 600px;

  > h2 {
    font-family: Montserrat;
    margin-bottom: 30px;
    text-align: center;
  }
  .ant-row {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const FormUpload = ({
  onFinish,
  getData,
}: {
  onFinish: () => void;
  getData: (val: any) => void;
}) => {
  const [pdfs, setPdfs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const updloadHandler = (e: UploadChangeParam<UploadFile<any>>) => {
    setPdfs(e.fileList.map((item) => item.originFileObj));
  };

  const setBooleanVal = (val: number) => (val === 1 ? true : false);
  const submit = () => {
    console.log(pdfs);
    setLoading(true);
    let formdata = new FormData();

    pdfs.forEach((el) => formdata.append('form1', el));

    fetch('http://127.0.0.1:5000/upload_form', {
      method: 'POST',
      body: formdata,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
        getData(result);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        setLoading(false);
        onFinish();
        getData([
          {
            online_share: 60,
            registration_number: '895623',
            on_the_date: '08/08/2022',
            past_turnover: 55000,
            done_at: 'Arlington',
            marge_brut: 56,
            access_control1: setBooleanVal(1),
            access_control2: setBooleanVal(1),
            access_control3: setBooleanVal(1),
            activity: 'IT services and products',
            address: 'Arlington',
            antimalware: setBooleanVal(1),
            audit_prestataire: setBooleanVal(1),
            undersigned_name: 'Jelena Salbakokk',
            backup: setBooleanVal(1),
            backup_freq: 'weekly',
            company_name: 'Almanaca Tech',
            continuity_plan: setBooleanVal(1),
            present_turnover: 62000,
            start_date: '08/08/2022',
            emp_training: setBooleanVal(1),
            num_employees: 100,
            encryption: setBooleanVal(1),
            end_date: '08/08/2023',
            future_turnover: 68000,
            rto_gt_threshold: '',
            num_clients: 1200,
            passw_policy: setBooleanVal(1),
            patch: setBooleanVal(1),
            pci: setBooleanVal(1),
            pentest: setBooleanVal(1),
            min_rto: '',
            secu_prestataires: setBooleanVal(0),
            supplier_name: '',
            two_factor_auth: setBooleanVal(0),
            website: 'https:almanaca.com',

            signature_date: '12/12/2022',
            firewall: setBooleanVal(0),
            least_priv: setBooleanVal(0),
            rpo: setBooleanVal(0),
            solvency: 0,
            debt_coverage: 0,
            date: '12/12/2022',
            insurer: '',
            id: '',
          },
          {
            online_share: 60,
            registration_number: '895623',
            on_the_date: '08/08/2022',
            past_turnover: 55000,
            done_at: 'Arlington',
            marge_brut: 56,
            access_control1: setBooleanVal(1),
            access_control2: setBooleanVal(1),
            access_control3: setBooleanVal(1),
            activity: 'IT services and products',
            address: 'Arlington',
            antimalware: setBooleanVal(1),
            audit_prestataire: setBooleanVal(1),
            undersigned_name: 'Jelena Salbakokk',
            backup: setBooleanVal(1),
            backup_freq: 'weekly',
            company_name: 'Almanaca Tech',
            continuity_plan: setBooleanVal(1),
            present_turnover: 62000,
            start_date: '08/08/2022',
            emp_training: setBooleanVal(1),
            num_employees: 100,
            encryption: setBooleanVal(1),
            end_date: '08/08/2023',
            future_turnover: 68000,
            rto_gt_threshold: '',
            num_clients: 1200,
            passw_policy: setBooleanVal(1),
            patch: setBooleanVal(1),
            pci: setBooleanVal(1),
            pentest: setBooleanVal(1),
            min_rto: '',
            secu_prestataires: setBooleanVal(0),
            supplier_name: '',
            two_factor_auth: setBooleanVal(0),
            website: 'https:almanaca.com',

            signature_date: '12/12/2022',
            firewall: setBooleanVal(0),
            least_priv: setBooleanVal(0),
            rpo: setBooleanVal(0),
            solvency: 0,
            debt_coverage: 0,
            date: '12/12/2022',
            insurer: '',
            id: '',
          },
        ]);
      });
  };

  return (
    <Container>
      <h2>Upload one or more questionnaires</h2>
      <Alert
        type='info'
        message={
          <p style={{ margin: 0 }}>
            <strong>Important : </strong> You can upload upto 5 documents
          </p>
        }
        style={{ marginTop: 20, marginBottom: 20 }}
      />

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Questionnaire(s) : </Col>
        <Col span={10}>
          <Upload
            action={undefined}
            multiple={true}
            maxCount={5}
            accept='.pdf'
            listType='text'
            onChange={updloadHandler}
          >
            <Button icon={<UploadOutlined />} style={{ width: 200 }}>
              Questionnaire(s)
            </Button>
          </Upload>
        </Col>
      </Row>

      <Button
        type='primary'
        loading={loading}
        style={{ width: 200 }}
        onClick={submit}
      >
        Submit
      </Button>
    </Container>
  );
};
