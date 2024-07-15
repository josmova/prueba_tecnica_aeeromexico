import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {
   CardContainer,
   CardHeader,
   CardContainerSimpleFlightHeader,
   StatusContainer,
   StatusText,
   InfoContainerDetails,
   TimeTextDetails,
   AirportTextDetails,
   IconContainerDetails,
   LineDetails,
   CardBody,
   DurationContainerDetails,
} from '../../styles/molecules/DetailedFlightInfoCard.styles';
import SimpleFlightHeader from "../molecules/SimpleFlightHeader";

interface DetailedFlightInfoCardProps {
   status: string;
   departureTime: string;
   arrivalTime: string;
   departureAirport: string;
   arrivalAirport: string;
   duration: string;
   flightNumber: string;
   date: string;
   onBackPress: () => void;
}

const DetailedFlightInfoCard: React.FC<DetailedFlightInfoCardProps> = ({
   status,
   departureTime,
   arrivalTime,
   departureAirport,
   arrivalAirport,
   flightNumber,
   date,
   onBackPress,
}) => {
   return (
      <>
         <CardHeader>
            <CardContainerSimpleFlightHeader>
               <SimpleFlightHeader
                  flightNumber={flightNumber}
                  date={date}
                  onBackPress={onBackPress}
               />
            </CardContainerSimpleFlightHeader>
            <StatusContainer>
               <StatusText>{status}</StatusText>
            </StatusContainer>
         </CardHeader>
         <CardContainer>
            <CardBody>
               <InfoContainerDetails>
                  <TimeTextDetails>{departureTime}</TimeTextDetails>
                  <IconContainerDetails>
                     <FontAwesome name="plane" size={20} color="black" />
                     <LineDetails />
                  </IconContainerDetails>
                  <TimeTextDetails>{arrivalTime}</TimeTextDetails>
               </InfoContainerDetails>
               <DurationContainerDetails>
                  <AirportTextDetails>{departureAirport}</AirportTextDetails>
                  <AirportTextDetails>{arrivalAirport}</AirportTextDetails>
               </DurationContainerDetails>
            </CardBody>
         </CardContainer>
      </>

   );
};

export default DetailedFlightInfoCard;
