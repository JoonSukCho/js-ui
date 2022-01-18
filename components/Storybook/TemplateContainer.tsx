import React from 'react';
import styled from 'styled-components';

interface TemplateContainerProps {
  children: React.ReactNode;
}

const TemplateContainer = ({ children }: TemplateContainerProps) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  background-color: white;
  width: 50%;
  height: 100vh;
`;

export default TemplateContainer;
