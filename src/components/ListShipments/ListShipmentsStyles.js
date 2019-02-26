import styled from 'styled-components';
import { ReactComponent as TruckSVG } from '../../icons/icon_truck_boxtruck.svg';

export const ShipmentListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 45%;
  margin-bottom: 8px;
  background: ${({ theme }) => theme.colors.lightGray};

  &:before {
    content: '';
    position: absolute;
    background: #e8e8e8;
    top: 0;
    bottom: 0;
    right: 0;
    width: 1.5px;
  }
`;

export const ShipmentListItem = styled.li`
  position: relative;
  min-height: 130px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: ${({ theme }) => theme.transition.duration};
  transition-timing-function: ${({ theme }) => theme.transition.timingFn};

  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.colors.white}
    border: 1.5px solid #e8e8e8;
    border-right: 0px;
  `}
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

export const StopsContainer = styled(FlexRow)`
  flex: 1;
  width: 85%;
  align-items: unset;
  justify-content: space-between;
`;

export const StopWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  &:first-of-type {
    margin-right: 12px;
    position: relative;

    &:after {
      content: '>';
      right: 10px;
      top: 6px;
      color: ${({ theme }) => theme.colors.darkGray};
      position: absolute;
    }
  }
`;

export const TextBold = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #58585b;
`;

export const TextRegular = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const PriceText = styled(TextBold)`
  flex: 1;
  font-size: 18px;
  padding-left: 12px;
  text-align: right;
`;

export const TitleText = styled(TextRegular)`
  font-size: 13px;
`;

export const TruckIcon = styled(TruckSVG)`
  width: 40px;
  height: 40px;
  margin-right: 12px;
  fill: #58585b;
`;
