import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Bar from "./pages/bar";
import Calendar from "./pages/calendar";
import Contacts from "./pages/contacts";
import FAQ from "./pages/faq";
import Form from "./pages/form";
import Geography from "./pages/geography";
import SideBar from "./pages/global/Sidebar";
import Topbar from "./pages/global/Topbar";
import Invoices from "./pages/invoices";
import Line from "./pages/line";
import Pie from "./pages/pie";
import Team from "./pages/team";



const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <SideBar />
          <main className="content">
            <Topbar />
            <Routes>
            <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
