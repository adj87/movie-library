import React from "react";
import { Route } from "wouter";
import { Provider } from "react-redux";
import { store } from "./store";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import AsideMenu from "./components/AsideMenu";

const App: React.FC = () => (
  <Provider store={store}>
    <AsideMenu />
    <Route path="/">Home</Route>
    <Route path="/movies" component={() => <Movies />} />
    <Route path="/movies/:id" component={() => <MovieDetail />} />
    <Route path="/actors">actors</Route>
    <Route path="/companies">Movies</Route>
  </Provider>
);

export default App;
