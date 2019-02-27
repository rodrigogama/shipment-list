import React from 'react';
import { formatDate, formatWeight } from '../../utils';
import {
  ShipmentContainer,
  ShipmentTitleContainer,
  FlexRow,
  FlexColumn,
  IconNameText,
  TextBold,
  TextRegular,
  ShipmentStopsContainer,
  StopWrapper,
  StopTitle,
  StarIcon,
  StopBadge,
  Map
} from './ShipmentDetailsStyles';
import IconComponent from '../Icon';
import icons from '../../icons';
import { ReactComponent as TruckSVG } from '../../icons/icon_truck_boxtruck.svg';

const getIcon = iconName => {
  const Icon = icons[iconName];
  return <IconComponent component={<Icon />} />;
};

const getIconName = iconName => iconName.replace(/_/g, ' ');

const ShipmentDetails = ({ shipment }) => {
  const {
    stops,
    map,
    equipmentType,
    equipmentSize,
    commodity,
    weight,
    shipperRatingScore
  } = shipment;
  const [pickup, delivery] = stops;
  return (
    <ShipmentContainer>
      <ShipmentTitleContainer>
        <TextBold>
          {`${pickup.city}, ${pickup.state} > ${delivery.city}, ${delivery.state}`}
        </TextBold>
      </ShipmentTitleContainer>

      <FlexRow>
        <ShipmentStopsContainer>
          {stops.map((stop, index) => (
            <StopWrapper key={`stop_wrapper${index}`}>
              <StopTitle>{index === 0 ? 'Pickup' : 'Delivery'}</StopTitle>
              <TextBold as="p" style={{ lineHeight: '1.8' }}>
                <StopBadge>{index + 1}</StopBadge>
                {`${stop.city}, ${stop.state} ${stop.zipcode}`}
              </TextBold>
              <FlexRow>
                <TextRegular>{`${formatDate(stop.windowStart)}`}</TextRegular>
                <TextRegular style={{ marginLeft: '12px' }}>
                  {`${formatDate(stop.windowStart, 'HH:00')} - ${formatDate(
                    stop.windowEnd,
                    'HH:00'
                  )}`}
                </TextRegular>
              </FlexRow>
              <FlexRow style={{ padding: '12px 0' }}>
                {stop.accessorials.map((e, i) => {
                  return (
                    <FlexColumn key={`icon_${e}`}>
                      {getIcon(e)}
                      <IconNameText>{getIconName(e)}</IconNameText>
                    </FlexColumn>
                  );
                })}
              </FlexRow>
            </StopWrapper>
          ))}
        </ShipmentStopsContainer>

        <figure>
          <Map src={map} alt="Map" />
        </figure>
      </FlexRow>

      <FlexRow style={{ flex: 1, alignItems: 'flex-start', padding: '16px 0' }}>
        <FlexRow style={{ alignItems: 'center' }}>
          <IconComponent component={<TruckSVG />} />
          {`${equipmentType} ${equipmentSize}"`}
        </FlexRow>
        <FlexColumn style={{ flex: 1 }}>
          <StopTitle>commodity</StopTitle>
          <TextBold as="p" style={{ fontSize: '13px' }}>
            {commodity}
          </TextBold>
        </FlexColumn>
        <FlexColumn style={{ flex: 1 }}>
          <StopTitle>weight</StopTitle>
          <TextBold as="p" style={{ fontSize: '13px' }}>
            {`${formatWeight(weight)}`}
          </TextBold>
        </FlexColumn>
        <FlexColumn style={{ flex: 1 }}>
          <StopTitle>shipper rating</StopTitle>
          <FlexRow style={{ alignItems: 'center' }}>
            <TextBold
              as="p"
              style={{ fontSize: '13px', color: '#FFCC1D', padding: '1.5px 4px 0 0px' }}
            >
              {shipperRatingScore}
            </TextBold>
            {Array.from({ length: 5 }, (v, k) => (
              <IconComponent
                key={`star_${k}`}
                component={<StarIcon isActive={k < parseInt(shipperRatingScore, 10)} />}
              />
            ))}
          </FlexRow>
        </FlexColumn>
      </FlexRow>
    </ShipmentContainer>
  );
};

export default ShipmentDetails;
