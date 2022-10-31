import * as React from 'react';
import { joinClassNames } from '../utils';

const TextRow = ({
  className,
  maxHeight,
  color,
  lineSpacing= '0.7em',
  style
}) => {
  const defaultStyles = {
    maxHeight,
    width: '100%',
    height: '1em',
    backgroundColor: color,
    marginTop: lineSpacing
  };

  return (
    <div
      className={joinClassNames('text-row', className)}
      style={{ ...defaultStyles, ...style }}
    />
  );
};

export default TextRow;
