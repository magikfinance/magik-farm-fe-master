import { primaryColor } from 'assets/jss/material-kit-pro-react.js';

const styles = theme => ({
  noWalletButtonCon: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  noWalletButton: {
    margin: '20px 0',
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '5px',
    backgroundColor: primaryColor[0],
    '& .MuiButton-label': {
      color: 'white',
    },
  },
  container: {
    position: 'relative',
    backgroundColor: '#6f42c1', //theme.palette.background.extra,
    'backdrop-filter': 'blur(300px)',
    padding: '56px',
    border: '1px solid ' + theme.palette.background.border,
  },
  heading: {
    color: '#6f42c1',
  },
  summary: {
    paddingTop: '24px',
    paddingBottom: '24px',
  },
  statusIcon: {
    marginRight: '.5rem',
  },
  status: {
    padding: '24px',
    marginBottom: '8px',
    background: pool =>
      pool.status === 'eol'
        ? theme.palette.background.retired
        : pool.depositsPaused
        ? theme.palette.background.paused
        : theme.palette.background.primary,
  },
  description: {
    padding: '12px',
  },
  item: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    [theme.breakpoints.up('sm')]: {
      flexBasis: '25%',
      maxWidth: '50%',
    },
    [theme.breakpoints.up('md')]: {
      flexBasis: '37%',
      maxWidth: '37%',
    },
    [theme.breakpoints.up('lg')]: {
      flexBasis: '30%',
      maxWidth: '30%',
    },
  },
  itemBalances: {
    [theme.breakpoints.up('sm')]: {
      flexBasis: '25%',
      maxWidth: '25%',
    },
    [theme.breakpoints.up('md')]: {
      flexBasis: '15%',
      maxWidth: '15%',
    },
    [theme.breakpoints.up('lg')]: {
      flexBasis: '18%',
      maxWidth: '18%',
    },
  },
  itemStats: {
    [theme.breakpoints.up('md')]: {
      flexBasis: '50%',
      maxWidth: '11%',
    },
    [theme.breakpoints.up('lg')]: {
      flexBasis: '11.33%',
      maxWidth: '11.33%',
    },
  },
  itemInner: {
    textAlign: 'center',
  },
  error: {
    color: 'red',
  },
  loading: {
    color: theme.palette.primary.main,
  },
});

export default styles;
