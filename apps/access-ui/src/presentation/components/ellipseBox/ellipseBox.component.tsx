import React, {
  cloneElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

export interface IEllipseBoxProps {
  children: JSX.Element;
  tooltipLabel: string;
  maxWidth?: number;
}

export const EllipseBox = ({
  children,
  tooltipLabel,
  maxWidth = 170,
}: IEllipseBoxProps) => {
  const childrenRef = useRef<HTMLElement | null>(null);
  const [displayTooltip, setDisplayTooltip] = useState<boolean>(false);
  const onResize = useCallback(() => {
    if (childrenRef.current) {
      if (
        childrenRef.current.clientWidth < childrenRef.current.scrollWidth &&
        !displayTooltip
      ) {
        return setDisplayTooltip(true);
      }
      if (displayTooltip) return setDisplayTooltip(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (childrenRef.current) {
      childrenRef.current.addEventListener('resize', onResize);
      onResize();
    }
    return () => {
      childrenRef?.current?.removeEventListener('resize', onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [childrenRef.current]);
  return (
    <Tooltip title={displayTooltip ? tooltipLabel : ''} arrow>
      <Box
        component="div"
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: `${maxWidth}px`,
        }}
      >
        {cloneElement(children, {
          ref: (ref: HTMLElement) => (childrenRef.current = ref),
        })}
      </Box>
    </Tooltip>
  );
};
