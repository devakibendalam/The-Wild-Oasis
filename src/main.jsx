import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/ErrorFallback.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onSet={() => window.location.replace("/")}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// 32. Error Boundaries
// React apps should handle errors that occur during rendering
// Unhandled errors lead to a white screen, which is unacceptable for users

// Example of an error
// An error caused by trying to access bookings.length before bookings data is loaded
// This kind of error would cause the app to crash with a white screen in production

// Error Boundaries
// Error boundaries are like try-catch for React rendering, allowing to catch JavaScript errors
// React's built-in error boundary implementation is hard to use with class components

// react-error-boundary library
// Installed the popular react-error-boundary library (3+ million weekly downloads)
// Provides an ErrorBoundary component to wrap the app and specify a fallback UI

// Implementing ErrorBoundary
// Wrapped the App component with ErrorBoundary from the library
// Passed ErrorFallback component as fallbackComponent prop
// Created ErrorFallback component to render when an error occurs

// Limitations
// Error boundaries only catch errors during React rendering
// Errors in event handlers, effects, or asynchronous code are not caught
