import Head from 'next/head';
import Default from '@layout/Default/Default';
import ComingSoonPage from '@template/ComingSoonPage/ComingSoonPage';

const App = () => (
    <Default>
      <Head>
        <title>FitMove</title>
      </Head>
      <ComingSoonPage/>
    </Default>
);
  
export default App;  