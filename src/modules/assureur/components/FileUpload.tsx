import { UploadOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Button, Col, Row, Upload } from 'antd';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { CompanyEntity } from '../../entities/company';

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

export const FileUpload = ({
  getData,
  setPage,
}: {
  getData: (val: CompanyEntity) => void;
  setPage: (val: number) => void;
}) => {
  const [extract, setextract] = useState<any>();
  const [policy, setpolicy] = useState<any>();
  const [balance, setbalance] = useState<any>();
  const [loading, setLoading] = useState(false);

  const extractHandler = (e: any) => {
    setextract(e.file.originFileObj);
  };
  const policyHandler = (e: any) => {
    setpolicy(e.file.originFileObj);
  };
  const balanceHandler = (e: any) => {
    setbalance(e.file.originFileObj);
  };
  const submit = () => {
    setLoading(true);
    console.log(extract);
    console.log(policy);
    console.log(balance);
    let formdata = new FormData();

    formdata.append('file1', extract);
    formdata.append('file2', policy);
    formdata.append('file3', balance);

    const setBooleanVal = (val: number) => (val === 1 ? true : false);

    fetch('http://127.0.0.1:5000/uploader', {
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
        setPage(1);
        setLoading(false);
        getData({
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
        });
      });
  };

  return (
    <Container>
      <h2>Upload the following files</h2>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Company Extract : </Col>
        <Col span={10}>
          <Upload listType='text' onChange={extractHandler}>
            <Button icon={<UploadOutlined />} style={{ width: 200 }}>
              Company Extract
            </Button>
          </Upload>
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Security policy : </Col>
        <Col span={10}>
          <Upload listType='text' onChange={policyHandler}>
            <Button icon={<UploadOutlined />} style={{ width: 200 }}>
              Security policy
            </Button>
          </Upload>
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Business balance sheet : </Col>
        <Col span={10}>
          <Upload listType='text' onChange={balanceHandler}>
            <Button icon={<UploadOutlined />} style={{ width: 200 }}>
              Business balance sheet
            </Button>
          </Upload>
        </Col>
      </Row>

      {/* <Row style={{ marginBottom: 30 }}>
        <Col span={10}>Income statement : </Col>
        <Col span={10}>
          <Upload
            name='dincome'
            listType='text'
            onChange={(e) => {
              console.log(e.file);
            }}
          >
            <Button icon={<UploadOutlined />} style={{ width: 200 }}>
              Income statement
            </Button>
          </Upload>
        </Col>
      </Row> */}

      <Button
        type='primary'
        loading={loading}
        style={{ width: 200 }}
        onClick={submit}
      >
        Next <FaArrowRight style={{ marginLeft: 5, marginBottom: -2 }} />
      </Button>
    </Container>
  );
};
