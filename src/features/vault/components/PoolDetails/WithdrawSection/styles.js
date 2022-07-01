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
  showDetailButtonCon: {
    display: 'flex',
    justifyContent: 'space-around',
    '& + &': {
      marginLeft: '5px',
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
  numericInput: {
    color: primaryColor[0],
  },
  balanceMax: {
    cursor: 'pointer',
    color: theme.palette.text.primary,
    borderBottom: '1px solid',
  },
  zapNote: {
    width: '100%',
    textAlign: 'left',
    fontSize: '14px',
    marginTop: '8px',
    color: theme.palette.text.primary,
    '& li': {
      paddingLeft: '16px'
    },
  },
  zapFormControl: {
    minWidth: 'auto',
  },
  zapSelect: {
    border: 'none',
    borderLeft: `1px solid ${theme.palette.text.primary}`,
    paddingLeft: '10px',
    '& > div': {
      padding: '6px 0',
    },
    '&::before': {
      content: 'none',
    },
    '&::after': {
      content: 'none',
    },
  },
  sliderCont: {
    padding: '10px'
  }
});

export default styles;
