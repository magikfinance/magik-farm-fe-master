const styles = theme => ({
  details: {
    display: 'flex',
    alignItems: 'center',
    background: 'transparent',
  },
  detailsPaused: {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(0,0,0,0.1)',
  },
  detailsRetired: {
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.background.retired,
  },
  mobilePadding: {
    paddingTop: '20px',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 0,
    },
  },
  item: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoItem: {
    marginTop: '24px',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    fontFamily: theme.fonts.highlight,
    [theme.breakpoints.up('sm')]: {
      flexBasis: '50%',
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
      flexBasis: '11%',
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
});

export default styles;
