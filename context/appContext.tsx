"use client";

import { createContext, useContext, useReducer, ReactNode, Dispatch, useEffect } from 'react';

interface User {
  createdAt: Date;
  name: string;
  lastName: string;
  emailPassword: string;
  image: string;
}

interface CartItem {
  id: string;
  name: string;
  image: string;
  cartAmount: number;
  amount: number;
  price: number;
}

interface State {
  user: User | null;
  cart: CartItem[];
}

type Action =
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: { id: string } }
  | { type: 'CLEAR_CART'; payload: { id: string } }
  | { type: 'UPDATE_USER'; payload: User }

const initialState: State = {
  user: null,
  cart: [],
};

const USER_STORAGE_KEY = 'user';

const AppContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

const appReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      localStorage.removeItem(USER_STORAGE_KEY);
      return {
        ...state,
        user: null,
      };
    case 'ADD_TO_CART':
      const itemToAdd = action.payload;
      const existingCartItem = state.cart.find(item => item.id === itemToAdd.id);
      if (existingCartItem) {
        const availableAmount = itemToAdd.amount - existingCartItem.cartAmount;
        if (availableAmount > 0) {
          // Check if the available amount is greater than zero
          const amountToAdd = Math.min(availableAmount, 1); // Add only 1 unit or the available amount, whichever is smaller
          const updatedCart = state.cart.map(item =>
            item.id === itemToAdd.id ? { ...item, cartAmount: item.cartAmount + amountToAdd } : item
          );
          return {
            ...state,
            cart: updatedCart,
          };
        }

      } else {
        return {
          ...state,
          cart: [...state.cart, { ...itemToAdd, cartAmount: 1 }],
        };
      }
      return state; // If available amount is 0 or negative, do nothing
    case 'REMOVE_FROM_CART':
      const updatedCart = state.cart.map(item =>
        item.id === action.payload.id ? { ...item, cartAmount: Math.max(0, item.cartAmount - 1) } : item
      ).filter(item => item.cartAmount > 0);
      return {
        ...state,
        cart: updatedCart,
      };
    case 'CLEAR_CART':
      const removedCart = state.cart.map(item =>
        item.id === action.payload.id ? { ...item, cartAmount: 0} : item
      ).filter(item => item.cartAmount > 0);
      return {
        ...state,
        cart: removedCart,
      };
    case 'UPDATE_USER':
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (storedUser) {
      dispatch({ type: 'LOGIN', payload: JSON.parse(storedUser) });
    }
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

