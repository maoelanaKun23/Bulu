import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Bio from 'components/Bio';
import Pesanan from 'components/Banner';
import Rekening from 'components/Rekening';
import Tracking from 'components/Tracking';
import Alamat from 'components/Alamat';

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)(
  ({ theme }) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: #F8F8F8;
  
  
  
  `,
);

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
  min-width: 400px;
  background-color: ${blue[500]};
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);

const TabsDiri = () => {
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>Biodata Diri</Tab>
        <Tab>Daftar Alamat</Tab>
        <Tab>Daftar Pesanan</Tab>
        <Tab>Lacak Pesanan</Tab>
        <Tab>Rekening Bank</Tab>
      </TabsList>
      <TabPanel value={0}><Bio/></TabPanel>
      <TabPanel value={1}><Alamat/></TabPanel>
      <TabPanel value={2}><Pesanan/></TabPanel>
      <TabPanel value={3}> <Tracking/></TabPanel>
      <TabPanel value={4}><Rekening/></TabPanel>
    </TabsUnstyled>
  );
}

export default TabsDiri;