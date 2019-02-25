import styled from 'styled-components';
import { ReactComponent as TruckSVG } from '../../icons/icon_truck_boxtruck.svg';

export const ShipmentListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-bottom: 8px;
  border-right: 1px solid #e8e8e8;
  background: ${({ theme }) => theme.colors.lightGray};
`;

export const ShipmentListItem = styled.li`
  position: relative;
  min-height: 130px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.colors.white}
  `} /* &:last-child:after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 16px;
    right: 16px;
    height: 1px;
    background: #e8e8e8;
  } */
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
`;

export const TextBold = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #58585b;
`;

export const PriceText = styled(TextBold)`
  flex: 1;
  font-size: 18px;
  padding-left: 12px;
  text-align: right;
`;

export const TitleText = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const BodyItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TruckIcon = styled(TruckSVG)`
  width: 42px;
  height: 42px;
  margin-right: 12px;
  fill: #58585b;
`;
