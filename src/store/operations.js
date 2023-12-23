export const sendContactsPending = state => {
  state.isLoading = true;
  state.error = null;
  state.success = null;
};

export const sendContactsFulfilled = state => {
  state.isLoading = false;
  state.success = true;
};

export const sendContactsRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  state.success = false;
};
