import styled from 'styled-components';

export default styled.div`
  font-size: 50px;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 30px;
    color: red;
  }
`;
