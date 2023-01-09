<template>
    <el-container class="layout-container-demo">
        <Sidebar />
        <el-container class="is-vertical">
            <Header />
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import { Setting } from "@element-plus/icons-vue";

export default {
    components: {
        Sidebar,
        Setting,
        Header,
    },
    setup() {
        return {};
    },
};
</script>
