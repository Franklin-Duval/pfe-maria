import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import styled from '@emotion/styled';
import { Button, Layout, Menu, Modal } from 'antd';
import React, { ReactNode, useState } from 'react';
import { BsFillFilePdfFill, BsFillPersonFill } from 'react-icons/bs';
import { FaBuilding } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes';
const { Header, Sider, Content } = Layout;

const ContainerIcon = styled.div`
  div {
    width: 150px;
    height: 150px;
    border: 2px solid white;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }

  h2 {
    text-align: center;
    color: white;
  }
`;
export const Drawer = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useNavigate();

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const gotoQuestionnaire = () => {
    router(ROUTES.ASSUREUR.NEW_FORM);
  };
  const gotoOtherDocs = () => {
    router(ROUTES.ASSUREUR.NEW_COMPANY);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Layout style={{ height: '100vh', backgroundColor: 'white' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className='logo' />
        {!collapsed ? (
          <ContainerIcon>
            <div>
              <UserOutlined style={{ fontSize: 100, color: 'white' }} />
            </div>
            <h2>RISK MANAGEMENT</h2>
          </ContainerIcon>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', margin: 5 }}>
            <UserOutlined style={{ fontSize: 30, color: 'white' }} />
          </div>
        )}

        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '2',
              icon: <BsFillPersonFill />,
              label: 'Profile',
              onClick: () => router(ROUTES.ASSUREUR.ENTREPRISE),
            },
            {
              key: '3',
              icon: <BsFillFilePdfFill />,
              label: 'New Extraction',
              onClick: () => showModal(),
            },
            {
              key: '1',
              icon: <FaBuilding />,
              label: 'List of Companies',
              onClick: () => router(ROUTES.ASSUREUR.ENTREPRISE),
            },
            {
              key: '5',
              icon: <LogoutOutlined />,
              label: 'Logout',
              onClick: () => router(ROUTES.LOGIN),
            },
          ]}
        />
      </Sider>
      <Modal
        visible={visible}
        title='Extraction options'
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key='back' onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key='submit'
            type='primary'
            loading={loading}
            onClick={gotoQuestionnaire}
          >
            From questionnaire
          </Button>,
          <Button
            key='link'
            // href='https://google.com'
            type='primary'
            loading={loading}
            onClick={gotoOtherDocs}
          >
            From other documents
          </Button>,
        ]}
      >
        <p></p>
        <p>Which option do you prefer?</p>
        {/* <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p> */}
      </Modal>
      <Layout
        style={{ backgroundColor: 'white', marginLeft: collapsed ? 60 : 200 }}
      >
        <Header
          style={{
            padding: 0,
            position: 'fixed',
            zIndex: 1,
            width: '100%',
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              style: { color: 'white', fontSize: 30, margin: 10 },
              onClick: () => setCollapsed(!collapsed),
            },
          )}
        </Header>
        <Content
          style={{
            margin: '64px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
