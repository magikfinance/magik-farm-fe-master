const styles = theme => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  disclaimer: {
    padding: '32px 32px 32px 42px',
    borderRadius: '12px',
    background: theme.palette.background.paused,
    marginBottom: '2rem',
    fontWeight: 900,
    color: theme.palette.text.primary,
    fontFamily: 'Open Sans',
  },
});

export default styles;
