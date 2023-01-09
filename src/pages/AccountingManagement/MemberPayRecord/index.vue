<template>
    <Introduce h1="用戶付款紀錄" p="用戶使用88pay付款到商戶平台之紀錄" />
    <el-scrollbar>
        <el-table :data="tableData">
            <el-table-column prop="date" label="時間" />
            <el-table-column prop="orderId" label="商戶訂單號" />
            <el-table-column prop="member" label="用戶名" />
            <el-table-column prop="realname" label="真實姓名" />
            <el-table-column prop="amount" label="金額" />
            <el-table-column prop="status" label="狀態" />
            <el-table-column prop="callBackResult" label="回調結果" />
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
            date: "2016-05-02 08:08:08",
            orderId: "1665599778877",
            member: "Tom",
            realname: "邱肛門",
            amount: 100,
            status: "待付款",
            callBackResult: "成功",
        });
        const tableData = ref(Array.from({ length: 10 }).fill(item));
        return {
            tableData,
        };
    },
};
</script>
