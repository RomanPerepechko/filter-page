export const ADD_TO_CART = (state, payload) => {
	state.cart.push(payload);
	localStorage.setItem('cart', JSON.stringify(state.cart));
};

export const REMOVE_FROM_CART = (state, payload) => {
	state.cart.splice(state.cart.indexOf(payload), 1);
	localStorage.setItem('cart', JSON.stringify(state.cart));
};

export const INITIALISE_STORE = (state, payload) => {
    state.cart = payload;
};

export const SET_SEARCH_QUERY = (state, payload) => {
    state.searchQuery = payload;
};