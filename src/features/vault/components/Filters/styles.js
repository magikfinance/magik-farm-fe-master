const styles = theme => ({
  container: {
    padding: '24px',
    margin: '8px 0 2rem',
    backgroundColor: 'rgba(35, 38, 69, 0.71)',
    justifyContent: 'space-between',
    position: 'relative',
    boxShadow: theme.shadow.card,
    borderRadius: '12px',
    alignItems: 'center',
  },

  selectorContainer: {
    width: '100%',
  },

  poolCount: {
    order: '-2',
    '& h2': {
      margin: '8px 0',
      fontSize: '54px',
      fontFamily: theme.fonts.highlight,
      color: 'white',
    },
  },

  selectorLabel: {
    color: theme.palette.text.secondary,
    marginBottom: '10px',
  },

  selector: {
    minHeight: '46px',
    padding: '4px 12px',
    margin: '26px 0 0 !important',
    border: 'solid 1px white',
    borderRadius: '28px',
    '&::before, &:hover::before, &:active::before, &::after': {
      borderBottom: 'none !important',
    },
    '& svg, & div': {
      right: '10px',
      paddingBottom: '6px',
    },
  },

  listBox: {
    backgroundColor: 'white',
  },

  label: {
    color: theme.palette.text.primary,
    '& .MuiTypography-root': {
      fontSize: '14px',
    },
  },
  boost: {
    color: '#5a8f69',
    fontWeight: 'bold',
    '& .MuiAvatar-root': {
      position: 'absolute',
      top: 0,
      right: '-20px',
    },
  },
  reset: {
    padding: '10px 14px',
    backgroundColor: 'white',
    '& .MuiButton-label': {
      textTransform: 'capitalize',
      color: theme.palette.background.default,
      fontFamily: theme.fonts.highlight,
      fontSize: '20px',
      lineHeight: '1.2',
    },
  },
  resetItem: {
    [theme.breakpoints.down('md')]: {
      order: '-1',
    },
  },
});

export default styles;
