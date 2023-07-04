import { DEFAULT_ID_PANEL_TAB, DEFAULT_ID_TAB } from './tabPanel.constants';

export const a11yProps = (index: number, prefix: string) => {
  return {
    id: `${prefix}-${DEFAULT_ID_TAB}-${index}`,
    'aria-controls': `${prefix}-${DEFAULT_ID_PANEL_TAB}-${index}`,
  };
};
