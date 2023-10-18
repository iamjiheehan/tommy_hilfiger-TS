import { configureStore, createSlice } from "@reduxjs/toolkit";

// Cart slice
const cart = createSlice({
    name: "cart",
    initialState: {
        items: [
            {
                id: "NT002",
                brand: "TOMMY JEANS",
                name: "케이블 집업",
                price: "210,000",
                regular: "248,800",
                percent: "15%",
                img: "img/NewIn/Jeans/002.jpg",
                imgSub: "img/NewIn/Jeans/002-1.jpg",
                category: "니트/스웨터",
                gender: "여성",
                style: "가디건",
                count: 1,
            },
            {
                id: "NT003",
                brand: "TOMMY JEANS",
                name: "[ALASKA] 크롭 푸퍼",
                price: "304,300",
                regular: "358,000",
                percent: "15%",
                img: "img/NewIn/Jeans/003.jpg",
                imgSub: "img/NewIn/Jeans/003-1.jpg",
                category: "아우터",
                gender: "여성",
                style: "패딩",
                count: 1,
            },
            {
                id: "NT004",
                brand: "TOMMY JEANS",
                name: "소피 스트레이트핏 미드블루 데님",
                price: "159,800",
                regular: "188,000",
                percent: "15%",
                img: "img/NewIn/Jeans/004.jpg",
                imgSub: "img/NewIn/Jeans/004-1.jpg",
                category: "팬츠",
                gender: "여성",
                style: "데님",
                count: 1,
            },
        ],
    },
    reducers: {
        reset: () => ({ items: [] }),

        // AddCount reducer
        addCount: (state, action) => {
            const updatedItems = state.items.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, count: item.count + 1 };
                }
                return item;
            });
            state.items = updatedItems;
        },

        // MinusCount reducer
        minusCount: (state, action) => {
            const updatedItems = state.items.map((item) => {
                if (item.id === action.payload && item.count > 1) {
                    return { ...item, count: item.count - 1 };
                }
                return item;
            });
            state.items = updatedItems;
        },

        addItem: (state, action) => {
            const item = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (item) {
                item.count++;
            } else {
                state.items.push({ ...action.payload, count: 1 });
            }
        },

        deleteItem: (state, action) => {
            const index = state.items.findIndex(
                (item) => item.id === action.payload
            );
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },

        sortName: (state, action) => {
            state.items.sort((a, b) => (a.name > b.name ? 1 : -1));
        },

        // 아이템 변경 시 최종 가격을 다시 계산하고 업데이트
        // 아이템 변경 시 최종 가격을 다시 계산하고 업데이트
        calculateFinalPrice: (state) => {
            const totalPrice = state.items.reduce((total, item) => {
                return (
                    total +
                    parseFloat(item.price.replace(/,/g, "")) * item.count
                );
            }, 0);
            // Format the totalPrice with commas for thousands
            state.finalPrice = totalPrice.toLocaleString(); // Converts to a string with comma separators
        },
    },
});

export const {
    addItem,
    minusCount,
    addCount,
    deleteItem,
    sortName,
    calculateFinalPrice,
} = cart.actions;

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
