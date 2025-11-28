import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ModelsPage from "./pages/ModelsPage";
import ContentCreatorsPage from "./pages/ContentCreatorsPage";
import VideoProductionPage from "./pages/VideoProductionPage";
import VoiceArtistsPage from "./pages/VoiceArtistsPage";
import ContentWritingPage from "./pages/ContentWritingPage";
import AdminDashboard from "./pages/AdminDashboard";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/models" component={ModelsPage} />
      <Route path="/content-creators" component={ContentCreatorsPage} />
      <Route path="/video-production" component={VideoProductionPage} />
      <Route path="/voice-artists" component={VoiceArtistsPage} />
      <Route path="/content-writing" component={ContentWritingPage} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
