import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import logger from "redux-logger";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { api } from "../Services/api";
import theme from "./themeSlice";
// import zakat from './zakatSlice'
// import forgetPassword from './forgetPasswordSlice'
import ratioScreen from "./ratioScreenSlice";
// import guest from './guestSlice'
// import subCategory from './subCategorySlice'
import category from "./categorySlice";
import location from "./locationSlice";
import login from "./loginSlice";
// import makeOrder from './makeOrderSlice'
// import cart from './cartSlice'
import statusUser from "./statusUserSlice";
// import makeOrderPengiriman from './makeOrderPengirimanSlice'
// import ringkasanPesanan from './ringkasanPesananSlice'
// import savedAddress from './savedAddressSlice'
// import pointFilter from './pointFilter'
import tokenList from "./tokenSlice";
import register from "./registerSlice";
// import taxSlice from './taxSlice'

const reducers = combineReducers({
  theme,
  api: api.reducer,
  location,
  login,
  category,
  statusUser,
  // cart,
  // forgetPassword: forgetPassword,
  ratioScreen,
  // guest: guest,
  // subCategory: subCategory,
  // location: location,
  // statusUser: statusUser,
  // makeOrder: makeOrder,
  // makeOrderPengiriman: makeOrderPengiriman,
  // ringkasanPesanan: ringkasanPesanan,
  // savedAddress: savedAddress,
  // pointFilter: pointFilter,
  tokenList,
  register,
  // tax: taxSlice,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: [
    "theme",
    "login",
    "location",
    "category",
    // 'zakat',
    // 'forgetPassword',
    "ratioScreen",
    // 'guest',
    // 'subCategory',
    // 'cart',
    "statusUser",
    // 'makeOrder',
    // 'makeOrderPengiriman',
    // 'ringkasanPesanan',
    // 'savedAddress',
    // 'pointFilter',
    "tokenList",
    "register",
    // 'tax',
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware);

    if (__DEV__ && !process.env.JEST_WORKER_ID) {
      // const createDebugger = require("redux-flipper").default;
      // // const { logger } = require('redux-logger')
      // middlewares.push(createDebugger());
      middlewares.push(logger);
    }

    return middlewares;
  },
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };
