import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const ArrowLeft = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5 12L4.64645 11.6464L4.29289 12L4.64645 12.3536L5 12ZM17 12.5C17.2761 12.5 17.5 12.2761 17.5 12C17.5 11.7239 17.2761 11.5 17 11.5V12.5ZM8.64645 7.64645L4.64645 11.6464L5.35355 12.3536L9.35355 8.35355L8.64645 7.64645ZM4.64645 12.3536L8.64645 16.3536L9.35355 15.6464L5.35355 11.6464L4.64645 12.3536ZM5 12.5H17V11.5H5V12.5Z"
      fill="#8E949A"
    />
  </Svg>
);
