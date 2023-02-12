import request from "@/api/request";

// 系統操作紀錄
export function opSyslog(params) {
    return request({
        url: `/op/syslog`,
        method: "get",
        params,
    });
}

//取得後端版本號
export function version() {
    return request({
        url: `/op/version`,
        method: "get",
    });
}

// 測試回調
export function testCallback(params) {
    return request({
        url: `/op/test/callback`,
        method: "get",
        params,
    });
}

// 查詢系統目前時間
export function currentDate() {
    return request({
        url: `/op/currentDate`,
        method: "get",
    });
}

// 產生驗證碼
export function generateVerifyCode(params) {
    return request({
        url: `/op/generateVerifyCode`,
        method: "get",
        params,
    });
}

// 用戶信評即時計算
export function addMemberCredit(params) {
    return request({
        url: `/op/addMemberCredit`,
        method: "get",
        params,
    });
}

// 渠道信評即時計算
export function addSystemCredit(params) {
    return request({
        url: `/op/addSystemCredit`,
        method: "get",
        params,
    });
}

// 測試用登入
export function login2(data) {
    return request({
        url: `/op/getToken`,
        method: "post",
        data,
    });
}