
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import Index from "./pages/Index";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import NotFound from "./pages/NotFound";
import USFJobs from "./pages/USFJobs";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreateAccount";
import About from "./pages/About";
import StudentHousing from "./pages/StudentHousing";
import Notifications from "./pages/Notifications";
import Groups from "./pages/Groups";
import GroupDetail from "./pages/GroupDetail";
import Welcome from "./pages/Welcome";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const isMobile = useIsMobile();
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    if (hasVisited) {
      setIsFirstVisit(false);
    } else {
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  }, []);

  // If it's a mobile device and first visit, redirect to welcome page
  if (isMobile && isFirstVisit) {
    return (
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="*" element={<Navigate to="/welcome" replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/usf-jobs" element={<USFJobs />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/about" element={<About />} />
      <Route path="/student-housing" element={<StudentHousing />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="/groups/:id" element={<GroupDetail />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
