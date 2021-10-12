import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// HOC //
// import WithAuth from "./hoc/WithAuth";

// Pages
import { Home, Registration, Login } from "pages";

// Test Components //
// import Test from "./components/Test";

// Layouts //
import MainLayout from "./layouts/MainLayout";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/home">
            <MainLayout>
              <Home />
            </MainLayout>
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
