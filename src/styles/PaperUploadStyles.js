const PaperUploadStyles = {
  container: {
    p: 3
  },
  title: {
    mb: 2
  },
  formContainer: {
    mt: 3
  },
  fileDropzone: {
    border: '2px dashed',
    borderColor: 'divider',
    borderRadius: 1,
    p: 3,
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: 'background.default',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: 'action.hover'
    }
  },
  fileDropzoneActive: {
    borderColor: 'primary.main',
    backgroundColor: (theme) => `${theme.palette.primary.light}20`
  },
  uploadIcon: {
    color: 'text.secondary',
    fontSize: '3rem',
    mb: 1
  },
  fileDetails: {
    display: 'flex',
    alignItems: 'center',
    mt: 2,
    p: 1,
    borderRadius: 1,
    backgroundColor: 'action.hover'
  },
  fileIcon: {
    color: 'error.main',
    mr: 1
  },
  fileName: {
    flexGrow: 1,
    fontWeight: 'medium'
  },
  fileSize: {
    color: 'text.secondary',
    ml: 2
  },
  formField: {
    mt: 2
  },
  formActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    mt: 3,
    pt: 2,
    borderTop: 1,
    borderColor: 'divider'
  },
  submitButton: {
    ml: 1
  },
  successIcon: {
    fontSize: '5rem',
    mb: 2,
    color: 'success.main'
  },
  successActions: {
    mt: 3
  },
  alertBox: {
    mb: 3
  }
};

export default PaperUploadStyles; 