import React from "react";
import { Route } from "wouter";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import Movies from "./pages/Movies";

const App : React.FC<> = () => (
  <Provider store={store}>
    {/*     <nav className="mt-6">
      <Link href="/home/">
        <a>Home</a>
      </Link>
      <Link href="/movies/">
        <a>Movies</a>
      </Link>
      <Link href="/actors/">
        <a>Actors</a>
      </Link>
      <Link href="/companies/">
        <a>Companies</a>
      </Link>
    </nav> */}

    <Route path="/">Home</Route>
    <Route path="/movies" component={() => <Movies />} />
    <Route path="/actors">actors</Route>
    <Route path="/companies">Movies</Route>

  </Provider>
);

export default App;
