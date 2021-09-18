import Head from 'next/head';
import Default from '@layout/Default/Default';
import Home from '@template/HomePage/HomePage';

const App = () => (
  <Default> 
    <Head>
        <title>COFIT</title>
    </Head>
    <Home />
  </Default>
);

export default App;
