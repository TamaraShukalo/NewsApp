import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const Add = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M12 6L12 18" stroke="#8E949A" strokeLinecap="round" />
    <Path d="M18 12L6 12" stroke="#8E949A" strokeLinecap="round" />
  </Svg>
);
