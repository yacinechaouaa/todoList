import { ADDTODO, EDITTODO, DELETETODO, COMPLETE } from "./action-type";
export const addtodo = (todotoadd) => {
  return {
    type: ADDTODO,
    payload: todotoadd,
  };
};
export const edittodo = (todoToedit) => {
  return {
    type: EDITTODO,
    payload: todoToedit,
  };
};

export const deletetodo = (id) => {
  return {
    type: DELETETODO,
    payload: id,
  };
};
export const complete = (id) => {
  return {
    type: COMPLETE,
    payload: id,
  };
};
