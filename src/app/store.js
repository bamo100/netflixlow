import {configureStore} from "@reduxjs/toolkits";
import { userReducer } from "../features/userSlice";


export default configureStore({
    reducer: {
        user : userReducer,
    }
})