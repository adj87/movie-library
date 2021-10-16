import { Link, Route } from 'wouter';

const App = () => (
  <>
    <Link href="/movies/">
      <a>Movies</a>
    </Link>
    <Link href="/actors/">
      <a>Actors</a>
    </Link>
    <Link href="/companies/">
      <a>Companies</a>
    </Link>

    <Route path="/">Home</Route>
    <Route path="/movies">Movies</Route>
    <Route path="/actors">actors</Route>
    <Route path="/companies">Movies</Route>
  </>
);

export default App;
