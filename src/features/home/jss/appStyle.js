import { red } from '@material-ui/core/colors';
import { container } from 'assets/jss/material-kit-pro-react.js';

const appStyle = theme => ({
  '@global': {
    'html,body': {},
  },
  page: {
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    ...container,
    zIndex: 1,
  },
  children: {
    minHeight: '77vh',
  },
});

export default appStyle;
