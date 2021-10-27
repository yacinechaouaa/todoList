import { ADDTODO, DELETETODO, EDITTODO, COMPLETE } from "../action/action-type";
const initialState = {
  todo: [
    {
      title: "todo1",
      id: 1,
      complete: false,
    },
  ],
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case DELETETODO:
      return {
        ...state,
        todo: state.todo.filter((el) => el.id != action.payload),
      };
    case EDITTODO:
      return {
        ...state,
        todo: state.todo.map((el) =>
          el.id == action.payload.id ? (el = action.payload) : (el = el)
        ),
      };
    case COMPLETE:
      return {
        ...state,
        todo: state.todo.map((el) =>
          el.id === action.payload ? { ...el, complete: !el.complete } : el
        ),
      };

    default:
      return state;
  }
};
export default Reducer;
