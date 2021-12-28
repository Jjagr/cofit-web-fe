import Head from "next/head";
import Default from "@layout/NavOver/NavOver";
import Home from "@template/HomePage/HomePage";
import Landing from "@template/LandingPage/LandingPage";

const App = () => (
  <Default>
    <Head>
      <title>COFIT</title>
    </Head>
    <Landing />
  </Default>
);

export default App;
