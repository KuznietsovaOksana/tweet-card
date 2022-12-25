import { createGlobalStyle } from 'styled-components';

import MontserratMediumWoff from './../fonts/Montserrat-Medium.woff';
import MontserratMediumWoff2 from './../fonts/Montserrat-Medium.woff2';
import MontserratSemiBoldWoff from './../fonts/Montserrat-SemiBold.woff';
import MontserratSemiBoldWoff2 from './../fonts/Montserrat-SemiBold.woff2';

export const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Montserrat';
  src: url(${MontserratMediumWoff2}) format('woff2'),
       url(${MontserratMediumWoff}) format('woff');
	font-display: swap;
	font-weight: 500;
	font-style: normal;
}

@font-face {
  font-family: 'Montserrat';
  src: url(${MontserratSemiBoldWoff2}) format('woff2'),
       url(${MontserratSemiBoldWoff}) format('woff');
	font-display: swap;
	font-weight: 600;
	font-style: normal;
}
`;
