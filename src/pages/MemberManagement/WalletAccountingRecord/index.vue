<template>
    <Introduce h1="商戶充提紀錄" p="用戶從商戶平台提現到88pay，或是從88pay充值到商戶平台的紀錄" />
    <div class="d-inline-flex-align-center">
        <el-radio-group v-model="labelType" class="m-16">
            <el-radio-button label="all" class="is-active">所有</el-radio-button>
            <el-radio-button label="withdraw">提款</el-radio-button>
            <el-radio-button label="deposit">充值</el-radio-button>
        </el-radio-group>
        <DateTimePicker />
        <el-input style="margin-right: 10px" placeholder="用戶名"></el-input>
        <el-input style="margin-right: 10px" placeholder="金額"></el-input>
        <el-input style="margin-right: 10px" placeholder="訂單號"></el-input>
        <el-button type="primary">查詢</el-button>
    </div>
    <el-scrollbar>
        <el-table :data="tableData" stripe>
            <el-table-column prop="type" label="類型" width="100" />
            <el-table-column prop="date" label="時間" />
            <el-table-column prop="siteOrderId" label="訂單編號" />
            <el-table-column prop="member" label="用戶名" />
            <el-table-column prop="realname" label="真实姓名" />
            <el-table-column prop="amount" label="金額" />
            <el-table-column prop="feeBase" label="筆費" />
            <el-table-column prop="feeRate" label="費率" />
            <el-table-column prop="status" label="狀態" />
        </el-table>
    </el-scrollbar>
    <el-pagination v-model:currentPage="currentPage4" v-model:page-size="pageSize4" :page-sizes="[100, 200, 300, 400]" layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
</template>

<script>
import { reactive, ref } from "vue";
import Introduce from "@/components/Introduce.vue";
import DateTimePicker from "@/components/DateTimePicker.vue";

export default {
    name: "TransferRecord",
    components: {
        Introduce,
        DateTimePicker,
    },
    setup() {
        const item = reactive({
            type: "充值",
            date: "2016-05-02 08:08:08",
            siteOrderId: "167798888877744",
            member: "Tom",
            realname: "邱肛門",
            amount: "100",
            feeBase: "1",
            feeRate: "0.8%",
            status: "成功",
        });
        const labelType = ref("all");
        const tableData = ref(Array.from({ length: 10 }).fill(item));
        const currentPage4 = ref(4);
        const pageSize4 = ref(100);
        const handleSizeChange = val => {
            console.log(`${val} items per page`);
        };
        const handleCurrentChange = val => {
            console.log(`current page: ${val}`);
        };
        return {
            tableData,
            labelType,
            currentPage4,
            pageSize4,
            handleSizeChange,
            handleCurrentChange,
        };
    },
};
</script>
