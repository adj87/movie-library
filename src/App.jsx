import React from "react";
import { Link, Route } from "wouter";

const App : React.FC<> = () => (
  <>
    <nav className="mt-6">
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
    </nav>

    <Route path="/">Home</Route>
    <Route path="/movies">Movies</Route>
    <Route path="/actors">actors</Route>
    <Route path="/companies">Movies</Route>

  </>
);

export default App;
