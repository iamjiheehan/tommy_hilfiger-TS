import { configureStore, createSlice } from "@reduxjs/toolkit";

// Cart slice
const cart = createSlice({
    name: "cart",
    initialState: { items: [] }, // Initial state as an object with an 'items' array
    reducers: {
        addCount: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                item.count++;
            }
        },

        minusCount: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item && item.count > 1) {
                item.count--;
            }
        },

        addItem: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload.id);
            if (item) {
                item.count++;
            } else {
                state.items.push({ ...action.payload, count: 1 });
            }
        },

        deleteItem: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },

        sortName: (state, action) => {
            state.items.sort((a, b) => (a.name > b.name ? 1 : -1));
        },
    },
});


export const { addItem, minusCount, addCount, deleteItem, sortName } = cart.actions;

// 세부 정보 슬라이스 (제품 세부 정보 관리용)
const detail = createSlice({
    name: "detail",
    initialState: {},
    reducers: {
        setDetail(state, action) {
            // 액션 페이로드를 기반으로 스토어에 제품 세부 정보를 설정
            //payload 객체는 상태를 업데이트하는 데 사용됨
            return { ...state, ...action.payload };
        },
    },
});

export const { setDetail } = detail.actions;

const products = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        setProducts(state, action) {
            return action.payload;
        },
    },
});

export const { setProducts } = products.actions;

// 모든 리듀서를 하나의 루트 리듀서로 결합
const rootReducer = {
    // user: user.reducer,
    cart: cart.reducer,
    detail: detail.reducer,
    products: products.reducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
