import React, { useEffect } from 'react';
import styled from 'styled-components';

export interface ModalFooterProps {
  children: React.ReactNode;
}

const ModalFooter = ({ children }: ModalFooterProps) => {
  return <FooterContainer>{children}</FooterContainer>;
};

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding: 8px;
`;

export default ModalFooter;
