import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterState = {
  searchQuery: string;
  status: string[];
  category: string[];
  pricingModel: string | null;
};

const initialState: FilterState = {
  searchQuery: "",
  status: [],
  category: [],
  pricingModel: null,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    toggleStatus(state, action: PayloadAction<string>) {
      const status = action.payload;
      state.status.includes(status)
        ? (state.status = state.status.filter((s) => s !== status))
        : state.status.push(status);
    },
    toggleCategory(state, action: PayloadAction<string>) {
      const category = action.payload;
      state.category.includes(category)
        ? (state.category = state.category.filter((c) => c !== category))
        : state.category.push(category);
    },
    setPricingModel(state, action: PayloadAction<string | null>) {
      state.pricingModel = action.payload;
    },
    clearAllFilters(state) {
      state.searchQuery = "";
      state.status = [];
      state.category = [];
      state.pricingModel = null;
    },
  },
});

export const {
  setSearchQuery,
  toggleStatus,
  toggleCategory,
  setPricingModel,
  clearAllFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
