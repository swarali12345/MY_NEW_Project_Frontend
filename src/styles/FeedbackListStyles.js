const FeedbackListStyles = {
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
  tableProgress: {
    my: 2
  },
  alertBox: {
    mb: 2
  },
  feedbackCard: {
    mb: 2,
    position: 'relative',
    overflow: 'hidden',
    borderLeft: 5,
    borderLeftStyle: 'solid'
  },
  feedbackNew: {
    borderLeftColor: 'primary.main'
  },
  feedbackRead: {
    borderLeftColor: 'grey.300'
  },
  feedbackUrgent: {
    borderLeftColor: 'error.main'
  },
  feedbackHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: 1
  },
  feedbackInfo: {
    display: 'flex',
    alignItems: 'center',
    color: 'text.secondary',
    mb: 1
  },
  feedbackInfoItem: {
    display: 'flex',
    alignItems: 'center',
    mr: 2
  },
  feedbackTypeChip: {
    mr: 1
  },
  feedbackContent: {
    whiteSpace: 'pre-line'
  },
  feedbackActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    mt: 2
  },
  actionButton: {
    ml: 1
  },
  replySection: {
    mt: 3,
    pt: 2,
    borderTop: 1,
    borderTopStyle: 'solid',
    borderTopColor: 'divider'
  },
  replyActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    mt: 2
  },
  markButton: {
    mr: 1
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    mt: 3,
    mb: 2
  },
  noFeedbackText: {
    textAlign: 'center', 
    py: 4
  },
  feedbackStatusNew: {
    backgroundColor: 'primary.light', 
    color: 'primary.contrastText'
  },
  feedbackStatusUrgent: {
    backgroundColor: 'error.light', 
    color: 'error.contrastText'
  },
  feedbackStatusResolved: {
    backgroundColor: 'success.light', 
    color: 'success.contrastText'
  },
  feedbackDetailsContainer: {
    pt: 2
  }
};

export default FeedbackListStyles; 