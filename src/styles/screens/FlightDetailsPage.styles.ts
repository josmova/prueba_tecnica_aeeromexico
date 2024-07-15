import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const CardHeader = styled.View`
  z-index: -10;
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const CardWrapperBody = styled.View`
  z-index: 10;
  bottom: 20px;
  width: 100%;
  height: 100vh;
  flex: 2;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color:  #fff;
`;

export const CardWrapper = styled.View`
  min-height: 60%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;
