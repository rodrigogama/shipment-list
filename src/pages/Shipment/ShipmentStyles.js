import styled from 'styled-components';

export const Page = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
`;

export const PageContent = styled.div`
  height: 80vh;
  padding: 0 80px;
  display: flex;
  background: ${({ theme }) => theme.colors.white};
`;
