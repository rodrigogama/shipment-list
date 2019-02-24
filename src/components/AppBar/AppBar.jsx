import React from 'react';
import {
  AppBarContainer,
  AppBarMenu,
  AppBarMenuItem,
  LoadsmartIcon,
  PhoneIcon,
  LoadsmartLink,
  AppBarMenuItemPhone
} from './AppBarStyles';

const AppBar = props => (
  <AppBarContainer>
    <LoadsmartLink>
      <LoadsmartIcon />
    </LoadsmartLink>
    <AppBarMenu>
      <AppBarMenuItemPhone>
        <PhoneIcon />
        (646) 887 6278
      </AppBarMenuItemPhone>
      <AppBarMenuItem>shipper</AppBarMenuItem>
      <AppBarMenuItem>become a carrier</AppBarMenuItem>
      <AppBarMenuItem>login</AppBarMenuItem>
      <AppBarMenuItem>sign up</AppBarMenuItem>
    </AppBarMenu>
  </AppBarContainer>
);

export default AppBar;
