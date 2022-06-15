const styles = theme => ({
  container: {
    marginBottom: '24px',
    backgroundColor: 'rgba(85, 23, 162, 0.7)',
    backdropFilter: 'blur(30px)',
    borderRadius: '20px',
    boxShadow: theme.shadow.card,
  },
  accordion: {
    width: '100%',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  divider: {
    margin: '0 30px',
  },
});

export default styles;
