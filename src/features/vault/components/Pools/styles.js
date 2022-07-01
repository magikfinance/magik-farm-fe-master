const styles = theme => ({
  container: {
    paddingTop: '4px',
  },
  infoContainer: {
    padding: '24px',
    boxShadow: theme.shadow.card,
    borderRadius: '12px',
    background: theme.palette.background.paused,
    backdropFilter: 'blur(10px)',
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
    fontWeight: 'initial'
  },
  deposited: {
    fontFamily: theme.fonts.highlight,
    fontSize: '32px',
    fontWeight: 'initial'
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
    lineHeight: '1.5',
    textAlign: 'end',
    [theme.breakpoints.down('xs')]: {
      lineHeight: '16px',
    },
    color: theme.palette.text.primary,
    marginTop: '0',
    fontWeight: 600,
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
