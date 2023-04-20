import HTTP from "./http"

export const doLogin = async ({ email, password }) => {
    return await HTTP.post('/account/login', { email, password });
}

export const doGetProductList = async () => HTTP.get('/product');
export const doGetProduct = async (id) => HTTP.get(`/products/${id}`);
export const doCreateProduct = async (payload) => HTTP.post('/product',payload);