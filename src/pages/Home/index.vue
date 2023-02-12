<template>
    <div class="p-4">
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="card">
                    <div class="card-header">總充值金額</div>
                    <div class="card-body">
                        <h1>$1000.00</h1>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="card">
                    <div class="card-header">總提現金額</div>
                    <div class="card-body">
                        <h1>$1000.00</h1>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style lang="scss" scoped>
.el-row {
    margin-bottom: 20px;
}
.el-row:last-child {
    margin-bottom: 0;
}
.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.card {
    background: #fff;
    padding: 15px 0;
    .card-header {
        padding: 6px 15px;
        border-bottom: 1px solid #eee;
    }
    .card-body {
        padding: 20px;
    }
}
h1 {
    font-size: 26px;
    font-weight: normal;
}
</style>
