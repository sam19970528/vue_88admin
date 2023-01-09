<template>
    <Introduce h1="用戶列表" p="商戶可自行對用戶資料做編輯" />
    <div class="d-inline-flex-align-center">
        <el-radio-group v-model="labelType" class="m-16">
            <el-radio-button label="date" class="is-active">依時間</el-radio-button>
            <el-radio-button label="all">全部</el-radio-button>
        </el-radio-group>
        <DateTimePicker v-if="labelType === 'date'" />
        <el-input class="mr-2" placeholder="用戶名"></el-input>
        <el-input class="mr-2" placeholder="真實姓名"></el-input>
        <el-input class="mr-2" placeholder="可用餘額"></el-input>
        <el-input class="mr-2" placeholder="錢包地址"></el-input>
        <el-input class="mr-2" placeholder="郵件"></el-input>
        <el-input class="mr-2" placeholder="手機"></el-input>
        <el-input class="mr-2" placeholder="登入ip"></el-input>
        <el-button type="primary">查詢</el-button>
    </div>
    <el-scrollbar>
        <el-table :data="tableData">
            <el-table-column prop="date" label="註冊時間" />
            <el-table-column prop="member" label="用戶名" />
            <el-table-column prop="realname" label="真實姓名" />
            <el-table-column prop="balance" label="可用餘額" />
            <el-table-column prop="address" label="錢包地址" />
            <el-table-column prop="email" label="郵件" />
            <el-table-column prop="mobile" label="手機" />
            <el-table-column prop="loginIp" label="登入ip" />
            <el-table-column prop="operation" label="操作">
                <template #default="{ row: { member } }">
                    <el-button @click="editMember(member)">編輯</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-scrollbar>
</template>

<script>
import { reactive, ref } from "vue";
import Introduce from "@/components/Introduce.vue";
import DateTimePicker from "@/components/DateTimePicker.vue";
import router from "@/router";

export default {
    name: "MemberList",
    components: {
        Introduce,
        DateTimePicker,
    },
    setup() {
        const item = reactive({
            date: "2016-05-02 08:08:08",
            member: "Tom",
            realname: "邱肛門",
            balance: "200",
            address: "DdbPayeada62997afd4350ea95d0bf13766fd3",
            email: "a7777777@gmail.com",
            mobile: "0977887788",
            loginIp: "192.168.0.101",
        });
        const tableData = ref(Array.from({ length: 10 }).fill(item));
        const loading = ref(false);
        const labelType = ref("date");
        function editMember(member) {
            router.push({ path: "/MemberManagement-MemberEdit", query: { member } });
        }
        return {
            tableData,
            labelType,
            editMember,
            loading,
        };
    },
};
</script>
