import { withRouter } from 'next/router'
import NestDetail from '@template/NestDetail/NestDetail';
import { QUESTIONS } from '@constant/index';
import Default from '@layout/Default/Default';

const App = ({ router }) => {
    const id: number = router.asPath.split('/')[2];

    return (
        <Default>
            <NestDetail data={QUESTIONS[id]} />
        </Default>
    );
}

export default withRouter(App);