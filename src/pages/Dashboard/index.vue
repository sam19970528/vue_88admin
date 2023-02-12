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

<script setup>
import { inject, onMounted } from "vue";
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
const { getUserInfo } = inject("store");
onMounted(() => {
    getUserInfo();
});
</script>
