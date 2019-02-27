import styled from 'styled-components';
import { ReactComponent as StarSVG } from '../../icons/icon_star.svg';

export const ShipmentContainer = styled.div`
  flex: 1;
  padding-left: 60px;
  display: flex;
  flex-direction: column;
`;

export const ShipmentTitleContainer = styled.div`
  position: relative;
  min-height: 130px;
  padding: 16px;
  padding-bottom: 0;
  display: flex;
  align-items: center;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 1.5px;
    background: #e8e8e8;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  align-items: center;
`;

export const IconNameText = styled.p`
  text-transform: capitalize;
  font-size: 12px;
  font-weight: 500;
  color: #757679;
`;

export const TextBold = styled.h1`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #58585b;
  position: relative;
`;

export const StopBadge = styled.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #58585b;
  position: absolute;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20%;
  left: -20px;
`;

export const TextRegular = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const StopTitle = styled(TextRegular)`
  text-transform: uppercase;
  font-size: 12px;
`;

export const ShipmentStopsContainer = styled(ShipmentTitleContainer)`
  min-height: auto;
  padding: 16px;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
`;

export const StopWrapper = styled.div`
  flex: 1;
  position: relative;

  &:first-child {
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      height: 1.5px;
      background: #e8e8e8;
    }
  }

  &:last-child {
    margin-top: 12px;
  }
`;

export const Map = styled.img`
  width: 300px;
  height: 100%;
`;

export const StarIcon = styled(StarSVG)`
  width: 15px;
  height: 15px;
  margin-right: 2px;

  ${({ isActive }) =>
    isActive &&
    `
    & polygon {
      fill: #ffcc1d;
    }
  `}
`;
