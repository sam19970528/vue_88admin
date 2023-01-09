<template>
    <Introduce h1="用戶提現列表" p="用戶在88pay的提現訂單" />
    <div class="d-inline-flex-align-center">
        <!-- <el-radio-group v-model="labelType" class="m-16">
            <el-radio-button label="all" class="is-active">所有</el-radio-button>
            <el-radio-button label="withdraw">提款</el-radio-button>
            <el-radio-button label="deposit">充值</el-radio-button>
        </el-radio-group> -->
        <DateTimePicker />
        <el-input style="margin-right: 10px" placeholder="用戶名"></el-input>
        <el-input style="margin-right: 10px" placeholder="金額"></el-input>
        <el-input style="margin-right: 10px" placeholder="訂單號"></el-input>
        <el-button type="primary">查詢</el-button>
    </div>
    <el-table :data="tableData" max-height="750" stripe>
        <el-table-column prop="date" label="時間" />
        <el-table-column prop="siteOrderId" label="訂單編號" />
        <el-table-column prop="channel" label="交易方式" />
        <el-table-column prop="amount" label="金額" />
        <el-table-column prop="withdrawMember" label="用戶名" />
        <el-table-column prop="withdrawRealname" label="真实姓名" />
        <el-table-column label="收款信息">
            <template #default="{ row: { withdrawTransInfo1, withdrawTransInfo2, withdrawTransInfo3 } }">
                <p>卡號: {{ withdrawTransInfo1 }}</p>
                <p>銀行名稱: {{ withdrawTransInfo2 }}</p>
                <p>支行名稱: {{ withdrawTransInfo3 }}</p>
            </template>
        </el-table-column>
        <el-table-column prop="status" label="狀態" />
        <el-table-column label="操作">
            <template #default="scope">
                <el-button type="danger" plain>取消訂單</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-pagination v-model:currentPage="currentPage4" v-model:page-size="pageSize4" :page-sizes="[100, 200, 300, 400]" layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
</template>

<script>
import { reactive, ref } from "vue";
import Introduce from "@/components/Introduce.vue";
import DateTimePicker from "@/components/DateTimePicker.vue";

export default {
    name: "MemberApplyOrder",
    components: {
        Introduce,
        DateTimePicker,
    },
    setup() {
        const item = reactive({
            type: "充值",
            date: "2016-05-02 08:08:08",
            siteOrderId: "167798888877744",
            channel: "銀行卡",
            withdrawMember: "Simon",
            withdrawRealname: "邱肛門",
            withdrawTransInfo1: "88112233669977",
            withdrawTransInfo2: "中國開除銀行",
            withdrawTransInfo3: "中國開除支行",
            depositMember: "Simon",
            depositRealname: "邱肛門",
            depositTransInfo1: "88112233669978",
            depositTransInfo2: "中國賽門銀行",
            depositTransInfo3: "中國賽門支行",
            amount: "100",
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
