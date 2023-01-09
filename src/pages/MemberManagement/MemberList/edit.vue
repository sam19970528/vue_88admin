<template>
    <Introduce :h1="`修改${member}${labelText[labelType]}`" />
    <div class="d-flex justify-content-center">
        <el-radio-group v-model="labelType" class="m-16">
            <el-radio-button label="basic" class="is-active">用戶資訊</el-radio-button>
            <el-radio-button label="bank">銀行卡</el-radio-button>
            <el-radio-button label="alipay">支付寶</el-radio-button>
            <el-radio-button label="wechat">微信</el-radio-button>
        </el-radio-group>
    </div>
    <el-form label-width="120px">
        <template v-if="labelType === 'basic'">
            <el-form-item label="真實姓名">
                <el-input class="w-10" v-model="form.realname" />
            </el-form-item>
            <el-form-item label="郵箱">
                <el-input class="w-20" v-model="form.email" />
            </el-form-item>
            <el-form-item label="手機">
                <el-input class="w-10" v-model="form.mobile" />
            </el-form-item>
        </template>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { ref, reactive } from "vue";
import Introduce from "@/components/Introduce.vue";
import { useRoute } from "vue-router";

export default {
    name: "EditMember",
    components: {
        Introduce,
    },
    setup() {
        const route = useRoute();
        const member = route.query.member;
        const labelText = reactive({
            basic: "用戶資訊",
            bank:"銀行卡",
            alipay:"支付寶",
            wechat:"微信"
        })
        const labelType = ref("basic");
        const form = reactive({
            realname: "",
            email: "",
            mobile: "",
        });
        const onSubmit = () => {
            console.log("submit!");
        };
        return {
            labelType,
            form,
            onSubmit,
            member,
            labelText
        };
    },
};
</script>
