import "./styles/global.css";
import "./styles/theme.css";

import { History } from "./pages/History";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Settings } from "./pages/Settings";

export function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";

  switch (path) {
    case "/":
      return <Home />;
    case "/history":
      return <History />;
    case "/settings":
      return <Settings />;
    default:
      return <NotFound />;
  }
}
