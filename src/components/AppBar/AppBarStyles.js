import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as LoadsmartSVG } from '../../icons/loadsmart-logo.svg';

export const AppBarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.bluishGray};
`;

export const AppBarMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  height: 100%;
`;

export const AppBarMenuItem = styled.li`
  font-size: 13px;
  padding: 16px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    box-shadow: inset 0 0 0 2em #46525d;
  }
`;

export const AppBarMenuItemPhone = styled(AppBarMenuItem)`
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.green};
  font-weight: 500;
`;

export const PhoneIcon = styled(FontAwesomeIcon).attrs({
  icon: 'phone'
})`
  font-size: 10px;
  transform: rotate(100deg);
  margin-right: 2px;
  color: ${({ theme }) => theme.colors.green};
`;

export const LoadsmartLink = styled.a.attrs({
  href: 'https://loadsmart.com'
})`
  padding: 10px 16px;
`;

export const LoadsmartIcon = styled(LoadsmartSVG)`
  fill: ${({ theme }) => theme.colors.green};
`;
