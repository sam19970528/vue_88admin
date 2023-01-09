<template>
    <div class="login">
        <div class="login-form">
            <h1>歡迎使用商戶後台管理系統!</h1>
            <el-form  label-width="50px">
                <el-form-item label="帳號">
                    <el-input />
                </el-form-item>
                <el-form-item label="密碼">
                    <el-input />
                </el-form-item>
                <el-button class="w-100" size="large" type="primary" :loading="isLoading" @click="isLoading = true">登入</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    name:"Login",
    setup() {
        const isLoading = ref(false);
        return{
            isLoading
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
