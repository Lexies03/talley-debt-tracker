import { Children, createContext, useReducer, useState } from "react";

const initialState = {
  loginModalOpen: false,
};

const AuthContext = createContext();

const AuthProvider = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_MODAL_OPEN":
        return {
          ...state,
          loginModalOpen: action.payload,
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {props.Children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
