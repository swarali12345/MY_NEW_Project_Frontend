const DashboardOverviewStyles = {
  container: {
    mb: 4
  },
  title: {
    mb: 3
  },
  statCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  statCardContent: {
    flex: 1
  },
  statValue: {
    fontWeight: 'bold',
    fontSize: '2rem',
    my: 2
  },
  statIcon: {
    fontSize: '3rem',
    opacity: 0.7,
    color: 'primary.light'
  },
  actionLink: {
    mt: 1,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center'
  },
  chartContainer: {
    p: 3,
    mb: 3,
    height: '350px'
  },
  chartTitle: {
    mb: 1
  },
  recentActivitiesCard: {
    p: 3,
    mb: 3
  },
  activityItem: {
    p: 1,
    borderRadius: 1,
    mb: 1,
    '&:hover': {
      backgroundColor: 'action.hover'
    }
  },
  activityIcon: {
    mr: 1
  },
  activityTime: {
    color: 'text.secondary',
    fontSize: '0.85rem'
  },
  activityTitle: {
    fontWeight: 'medium'
  },
  recentPapersCard: {
    p: 3
  },
  paperItem: {
    p: 1,
    borderRadius: 1,
    mb: 1,
    '&:hover': {
      backgroundColor: 'action.hover'
    }
  },
  paperTitle: {
    fontWeight: 'medium'
  },
  paperInfo: {
    color: 'text.secondary',
    fontSize: '0.85rem'
  },
  viewAllButton: {
    mt: 2
  }
};

export default DashboardOverviewStyles; 