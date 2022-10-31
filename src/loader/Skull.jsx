import React, { useEffect, useState, useRef } from 'react';
import * as placeholders from './placeholders';
import { joinClassNames } from './utils';

const Skull = ({
  delay = 0,
  type = 'text',
  color = '#CDCDCD',
  rows = 3,
  ready: readyProp,
  firstLaunchOnly,
  children,
  className,
  showLoadingAnimation,
  customPlaceholder,
  ...rest
}) => {
  const [ready, setReady] = useState(readyProp);
  const timeout = useRef(null);

  const getFiller = () => {
    const classes = showLoadingAnimation
      ? joinClassNames('show-loading-animation', className)
      : className;

    if (customPlaceholder && React.isValidElement(customPlaceholder)) {
      const mergedCustomClasses = joinClassNames(
        customPlaceholder?.props?.className,
        classes
      );
      return React.cloneElement(customPlaceholder, {
        className: mergedCustomClasses
      });
    } else if (customPlaceholder) {
      return customPlaceholder;
    }

    const Placeholder = placeholders[type];

    return (
      <Placeholder {...rest} color={color} rows={rows} className={classes} />
    );
  };

  useEffect(() => {
    if (!firstLaunchOnly && ready && !readyProp) {
      if (delay && delay > 0) {
        timeout.current = window.setTimeout(() => {
          setReady(false);
        }, delay);
      } else {
        setReady(false);
      }
    } else if (readyProp) {
      if (timeout.current) {
        window.clearTimeout(timeout.current);
      }

      if (!ready) {
        setReady(true);
      }
    }
  }, [firstLaunchOnly, ready, readyProp, delay]);

  useEffect(
    () => () => {
      if (timeout.current) {
        window.clearTimeout(timeout.current);
      }
    },
    []
  );
  return ready ? children : getFiller();
};

export default Skull;
