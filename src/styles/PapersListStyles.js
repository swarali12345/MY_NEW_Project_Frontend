import { alpha } from '@mui/material/styles';

const PapersListStyles = {
  container: {
    mb: 4
  },
  title: {
    mb: 2
  },
  controlPanel: {
    p: 2, 
    mb: 3
  },
  filterContainer: {
    mb: 2
  },
  searchContainer: {
    display: 'flex'
  },
  actionButtonsContainer: {
    display: 'flex', 
    justifyContent: 'flex-end'
  },
  refreshButton: {
    mr: 1
  },
  tableContainer: {
    overflowX: 'auto'
  },
  tableProgress: {
    my: 2
  },
  alertBox: {
    mb: 2
  },
  paper: {
    p: 2,
    mb: 2,
    backgroundColor: (theme) => alpha(theme.palette.primary.light, 0.05)
  },
  paperActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    mt: 1
  },
  paperDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1
  },
  paperTag: {
    mr: 1,
    mb: 1
  },
  deleteButton: {
    color: 'error.main'
  },
  viewButton: {
    mr: 1
  },
  loadMoreButton: {
    mt: 2
  },
  filterSelect: {
    minWidth: 150
  },
  badge: {
    mr: 1
  },
  paperName: {
    fontWeight: 'bold'
  },
  paperInfo: {
    color: 'text.secondary',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  infoIcon: {
    mr: 0.5,
    fontSize: 'small',
    color: 'text.secondary'
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    mr: 2
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    mt: 3,
    mb: 2
  }
};

export default PapersListStyles; 