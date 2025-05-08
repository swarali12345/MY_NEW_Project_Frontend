import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { SnackbarProvider } from 'notistack';
import { Box } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Theme
import theme from './theme';

// Auth Context Provider
import { AuthProvider } from './contexts/AuthContext';

// Layout
import Layout from './components/layout/Layout';

// Routes Components
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import PaperDetails from './pages/PaperDetails';
import NotFound from './pages/NotFound';
import AdminDashboard from './pages/AdminDashboard';
import Search from './pages/Search';
import Subjects from './pages/Subjects';
import SubjectPapers from './pages/SubjectPapers';
import Feedback from './pages/Feedback';
import UploadPaper from './pages/UploadPaper';

// Route Guards
import ProtectedRoute from './components/routing/ProtectedRoute';
import AdminRoute from './components/routing/AdminRoute';

// Admin Components
import SubjectManager from './components/admin/SubjectManager';

// Replace with your actual Google Client ID
const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID";

// Configure React Router future flags
const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ 
          minHeight: '100vh', 
          position: 'relative',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <SnackbarProvider maxSnack={3}>
            <Router {...router}>
              <AuthProvider>
                <Routes>
                  {/* Authentication Routes outside of layout */}
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  
                  {/* Public Routes */}
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="papers/:id" element={<PaperDetails />} />
                    <Route 
                      path="search" 
                      element={<ProtectedRoute><Search /></ProtectedRoute>} 
                    />
                    <Route 
                      path="subjects" 
                      element={<ProtectedRoute><Subjects /></ProtectedRoute>} 
                    />
                    <Route 
                      path="subjects/:year/:semester" 
                      element={<ProtectedRoute><Subjects /></ProtectedRoute>} 
                    />
                    <Route 
                      path="papers/:year/:semester/:subjectId" 
                      element={<ProtectedRoute><SubjectPapers /></ProtectedRoute>} 
                    />
                    <Route path="/feedback" element={<Feedback />} />
                    
                    {/* Protected Routes */}
                    <Route 
                      path="profile" 
                      element={<ProtectedRoute><Profile /></ProtectedRoute>} 
                    />
                    
                    {/* Admin Routes */}
                    <Route 
                      path="admin" 
                      element={<AdminRoute><AdminDashboard /></AdminRoute>} 
                    />
                    
                    <Route 
                      path="admin/subjects" 
                      element={<AdminRoute><SubjectManager /></AdminRoute>} 
                    />
                    
                    <Route 
                      path="upload-paper" 
                      element={<AdminRoute><UploadPaper /></AdminRoute>} 
                    />
                    
                    {/* Catch all route */}
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
              </AuthProvider>
            </Router>
          </SnackbarProvider>
        </Box>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}

export default App; 