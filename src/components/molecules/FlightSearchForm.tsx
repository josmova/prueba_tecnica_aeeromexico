import React from 'react';
import { Container } from '../../styles/molecules/FlightSearchForm.styles';
import TextInput from '../atoms/TextInput';
import DateInput from '../atoms/DateInput';
import { TextStyle } from 'react-native';  

interface FlightSearchFormProps {
  flightNumber: string;
  setFlightNumber: (value: string) => void;
  date: string;
  setDate: (value: string) => void;
}

const FlightSearchForm: React.FC<FlightSearchFormProps> = ({
  flightNumber,
  setFlightNumber,
  date,
  setDate,
}) => {
  const inputContainerStyle = { border: '1px solid black', padding: 15, borderRadius: 10, marginBottom: 20 };
  const inputTextStyle = { fontSize: 18, fontWeight: 'bold' as TextStyle['fontWeight'] };

  return (
    <Container>
      <TextInput 
        placeholder="Flight number" 
        value={flightNumber} 
        onChangeText={setFlightNumber}
        containerStyle={inputContainerStyle}
        inputStyle={inputTextStyle}
      />
      <DateInput 
        placeholder="Date of departure" 
        value={date} 
        onChangeText={setDate}
        containerStyle={inputContainerStyle}
        inputStyle={inputTextStyle}
      />
    </Container>
  );
};

export default FlightSearchForm;
