import { Provider } from 'react-redux';
import { wrapper } from './redux/store';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import '@/styles/globals.css'

export default function App({ Component}) {
  // const { store, props } = wrapper.useWrappedStore(rest);
  // const { pageProps } = props;
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      <Component  />
      </PersistGate>
    </Provider>

  )
}
