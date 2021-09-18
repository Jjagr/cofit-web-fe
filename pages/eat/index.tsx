import Head from 'next/head';
import UnderNav from '@layout/UnderNav/UnderNav';
import ComingSoonPage from '@template/ComingSoonPage/ComingSoonPage';

const App = () => (
    <UnderNav>
      <Head>
        <title>FitEat</title>
      </Head>
      <ComingSoonPage/>
    </UnderNav>
);
  
export default App;