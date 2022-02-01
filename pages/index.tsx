import Head from "next/head";
import Default from "@layout/NavOver/NavOver";
import Landing from "@template/LandingPage/LandingPage";

const App = () => (
  <Default>
    <Head>
      <title>Groofit</title>
    </Head>
    <Landing />
  </Default>
);

export default App;
