import { RootState } from '@/app/store.ts';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface FlowState {
  selectedNodeId?: string;
}

const initialState: FlowState = {
  selectedNodeId: undefined,
};

export const exempleSlice = createSlice({
  name: 'ExempleSlice',
  initialState,
  reducers: {
    setSelectedNodeId: (state, action: PayloadAction<string>) => {
      state.selectedNodeId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedNodeId } = exempleSlice.actions;

export const exempleReducer = exempleSlice.reducer;

export const getExempleSliceState = (state: RootState) => state.exempleReducer;
