<template>
    <Introduce h1="額度紀錄" p="用戶從商戶平台儲值到88pay，或是從88pay付款到商戶平台所使用之額度紀錄" />
    <el-scrollbar>
        <el-table :data="tableData">
            <el-table-column prop="type" label="類型" width="100" />
            <el-table-column prop="behavior" label="性質" width="100" />
            <el-table-column prop="date" label="時間" />
            <el-table-column prop="member" label="用戶名" />
            <el-table-column prop="coinBefore" label="原始餘額" />
            <el-table-column prop="amt" label="變動金額" />
            <el-table-column prop="balance" label="	可用餘額" />
        </el-table>
    </el-scrollbar>
</template>

<script>
import { reactive, ref } from "vue";
import Introduce from "@/components/Introduce.vue";

export default {
    name: "QuotaRecord",
    components: {
        Introduce,
    },
    setup() {
        const item = reactive({
            type: "儲值",
            behavior: "用戶儲值",
            date: "2016-05-02 08:08:08",
            member: "Tom",
            coinBefore: "100",
            amt: "100",
            balance: "200",
        });
        const tableData = ref(Array.from({ length: 10 }).fill(item));
        return {
            tableData,
        };
    },
};
</script>
