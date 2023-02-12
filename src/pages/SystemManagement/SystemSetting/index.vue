<template>
    <Introduce h1="參數設置" p="設置88pay交易相關的參數" />
    <el-form label-width="200px">
        <el-form-item label="繳款時間設置">
            <el-input class="w-10" />
        </el-form-item>
        <el-form-item label="確認到帳時間設置">
            <el-input class="w-10" />
        </el-form-item>
        <el-form-item label="掛單過期時間設置">
            <el-input class="w-10" />
        </el-form-item>
        <el-form-item label="最大单笔金额">
            <el-input class="w-10" />
        </el-form-item>
        <el-form-item label="提款最低金額">
            <el-input class="w-10" />
        </el-form-item>
        <!-- <el-form-item label="邀請碼">
            <el-input disabled class="w-10" style="margin-right: 15px" />
            <el-button type="primary">產生</el-button>
        </el-form-item> -->
        <!-- <el-form-item label="回調地址">
            <el-input class="w-50" style="margin-right: 15px" />
            <el-button type="primary">測試</el-button>
        </el-form-item> -->
        <el-form-item>
            <el-button type="primary" size="large">送出修改</el-button>
        </el-form-item>
    </el-form>
</template>

<script setup>
import { reactive, ref } from "vue";
import Introduce from "@/components/Introduce.vue";
</script>
