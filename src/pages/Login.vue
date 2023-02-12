<template>
    <div class="login">
        <div class="login-form">
            <h1>歡迎使用88pay後台管理系統!</h1>
            <el-form label-width="50px">
                <el-form-item label="帳號">
                    <el-input v-model="user.username" />
                </el-form-item>
                <el-form-item label="密碼">
                    <el-input v-model="user.password" />
                </el-form-item>
                <el-button class="w-100" size="large" type="primary" :loading="isLoading" @click="userLogin">登入</el-button>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { login2 } from "@/api/op.js";
import router from "@/router";
const LOCALSTORE_TOKENNAME = import.meta.env.VITE_LOCALSTORE_TOKENNAME;

onMounted(() => {
    localStorage.removeItem(LOCALSTORE_TOKENNAME);
});

const isLoading = ref(false);
const user = reactive({
    username: "",
    password: "",
    web: "admin",
    googleCode: "",
});
async function userLogin() {
    isLoading.value = true;
    const res = await login2(user);
    isLoading.value = false;
    if (res.data.status === "ok") {
        localStorage.setItem(LOCALSTORE_TOKENNAME, res.data.body);
        router.push("/");
    }
}
</script>
