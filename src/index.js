import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, Link, IndexRoute, Redirect, browserHistory} from 'react-router';

// import RouteConfig from './Config/route-config';

import {IndexList, Login, ArticleDetail, Create, Me, MyArticle, CreateDetail} from './Config/route-config'

const rootRoute = {
  component: require('./components/Main').default,
  childRoutes: [{
    path: '/',
    indexRoute: {
      getComponent(nextState, cb){
        require.ensure([], (require)=> {
          cb(null, require('./components/IndexList'))
        })
      }
    },
    childRoutes: [
      IndexList,
      Login,
      ArticleDetail,
      Create,
      Me,
      MyArticle,
      CreateDetail
    ]
  }]
}


let root = document.getElementById('app');
render(
  // <RouteConfig/>
  <Router routes={rootRoute} history={hashHistory}/>
  , root);
