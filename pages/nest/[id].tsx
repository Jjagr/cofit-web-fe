import { withRouter } from 'next/router'
import NestDetail from '@template/NestDetail/NestDetail';
import { QUESTIONS } from '@constant/index';
import UnderNav from '@layout/UnderNav/UnderNav';

const App = ({ router }) => {
    const id: number = router.asPath.split('/')[2];
    console.log(QUESTIONS[id])

    return (
        <UnderNav>
            <NestDetail data={QUESTIONS[id]} />
        </UnderNav>
    );
}

export default withRouter(App);