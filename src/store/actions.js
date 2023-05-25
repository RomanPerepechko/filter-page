export const addToCart = ({ commit }, payload) => {
	commit('ADD_TO_CART', payload);
};

export const removeFromCart = ({ commit }, payload) => {
	commit('REMOVE_FROM_CART', payload);
};

export const initialiseStore = ({ commit }) => {
	if (localStorage.getItem('cart')) {
		commit('INITIALISE_STORE', JSON.parse(localStorage.getItem('cart')));
	}
}