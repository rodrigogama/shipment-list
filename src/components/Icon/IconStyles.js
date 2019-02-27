import React from 'react';
import styled from 'styled-components';

export default styled(({ component, ...props }) => React.cloneElement(component, props))`
  width: 35px;
  height: 35px;
  fill: #58585b;
`;
