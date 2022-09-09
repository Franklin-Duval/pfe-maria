import { Button, Space } from 'antd';
import { useState } from 'react';
import { FaSave, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { CompanyEntity } from '../../entities/company';
import { CompanyData } from './CompanyData';

export const ExtractedInfo = ({
  data,
  setPage,
}: {
  data: CompanyEntity[];
  setPage: (val: number) => void;
}) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const saveAllCompanyData = () => {
    setLoading(true);
    fetch('http://127.0.0.1:5000/<__route__>', {
      method: 'POST',
      body: JSON.stringify({ companies: data }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
        navigate('entreprise');
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <h2>Data from questionnaires</h2>
      {data.map((item, index) => (
        <CompanyData key={index} data={item} />
      ))}
      <Space>
        <Button
          icon={<FaTrash style={{ marginRight: 5 }} />}
          onClick={() => setPage(0)}
        >
          Discard
        </Button>
        <Button
          type='primary'
          loading={loading}
          icon={<FaSave style={{ marginRight: 5 }} />}
          onClick={saveAllCompanyData}
        >
          Save All
        </Button>
      </Space>
    </div>
  );
};
