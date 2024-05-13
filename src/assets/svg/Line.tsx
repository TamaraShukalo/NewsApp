import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const Line = (props: SvgProps) => (
  <Svg width={41} height={6} viewBox="0 0 41 6" fill="none" {...props}>
    <Path
      opacity={0.3}
      d="M2.99994 3H37.9999"
      stroke="#8E949A"
      strokeWidth={5}
      strokeLinecap="round"
    />
  </Svg>
);
