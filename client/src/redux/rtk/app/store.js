import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import employmentStatusSlice from "../features/employemntStatus/employmentStatusSlice";
import awardSlice from "../features/award/awardSlice";
import awardHistorySlice from "../features/awardHistory/awardHistorySlice";

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const store = configureStore({
	reducer: {
		users: userReducer,
		employmentStatus: employmentStatusSlice,
		award: awardSlice,
		awardHistory: awardHistorySlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
