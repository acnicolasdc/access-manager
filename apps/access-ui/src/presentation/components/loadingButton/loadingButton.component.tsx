import Button, { ButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export interface ILoadingButtonProps extends ButtonProps {
  loading?: boolean;
  loadingIndicator?: string;
}

export function LoadingButton({
  children,
  loading,
  loadingIndicator = '',
  disabled,
  ...restProps
}: ILoadingButtonProps) {
  return (
    <Button variant="contained" {...restProps} disabled={disabled || loading}>
      {loading ? (
        <>
          {`${loadingIndicator}`}
          <CircularProgress
            size={16}
            color="inherit"
            sx={{ marginLeft: loadingIndicator ? '8px' : 0 }}
          />
        </>
      ) : (
        children
      )}
    </Button>
  );
}
