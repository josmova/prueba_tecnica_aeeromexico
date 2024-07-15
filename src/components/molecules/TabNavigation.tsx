import React from 'react';
import { Container, TabButton, TabText } from '../../styles/molecules/TabNavigation.styles';

interface TabNavigationProps {
  activeTab: 'flightNumber' | 'destination';
  onTabPress: (tab: 'flightNumber' | 'destination') => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabPress }) => {
  return (
    <Container>
      <TabButton active={activeTab === 'flightNumber'} onPress={() => onTabPress('flightNumber')}>
        <TabText active={activeTab === 'flightNumber'}>Flight Number</TabText>
      </TabButton>
      <TabButton active={activeTab === 'destination'} onPress={() => onTabPress('destination')}>
        <TabText active={activeTab === 'destination'}>Destination</TabText>
      </TabButton>
    </Container>
  );
};

export default TabNavigation;
