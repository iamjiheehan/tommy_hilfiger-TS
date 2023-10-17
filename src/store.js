import { configureStore, createSlice } from "@reduxjs/toolkit";

// User slice
const user = createSlice({
    name: "user",
    initialState: { name: "kim", age: 20 },
    reducers: {
        changeName(state) {
            state.name = "park";
        },
        increase(state, action) {
            state.age += action.payload;
        },
    },
});

export const { changeName, increase } = user.actions;

// Cart slice
const cart = createSlice({
    name: "cart",
    initialState: [
        { id: 0, imgurl: "shoes1.jpg", name: "White and Black", count: 2 },
        { id: 1, imgurl: "shoes2.jpg", name: "Red Knit", count: 1 },
        { id: 2, imgurl: "shoes3.jpg", name: "Grey Yordan", count: 1 },
    ],
    reducers: {
        addCount(state, action) {
            let num = state.findIndex((a) => a.id === action.payload);
            state[num].count++;
        },

        decreaseCount(state, action) {
            let num = state.findIndex((a) => a.id === action.payload);
            if (state[num].count > 0) {
                state[num].count--;
            } else if (state[num].count === 0) {
                alert("상품이 더 이상 없습니다.");
            }
        },

        addItem(state, action) {
            let num = state.findIndex((a) => a.id === action.payload.id);
            if (num !== -1) {
                state[num].count++;
            } else {
                state.push(action.payload);
            }
        },

        deleteItem(state, action) {
            let num = state.findIndex((a) => a.id === action.payload);
            state.splice(num, 1);
        },

        sortName(state, action) {
            state.sort((a, b) => (a.name > b.name ? 1 : -1));
        },
    },
});

export const { addCount, decreaseCount, addItem, deleteItem, sortName } =
    cart.actions;


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
    user: user.reducer,
    cart: cart.reducer,
    detail: detail.reducer,
    products: products.reducer
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
