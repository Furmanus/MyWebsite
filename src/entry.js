import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Page} from './containers/Page';
import './styles/entry.less';
import {appReducer} from './reducer/reducer';

const store = createStore(appReducer);

ReactDOM.render(
    <Provider store={store}>
        <Page/>
    </Provider>,
    document.getElementById('app'),
);