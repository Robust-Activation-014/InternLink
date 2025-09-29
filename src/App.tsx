import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Sidebar } from "@/components/Layout/Sidebar";
import { Header } from "@/components/Layout/Header";
import { UserProvider } from "@/contexts/UserContext";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import PlacementDashboard from "./pages/PlacementDashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import StudentProfile from "./pages/StudentProfile";
import FacultyProfile from "./pages/FacultyProfile";
import PlacementProfile from "./pages/PlacementProfile";
import RecruiterProfile from "./pages/RecruiterProfile";
import FacultyApprovals from "./pages/FacultyApprovals";
import FacultyStudents from "./pages/FacultyStudents";
import FacultyFeedback from "./pages/FacultyFeedback";
import FacultyReports from "./pages/FacultyReports";
import PlacementOpportunities from "./pages/PlacementOpportunities";
import PlacementApplications from "./pages/PlacementApplications";
import PlacementAnalytics from "./pages/PlacementAnalytics";
import PlacementScheduling from "./pages/PlacementScheduling";
import PlacementCertificates from "./pages/PlacementCertificates";
import PlacementUsers from "./pages/PlacementUsers";
import RecruiterCompanyProfile from "./pages/RecruiterCompanyProfile";
import RecruiterJobs from "./pages/RecruiterJobs";
import PlaceholderPage from "./pages/PlaceholderPage";
import Internships from "./pages/Internships";
import Profile from "./pages/Profile";
import Performance from "./pages/Performance";
import Tests from "./pages/Tests";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  if (isHomepage) {
    return (
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/faculty" element={<FacultyDashboard />} />
            <Route path="/placement" element={<PlacementDashboard />} />
            <Route path="/recruiter" element={<RecruiterDashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/student-profile" element={<StudentProfile />} />
            <Route path="/faculty-profile" element={<FacultyProfile />} />
            <Route path="/placement-profile" element={<PlacementProfile />} />
            <Route path="/recruiter-profile" element={<RecruiterProfile />} />
            
            {/* Faculty specific routes */}
            <Route path="/faculty/approvals" element={<FacultyApprovals />} />
            <Route path="/faculty/students" element={<FacultyStudents />} />
            <Route path="/faculty/feedback" element={<FacultyFeedback />} />
            <Route path="/faculty/reports" element={<FacultyReports />} />
            
            {/* Placement specific routes */}
            <Route path="/placement/opportunities" element={<PlacementOpportunities />} />
            <Route path="/placement/applications" element={<PlacementApplications />} />
            <Route path="/placement/analytics" element={<PlacementAnalytics />} />
            <Route path="/placement/scheduling" element={<PlacementScheduling />} />
            <Route path="/placement/certificates" element={<PlacementCertificates />} />
            <Route path="/placement/users" element={<PlacementUsers />} />
            
            {/* Recruiter specific routes */}
            <Route path="/recruiter/profile" element={<RecruiterCompanyProfile />} />
            <Route path="/recruiter/jobs" element={<RecruiterJobs />} />
            <Route path="/recruiter/candidates" element={<PlaceholderPage title="Candidates" description="Browse and filter candidate pool" />} />
            <Route path="/recruiter/applications" element={<PlaceholderPage title="Applications" description="Manage job applications and candidates" />} />
            <Route path="/recruiter/feedback" element={<PlaceholderPage title="Feedback" description="Submit candidate feedback and ratings" />} />
            <Route path="/recruiter/certificates" element={<PlaceholderPage title="Certificates" description="Manage training completion certificates" />} />
            
            {/* Common routes */}
            <Route path="/internships" element={<Internships />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/alumni" element={<PlaceholderPage title="Alumni Connect" description="Connect with alumni and mentors" />} />
            <Route path="/interviews" element={<PlaceholderPage title="Interview Prep" description="Prepare for interviews with practice sessions" />} />
            <Route path="/settings" element={<PlaceholderPage title="Settings" description="Manage your account settings and preferences" />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange={false}
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <UserProvider>
            <AppContent />
          </UserProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
