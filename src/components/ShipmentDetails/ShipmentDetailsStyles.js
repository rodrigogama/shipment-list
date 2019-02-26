import styled from 'styled-components';

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

export const TextBold = styled.h1`
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
`;

export const Map = styled.img`
  width: 250px;
  height: 280px;
`;
