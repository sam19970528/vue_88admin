import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: () => import("@/pages/Dashboard/index.vue"),
        children: [
            /* 首頁 */
            {
                path: "/",
                redirect: "/home",
            },
            {
                path: "/home",
                name: "Home",
                component: () => import("@/pages/Home/index.vue"),
            },
            /* 帳務管理 */
            {
                path: "/AccountingManagement-QuotaRecord" /* 額度紀錄 */,
                name: "QuotaRecord",
                component: () => import("@/pages/AccountingManagement/QuotaRecord/index.vue"),
            },
            {
                path: "/AccountingManagement-FeeRecord" /* 手續費紀錄 */,
                name: "FeeRecord",
                component: () => import("@/pages/AccountingManagement/FeeRecord/index.vue"),
            },
            {
                path: "/AccountingManagement-MemberStoreMoneyRecord" /* 用戶儲值紀錄 */,
                name: "MemberStoreMoneyRecord",
                component: () => import("@/pages/AccountingManagement/MemberStoreMoneyRecord/index.vue"),
            },
            {
                path: "/AccountingManagement-MemberPayRecord" /* 用戶付款紀錄 */,
                name: "MemberPayRecord",
                component: () => import("@/pages/AccountingManagement/MemberPayRecord/index.vue"),
            },
            /* 用戶管理 */
            {
                path: "/MemberManagement-MemberList" /* 用戶列表 */,
                name: "MemberList",
                component: () => import("@/pages/MemberManagement/MemberList/index.vue"),
            },
            {
                path: "/MemberManagement-MemberEdit" /* 編輯用戶 */,
                name: "MemberEdit",
                component: () => import("@/pages/MemberManagement/MemberList/edit.vue"),
            },
            {
                path: "/MemberManagement-TransferRecord" /* 交易紀錄 */,
                name: "TransferRecord",
                component: () => import("@/pages/MemberManagement/TransferRecord/index.vue"),
            },
            {
                path: "/MemberManagement-WithdrawRecord" /* 提現紀錄 */,
                name: "WithdrawRecord",
                component: () => import("@/pages/MemberManagement/WithdrawRecord/index.vue"),
            },
            {
                path: "/MemberManagement-DepositRecord" /* 充值紀錄 */,
                name: "DepositRecord",
                component: () => import("@/pages/MemberManagement/DepositRecord/index.vue"),
            },
            {
                path: "/MemberManagement-WalletTransRecord" /* 錢包互轉紀錄 */,
                name: "WalletTransRecord",
                component: () => import("@/pages/MemberManagement/WalletTransRecord/index.vue"),
            },
            {
                path: "/MemberManagement-WalletAccountingRecord" /* 錢包帳變紀錄 */,
                name: "WalletAccountingRecord",
                component: () => import("@/pages/MemberManagement/WalletAccountingRecord/index.vue"),
            },
            /* 系統管理 */
            {
                path: "/SystemManagement-SystemSetting" /* 參數設置 */,
                name: "SystemSetting",
                component: () => import("@/pages/SystemManagement/SystemSetting/index.vue"),
            },
            {
                path: "/SystemManagement-EditPassword" /* 修改密碼 */,
                name: "EditPassword",
                component: () => import("@/pages/SystemManagement/EditPassword/index.vue"),
            },
        ],
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("@/pages/Login.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
router.beforeEach(to => {});
export default router;
