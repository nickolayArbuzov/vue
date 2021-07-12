import {createStore} from "vuex";
import {positionModule} from "@/store/positionModule";

export default createStore({
    state: {
      isAuth: false,
    },
    modules: {
      position: positionModule
    }
})
