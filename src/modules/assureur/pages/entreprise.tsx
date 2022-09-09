import styled from '@emotion/styled';
import { CompanyEntity } from '../../entities/company';
import { DateFrHrWithTime } from '../../shared/DateToFrench';
import { Drawer } from '../../shared/SidebarContainer';
import { DataTable } from '../../shared/Table';

const Container = styled.div`
  padding-bottom: 20px;
`;

export const Entreprises = () => {
  // const router = useNavigate();

  const columns = [
    {
      title: 'Company',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: DateFrHrWithTime,
    },
  ];

  return (
    <Drawer>
      <Container>
        <h1>List of companies whose information have been extracted</h1>

        <DataTable<CompanyEntity>
          columns={columns}
          data={
            [
              {
                id: '1',
                name: 'Aloko Tech',
                address: 'Bastos',
                date: '2022-06-28T18:10:18.113849Z',
              },
              {
                id: '2',
                name: 'Yerima Tech',
                address: 'Omnisport',
                date: '2022-01-02T16:13:18.113849Z',
              },
              {
                id: '3',
                name: 'SmartDs',
                address: 'Omnisport',
                date: '2022-07-08T08:40:18.113849Z',
              },
            ] as any
          }
          // buttons={
          //   <Button
          //     type='primary'
          //     onClick={() => router(ROUTES.ASSUREUR.NEW_COMPANY)}
          //   >
          //     Begin extraction
          //   </Button>
          // }
          filterFunction={(comp: CompanyEntity, filterValue: string) =>
            comp.company_name.toLowerCase().includes(filterValue.toLowerCase())
          }
        />
      </Container>
    </Drawer>
  );
};
