import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from "./page/Main";
import Produce from "./page/Produce";
import Notice from "./page/NoticeBoard";
import BestSaler from './page/BestSaler';
import Inquire from './page/Inquire';
import Master from './page/Master';
import Nav from './component/Nav';
import Bottom from './component/Bottom';
import NoticeView from './page/NoticeView';

const AppRouter = () => {
return(
    <div>
        <BrowserRouter>
            <Nav />
            <div style={style.contents}>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/notice" component={Notice} />
                <Route path="/produce" component={Produce} />
                <Route path="/bsaler" component={BestSaler} />
                <Route path="/inquire" component={Inquire} />
                <Route path="/master" component={Master} />
                <Route path="/noticeview/:ntcb_id" component={NoticeView} />
            </Switch>
            </div>
            <Bottom />
        </BrowserRouter>
    </div>
);
}

const style = {
    contents: {
        marginLeft: '400px',
        marginRight: '400px',
        minHeight: '800px',
    }
}

export default AppRouter;