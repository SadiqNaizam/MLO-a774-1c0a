import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound"; // Assuming NotFound.tsx exists

// Import newly created pages
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import PasswordResetRequestPage from "./pages/PasswordResetRequestPage";
import PasswordResetConfirmPage from "./pages/PasswordResetConfirmPage";
import DashboardPage from "./pages/DashboardPage";

const queryClient = new QueryClient();

const App = () => {
  console.log('App.tsx loaded, setting up routes.');
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster /> {/* For shadcn/ui toasts */}
      <Sonner /> {/* For sonner toasts */}
      <BrowserRouter>
        <Routes>
          {/* Authentication Pages */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/password-reset-request" element={<PasswordResetRequestPage />} />
          <Route path="/password-reset-confirm" element={<PasswordResetConfirmPage />} /> {/* Token handled by page */}
          
          {/* Application Pages */}
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* Add other application routes here */}

          {/* Set a default route, e.g., to login or dashboard if authenticated */}
          {/* For now, redirecting root to login page for simplicity */}
          <Route path="/" element={<LoginPage />} /> 

          {/* Catch-all Not Found Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;