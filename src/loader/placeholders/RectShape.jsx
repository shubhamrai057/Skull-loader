import * as React from 'react';
import { joinClassNames } from '../utils';

const RectShape = ({ className, style, color }) => {
  const defaultStyle = {
    backgroundColor: color,
    width: '100%',
    height: '100%',
  };

  return (
    <div
      className={joinClassNames('rect-shape', className)}
      style={{ ...defaultStyle, ...style }}
    />
  );
};

export default RectShape;
