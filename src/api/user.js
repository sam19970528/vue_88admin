import request from "@/api/request";

// 登入
export function login(data) {
    return request({
        url: `/user/getToken`,
        method: "post",
        data,
    });
}

// 取得登入者info
export function userTokenInfo() {
    return request({
        url: `/user/tokenInfoAdmin`,
        method: "get",
    });
}

// 取得管理者列表
export function userFindAll(params) {
    return request({
        url: `/user/findAll`,
        method: "get",
        params
    });
}

// 修改管理者密碼
export function updatePassword(data) {
    return request({
        url: `/user/updatePassword`,
        method: "post",
        data
    });
}

// 修改密鑰
export function generatingKey(data) {
    return request({
        url: `/user/generatingKey`,
        method: "post",
        data
    });
}

// 添加後台使用者
export function addAdmin(data) {
    return request({
        url: `/user/addAdmin`,
        method: "post",
        data
    });
}

// 刪除後台使用者
export function deleteAdminUser(params) {
    return request({
        url: `/user/deleteAdminUser`,
        method: "get",
        params
    });
}