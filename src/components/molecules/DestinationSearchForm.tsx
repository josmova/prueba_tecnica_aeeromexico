import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { Container, InputRow, InputContainer, FullWidthInputContainer } from '../../styles/molecules/DestinationSearchForm.styles';
import TextInput from '../atoms/TextInput';
import DateInput from '../atoms/DateInput';

interface DestinationSearchFormProps {
  origin: string;
  setOrigin: (value: string) => void;
  destination: string;
  setDestination: (value: string) => void;
  date: string;
  setDate: (value: string) => void;
}

const DestinationSearchForm: React.FC<DestinationSearchFormProps> = ({
  origin,
  setOrigin,
  destination,
  setDestination,
  date,
  setDate,
}) => {
  const inputContainerStyle: ViewStyle = { borderWidth: 1, borderColor: 'black', padding: 10, borderRadius: 10, marginBottom: 20 };
  const inputTextStyle: TextStyle = { fontSize: 18, fontWeight: 'bold' };

  return (
    <Container>
      <InputRow>
        <InputContainer>
          <TextInput 
            placeholder="Origin" 
            value={origin} 
            onChangeText={setOrigin}
            containerStyle={{ ...inputContainerStyle, width: '100%' }}
            inputStyle={inputTextStyle}
          />
        </InputContainer>
        <InputContainer>
          <TextInput 
            placeholder="Destination" 
            value={destination} 
            onChangeText={setDestination}
            containerStyle={{ ...inputContainerStyle, width: '100%' }}
            inputStyle={inputTextStyle}
          />
        </InputContainer>
      </InputRow>
      <FullWidthInputContainer>
        <DateInput 
          placeholder="Date of departure" 
          value={date} 
          onChangeText={setDate}
          containerStyle={{ ...inputContainerStyle, width: '100%' }}
          inputStyle={inputTextStyle}
        />
      </FullWidthInputContainer>
    </Container>
  );
};

export default DestinationSearchForm;
