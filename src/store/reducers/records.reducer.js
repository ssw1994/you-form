import { Action } from "../../libs/utils";
import { addFacade, fetchFacade } from "../actions/records.action";
import { records } from "../selectors/records.selector";
const initialState = {
  records: [],
  actions: {
    records: Action.none,
    add: Action.none,
  },
};
export default function recordsReducer(state = initialState, action) {
  switch (action.type) {
    case fetchFacade.fetching:
      return {
        ...state,
        actions: {
          ...state.actions,
          records: Action.busy,
        },
      };
    case fetchFacade.success:
      return {
        ...state,
        records: action.records,
        actions: {
          ...state.actions,
          records: Action.success,
        },
      };
    case fetchFacade.error:
      return {
        ...state,
        actions: {
          ...state.actions,
          records: Action.error,
        },
      };
    case addFacade.fetching:
      return {
        ...state,
        actions: {
          ...state.actions,
          add: Action.busy,
        },
      };
    case addFacade.success:
      console.log(action);
      return {
        ...state,
        records: [...state.records, action.record],
        actions: {
          ...state.actions,
          add: Action.success,
        },
      };
    case addFacade.error:
      return {
        ...state,
        actions: {
          ...state.actions,
          add: Action.error,
        },
      };

    default:
      return {
        ...state,
      };
  }
}
