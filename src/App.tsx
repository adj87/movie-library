import React from "react";
import { BrowserRouter, Route, RouteChildrenProps } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import MovieCreate from "./pages/MovieCreate";
import AsideMenu from "./components/AsideMenu";
import Loading from "./components/Loading";

const App: React.FC = () => (
  <Provider store={store}>
    <Loading />
    <BrowserRouter>
      <AsideMenu />
      <Route path="/" exact>
        Home
      </Route>
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
      <Route path="/actors">actors</Route>
      <Route path="/companies">Movies</Route>
    </BrowserRouter>
  </Provider>
);

export default App;
