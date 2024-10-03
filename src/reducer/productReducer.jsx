const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featursData = action.payload.filter((singlElem) => {
        return singlElem.featured === true;
      });
      return {
        ...state,
        isLoading: true,
        products: action.payload,
        featursProducts: featursData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;
