<template>
    <el-aside width="200px">
        <el-scrollbar>
            <el-menu active-text-color="#ffd04b" background-color="#0c2135" class="el-menu-vertical-demo" :default-openeds="defaultOpenIndex">
                <template v-for="item in subMenuList" :key="item.index">
                    <template v-if="item.menuItemList === null">
                        <el-menu-item @click="pageTurn(`/${item.path}`)" :index="item.index" :class="{ active: currentRoute === `/${item.path}` }">
                            <el-icon>
                                <component :is="item.icon"></component>
                            </el-icon>
                            <span>{{ item.title }}</span>
                        </el-menu-item>
                    </template>
                    <template v-else>
                        <el-sub-menu :index="item.index">
                            <template #title>
                                <el-icon>
                                    <component :is="item.icon"></component>
                                </el-icon>
                                <span>{{ item.title }}</span>
                            </template>
                            <el-menu-item v-for="(mi, miIndex) in item.menuItemList" @click="pageTurn(`/${item.name}-${mi.path}`)" :index="`${item.index}-${miIndex + 1}`" :class="{ active: currentRoute === `/${item.name}-${mi.path}` }">{{ mi.title }}</el-menu-item>
                        </el-sub-menu>
                    </template>
                </template>
            </el-menu>
        </el-scrollbar>
    </el-aside>
</template>

<script>
import { Setting, Document, HomeFilled, User, Menu as IconMenu } from "@element-plus/icons-vue";
import { reactive, shallowRef } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { computed, watch } from "@vue/runtime-core";
import router from "@/router";

export default {
    name: "Sidebar",
    components: {
        Setting,
        Document,
        HomeFilled,
        User,
        IconMenu,
    },
    setup() {
        const route = useRoute();
        const currentRoute = computed(() => route.path);
        /* 尋找當前路由的index */
        const defaultOpenIndex = computed(() => {
            const indexString = subMenuList.find(item => {
                if (currentRoute.value.includes(`/${item.name}`)) return currentRoute.value.includes(`/${item.name}`);
                else if (currentRoute.value === `/${item.path}`) return currentRoute.value === `/${item.path}`;
                else if (item.menuItemList !== null) return item.menuItemList.find(mi => currentRoute.value === `/${item.name}-${mi.path}`);
            }).index;
            return [`${indexString}`];
        });
        const subMenuList = reactive([
            {
                icon: shallowRef(HomeFilled),
                title: "首頁",
                name: null,
                index: "1",
                menuItemList: null,
                path: "home",
            },
            {
                icon: shallowRef(IconMenu),
                title: "帳務管理",
                name: "AccountingManagement",
                index: "2",
                menuItemList: [
                    { path: "QuotaRecord", title: "額度紀錄" },
                    { path: "FeeRecord", title: "手續費紀錄" },
                    { path: "MemberStoreMoneyRecord", title: "用戶儲值紀錄" },
                    { path: "MemberPayRecord", title: "用戶付款紀錄" },
                ],
            },
            {
                icon: shallowRef(User),
                title: "用戶管理",
                name: "MemberManagement",
                index: "3",
                menuItemList: [
                    { path: "MemberList", title: "用戶列表" },
                    { path: "TransferRecord", title: "交易紀錄" },
                    { path: "WithdrawRecord", title: "提現紀錄" },
                    { path: "DepositRecord", title: "充值紀錄" },
                    { path: "WalletTransRecord", title: "錢包互轉紀錄" },
                    { path: "WalletAccountingRecord", title: "錢包帳變紀錄" },
                ],
            },
            {
                icon: shallowRef(Setting),
                title: "系統管理",
                name: "SystemManagement",
                index: "4",
                menuItemList: [
                    { path: "SystemSetting", title: "參數設置" },
                    { path: "EditPassword", title: "修改密碼" },
                ],
            },
        ]);
        function pageTurn(path) {
            router.push(path);
        }
        return {
            currentRoute,
            pageTurn,
            subMenuList,
            defaultOpenIndex,
        };
    },
};
</script>
