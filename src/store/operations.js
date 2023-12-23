export const sendContactsPending = state => {
  state.isLoading = true;
  state.error = null;
  state.succes = null;
};

export const sendContactsFulfilled = state => {
  state.isLoading = false;
  state.success = true;
};

export const sendContactsRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  state.succes = false;
};
