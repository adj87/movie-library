import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import MovieCreate from "./pages/MovieCreate";
import AsideMenu from "./components/AsideMenu";
import Loading from "./components/Loading";
import Default from "./pages/Default";

import "./i18n";

const App: React.FC = () => (
  <Provider store={store}>
    <Loading />
    <BrowserRouter>
      <AsideMenu />
      <Route
        path="/"
        component={() => <Default keyTranslation={"screens.home"} />}
        exact
      />
      <Route path="/movies" component={() => <Movies />} exact />
      <Route
        path="/movies/:id"
        component={({ match }: any) => {
          if (isNaN(match?.params?.id)) return null;
          return <MovieDetail />;
        }}
        exact
      />
      <Route path="/movies/new" component={() => <MovieCreate />} exact />
      <Route
        path="/actors"
        component={() => <Default keyTranslation={"screens.actors"} />}
        exact
      />
      <Route
        path="/companies"
        component={() => <Default keyTranslation={"screens.companies"} />}
        exact
      />
    </BrowserRouter>
  </Provider>
);

export default App;
