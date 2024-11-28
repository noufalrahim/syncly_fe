import { configureStore } from '@reduxjs/toolkit';

export type AppState = {
  selectedProjectId: number;
  selectedProjectName: string;
};

const initialState = {
  selectedProjectId: 0,
  selectedProjectName: '',
};

function AppReducer(prevState = initialState, action: { type: string; payload: any }) {
  switch (action.type) {
    case 'project/selected':
      return {
        ...prevState,
        selectedProjectId: action.payload.id,
        selectedProjectName: action.payload.name,
      };
    case 'increment':
      return {
        ...prevState,
        selectedProjectId: prevState.selectedProjectId + 1,
      };
    default:
      return prevState;
  }
}

const store = configureStore({
  reducer: AppReducer,
});

export default store;
