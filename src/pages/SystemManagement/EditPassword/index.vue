<template>
    <Introduce h1="修改密碼" p="修改登入或下發的密碼"/>
    <el-radio-group v-model="labelType" class="m-16">
        <el-radio-button label="loginPassword" class="is-active">登入密碼</el-radio-button>
        <el-radio-button label="xiafaPassword">下發密碼</el-radio-button>
    </el-radio-group>
    <el-form label-width="120px">
        <el-form-item label="當前密碼" required>
            <el-input class="w-20" />
        </el-form-item>
        <el-form-item label="新密碼" required>
            <el-input class="w-20" />
        </el-form-item>
        <el-form-item label="確認新密碼" required>
            <el-input class="w-20" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" size="large">送出修改</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { reactive, ref } from "vue";
import Introduce from "@/components/Introduce.vue";

export default {
    name: "EditPassword",
    components:{
        Introduce
    },
    setup() {
        const labelType = ref("loginPassword")
        return {
            labelType
        };
    },
};
</script>
