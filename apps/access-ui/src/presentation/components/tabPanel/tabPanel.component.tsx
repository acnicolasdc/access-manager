import { DEFAULT_ID_PANEL_TAB, DEFAULT_ID_TAB } from './tabPanel.constants';

export interface ITabPanelProps {
  children: JSX.Element;
  index: number;
  prefix: string;
  value: number;
}

export const TabPanel = ({
  children,
  value,
  index,
  prefix,
  ...restProps
}: ITabPanelProps) => {
  return (
    <div
      role="tabpanel"
      id={`${prefix}-${DEFAULT_ID_PANEL_TAB}-${index}`}
      aria-labelledby={`${prefix}-${DEFAULT_ID_TAB}-${index}`}
      hidden={value !== index}
      {...restProps}
    >
      {children}
    </div>
  );
};
