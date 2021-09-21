import Head from 'next/head';
import Default from '@layout/Default/Default';
import Nest from '@template/NestPage/NestPage';

const App = () => (
    <Default>
      <Head>
        <title>FitNest</title>
      </Head>
      <Nest />
    </Default>
);
  
export default App;  