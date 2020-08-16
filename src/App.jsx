import React from "react";
import "./styles/dirmarketing.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from "./config/routes";
import { Spinner } from "reactstrap";
import { MainLayout, LayoutRoute, EmptyLayout } from "./components/Layout";

const HomePage = React.lazy(() => import("./pages/landingPage"));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split("/").pop()}`;
};

function App() {
  return (
    <BrowserRouter basename={getBasename()}>
      <Switch>
        {/* <React.Suspense
          fallback={
            <div className="spinnerContainer">
              <Spinner color="secondary" />
            </div>
          }
        >
          <LayoutRoute
            exact
            path={routes.signIn}
            layout={EmptyLayout}
            component={HomePage}
          />
        </React.Suspense> */}

        <React.Fragment>
          <MainLayout>
            <React.Suspense
              fallback={
                <div className="spinnerContainer">
                  <Spinner color="secondary" />
                </div>
              }
            >
              <Route exact path={routes.homePage} component={HomePage} />
            </React.Suspense>
          </MainLayout>
        </React.Fragment>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

// const query = ({ width }) => {
//   if (width < 575) {
//     return { breakpoint: "xs" };
//   }

//   if (576 < width && width < 767) {
//     return { breakpoint: "sm" };
//   }

//   if (768 < width && width < 991) {
//     return { breakpoint: "md" };
//   }

//   if (992 < width && width < 1199) {
//     return { breakpoint: "lg" };
//   }

//   if (width > 1200) {
//     return { breakpoint: "xl" };
//   }

//   return { breakpoint: "xs" };
// };

export default App;
