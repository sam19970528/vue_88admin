<template>
    <div class="datetimepicker">
        <el-date-picker v-model="value2" type="datetimerange" :shortcuts="shortcuts" range-separator="至" start-placeholder="開始時間" end-placeholder="結束時間" style="margin-right: 10px" />
    </div>
</template>

<script>
import { ref } from "vue";
import moment from "moment";

export default {
    name: "DateTimePicker",
    setup() {
        const value2 = ref("");
        const shortcuts = [
            {
                text: "最近一周",
                value: () => {
                    const start = Date.parse(moment().subtract(7, "days"));
                    const end = Date.parse(new Date());
                    return [start, end];
                },
            },
            {
                text: "上個月",
                value: () => {
                    const start = Date.parse(moment().subtract(1, "months"));
                    const end = Date.parse(new Date());
                    return [start, end];
                },
            },
            {
                text: "近3個月",
                value: () => {
                    const start = Date.parse(moment().subtract(3, "months"));
                    const end = Date.parse(new Date());
                    return [start, end];
                },
            },
        ];
        return {
            value2,
            shortcuts,
        };
    },
};
</script>
