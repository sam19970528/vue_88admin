<template>
    <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
            <el-dropdown>
                <el-icon style="margin-right: 8px; margin-top: 1px"><setting /></el-icon>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="logout">登出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <span>{{ userInfo.username }}</span>
        </div>
    </el-header>
</template>

<script setup>
import { inject, toRefs } from "vue";
import { Setting } from "@element-plus/icons-vue";
import router from "@/router";
const { state } = inject("store");
const { userInfo } = toRefs(state);
async function logout() {
    router.push("/login");
}
</script>
