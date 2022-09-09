import { Button, Space } from 'antd';
import { FaSave, FaTrash } from 'react-icons/fa';
import { CompanyEntity } from '../../entities/company';
import { CompanyData } from './CompanyData';

export const ExtractedInfo = ({
  data,
  setPage,
}: {
  data: CompanyEntity[];
  setPage: (val: number) => void;
}) => {
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
        <Button type='primary' icon={<FaSave style={{ marginRight: 5 }} />}>
          Save All
        </Button>
      </Space>
    </div>
  );
};
