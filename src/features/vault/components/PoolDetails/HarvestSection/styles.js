import { primaryColor } from 'assets/jss/material-kit-pro-react.js';

const styles = theme => ({
  sliderDetailContainer: {
    padding: '24px 30px',
  },
  showDetailLeft: {
    float: 'left',
    marginBottom: '10px',
    fontSize: '1rem',
    lineHeight: '20px',
    color: theme.palette.text.primary,
    fontWeight: '500',
  },
  showDetailBottom: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& + &': {
      marginLeft: '5px',
    },
  },
  showResponsiveButtonCon: {
    width: '160px',
    [theme.breakpoints.up('md')]: {
      maxWidth: '80px',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '100px',
    },
  },
  showDetailButton: {
    margin: '12px 5px',
    fontSize: '22px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    borderRadius: '5px',
    width: '160px',
    color: primaryColor[0],
    fontFamily: `${theme.fonts.highlight}`,
    fontWeight: 'initial',
    padding: '4px 0px'
  },
  showDetailButtonOutlined: {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.primary.main}`,
    color: primaryColor[0],
    '& .MuiTouchRipple-root span': {
      backgroundColor: primaryColor[0],
    },
  },
  showDetailButtonContained: {
    backgroundColor: "white",
    '&:hover': {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
    '& .MuiButton-label': {
      color: primaryColor[0],
    },
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    lineHeight: '18px',
    letterSpacing: 0,
    wordBreak: 'break-word',
    minWidth: '150px',
  },
  subtitle: {
    fontSize: '14px',
    fontWeight: '400',
    color: theme.palette.text.primary,
    lineHeight: '20px',
    letterSpacing: 0,
  },
});

export default styles;
