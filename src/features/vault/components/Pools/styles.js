const styles = theme => ({
  container: {
    paddingTop: '4px',
  },
  infoContainer: {
    padding: '24px',
    borderRadius: '12px',
    background: theme.palette.background.paused,
    marginBottom: '2rem',
    fontWeight: 900,
    color: theme.palette.text.primary,
  },
  tvl: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  totalTvl: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '64px',
  },
  deposited: {
    fontFamily: theme.fonts.highlight,
    fontSize: '32px',
  },
  title: {
    fontSize: '24px',
    letterSpacing: '0',
    lineHeight: '32px',
    fontWeight: '550',
    color: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
  },
  titleLoader: {
    marginLeft: '12px',
  },
  subtitle: {
    letterSpacing: '0',
    lineHeight: '8px',
    [theme.breakpoints.down('xs')]: {
      lineHeight: '16px',
    },
    color: theme.palette.text.primary,
    marginTop: '0',
  },
  text: {
    fontSize: '24px',
    letterSpacing: '0',
    lineHeight: '32px',
    fontWeight: '550',
    color: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
  },
  infinityIcon: {
    marginBottom: '-6px',
    paddingRight: '5px',
  },
});

export default styles;
