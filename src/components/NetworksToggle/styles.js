import { successColor } from 'assets/jss/material-kit-pro-react.js';

const styles = theme => ({
  container: {
    minWidth: '240px',
    display: 'inline-flex',
    borderRadius: '35px',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: theme.palette.background.border,
      cursor: 'pointer',
    },
    border: '1px solid white',
    padding: '0 16px 0 0',
    alignItems: 'center',
  },
  logo: {
    height: '52px',
    padding: '6px',
  },
  connected: {
    width: '10px',
    height: '10px',
    backgroundColor: successColor[1],
    borderRadius: '50%',
  },
  tag: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '16px',
  },
  networkName: {
    margin: '0 0 0 8px',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
});

export default styles;
