import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
const persistState = require('redux-localstorage');
const thunk = require('redux-thunk').default;
import promiseMiddleware from '../middleware/promise-middleware';
import logger from './logger';
import rootReducer from '../reducers';

// webpack-hot-loader sets some extra attributes on node's `module` if that
// module has been hot-loaded in the browser.
interface HotNodeModule extends NodeModule {
    hot: { accept: Function };
};

// This global is used to turn on redux dev tools when in dev mode.
declare let __DEV__: boolean;
declare let __DEVTOOLS__: boolean;
declare let module: HotNodeModule;

const reduxRouterMiddleware = routerMiddleware(browserHistory);

const storageConfig = {
    key: 'typescript-react-redux-seed',
    serialize: (store) => {
        return store && store.session ?
            JSON.stringify(store.session.toJS()) : store;
    },
    deserialize: (state) => ({
        session: state ? fromJS(JSON.parse(state)) : fromJS({}),
    }),
};

function configureStore(initialState) {
    let middleware = applyMiddleware(reduxRouterMiddleware, promiseMiddleware, thunk, logger);

    if (__DEV__) {
        let devTools;
        /* tslint:disable:no-string-literal */
        if (window['devToolsExtension']) {
            devTools = window['devToolsExtension']();
        }
        /* tslint:enable:no-string-literal */

        /**
         * if you want integrated devtools add <DevTools /> in the ../containers/app.tsx just before the closing div 
         * and uncomment the following line
         * devTools = require('../containers/dev-tools').default.instrument();
         */
        devTools = require('../containers/dev-tools').default.instrument();
        if (devTools) {
            middleware = compose(middleware, persistState('session', storageConfig), devTools);
        }
    }

    const store = middleware(createStore)(rootReducer, initialState);


    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}


export default configureStore;
