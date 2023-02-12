import { reactive } from "vue";
import { userTokenInfo } from "@/api/user.js";

const state = reactive({
    userInfo: {},
});
async function getUserInfo() {
    const res = await userTokenInfo();
    state.userInfo = res.data.body;
}
export default {
    state,
    getUserInfo,
};
