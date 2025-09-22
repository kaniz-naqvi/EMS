import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../styles/theme';

const NotFoundPage = () => {
  const theme = useTheme('dashboard');

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4"
      style={{ 
        background: theme.background,
        color: theme.text
      }}
    >
      <div className="max-w-md w-full text-center">
        {/* EchoMe Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold" style={{ color: theme.primary }}>EchoMe</h1>
          <p className="mt-2" style={{ color: theme.text }}>Portfolio Generator Platform</p>
        </div>

        {/* 404 Illustration/Icon */}
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto">
            <div 
              className="absolute inset-0 rounded-full flex items-center justify-center"
              style={{ background: `${theme.primary}20` }} // 20 = 12% opacity
            >
              <svg 
                className="w-16 h-16" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: theme.primary }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-6xl font-bold mb-2" style={{ color: theme.text }}>404</h2>
          <h3 className="text-2xl font-semibold mb-4" style={{ color: theme.text }}>Page Not Found</h3>
          <p style={{ color: theme.text }}>
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to=""
            className="px-6 py-3 font-medium rounded-lg transition-colors shadow-md"
            style={{ 
              background: theme.primary, 
              color: '#FFFFFF' 
            }}
            onMouseEnter={(e) => e.target.style.background = `${theme.primary}DD`}
            onMouseLeave={(e) => e.target.style.background = theme.primary}
          >
            Go to Homepage
          </Link>
          <Link 
            to="/dashboard"
            className="px-6 py-3 font-medium rounded-lg border transition-colors"
            style={{ 
              background: theme.background, 
              color: theme.primary,
              borderColor: theme.primary
            }}
            onMouseEnter={(e) => e.target.style.background = `${theme.primary}10`}
            onMouseLeave={(e) => e.target.style.background = theme.background}
          >
            Go to Dashboard
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-8 text-sm">
          <p style={{ color: theme.text }}>
            Need help  <Link to="/contact" style={{ color: theme.primary }}>  Contact support  </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;