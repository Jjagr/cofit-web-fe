import Head from 'next/head';
import UnderNav from '@layout/UnderNav/UnderNav';
import Nest from '@template/NestPage/NestPage';

const App = () => (
    <UnderNav>
      <Head>
        <title>FitNest</title>
      </Head>
      <Nest />
    </UnderNav>
);
  
export default App;  