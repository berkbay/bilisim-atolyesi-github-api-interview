import MainStackNavigation from "./src/navigations/MainStackNavigation";

import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./src/store/reducers";
import thunk from "redux-thunk";


const store = createStore(reducer, applyMiddleware(thunk))

export default function App() {
  return (
      <Provider store={store}>
        <MainStackNavigation />
      </Provider>
  );
}

