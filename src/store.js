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

// User and Cart slices combined into a single Redux store
const rootReducer = {
    user: user.reducer,
    cart: cart.reducer,
};

// 한국어 주석 추가:
// 유저와 카트 슬라이스를 하나의 Redux 스토어로 결합
// combineReducers 대신 rootReducer를 사용하여 스토어 설정
const store = configureStore({
    reducer: rootReducer,
});

export default store;
