import Head from "next/head";
import NavOver from "@layout/NavOver/NavOver";
import Landing from "@template/LandingPage/LandingPage";

const App = () => (
  <NavOver>
    <Head>
      <title>COFIT</title>
    </Head>
    <Landing />
  </NavOver>
);

export default App;
