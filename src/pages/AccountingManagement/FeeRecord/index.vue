<template>
    <Introduce h1="手續費紀錄" p="用於紀錄用戶從商戶平台提現到88pay，或是從88pay充值到商戶平台的手續費紀錄" />
    <el-scrollbar>
        <el-table :data="tableData">
            <el-table-column prop="type" label="類型" width="100" />
            <el-table-column prop="behavior" label="性質" width="100" />
            <el-table-column prop="date" label="時間" />
            <el-table-column prop="member" label="用戶名" />
            <el-table-column prop="amount" label="金額" />
            <el-table-column prop="feeBase" label="筆費" />
            <el-table-column prop="feeRate" label="費率" />
            <el-table-column prop="fee" label="加總" />
        </el-table>
    </el-scrollbar>
</template>

<script>
import { reactive, ref } from "vue";
import Introduce from "@/components/Introduce.vue";

export default {
    name: "FeeRecord",
    components: {
        Introduce,
    },
    setup() {
        const item = reactive({
            type: "充值",
            behavior: "用戶充值",
            date: "2016-05-02 08:08:08",
            member: "Tom",
            amount: "100",
            feeBase: "1",
            feeRate: "0.8%",
            fee: "1.25",
        });
        const tableData = ref(Array.from({ length: 10 }).fill(item));
        return {
            tableData,
        };
    },
};
</script>
