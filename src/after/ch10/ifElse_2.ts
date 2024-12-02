import { cloneDeep } from 'lodash';

// reducer
class Store<T> {
  constructor(state: T) {
    this._state = state;
  }

  public _state: T;

  get state() {
    return cloneDeep(this._state);
  }

  public dispatch<K extends keyof ReducerMap>(
    type: K,
    payload: Parameters<ReducerMap[K]>[1],
  ) {
    this._state = reducer(this._state as any, { type, payload }) as T;
  }
}

interface ITodo {
  todos: string[];
}

const initialState: ITodo = {
  todos: [],
};

interface ReducerMap {
  ADD_TODO: (state: ITodo, payload: string) => ITodo;
  UPDATE_TODO: (
    state: ITodo,
    payload: { oldTodo: string; newTodo: string },
  ) => ITodo;
  REMOVE_TODO: (state: ITodo, payload: string) => ITodo;
  RESET_TODO: (state: ITodo) => ITodo;
}

const reducerMap: ReducerMap = {
  ADD_TODO: (state, payload) => {
    return {
      ...state,
      todos: [...state.todos, payload],
    };
  },
  UPDATE_TODO: (state, payload) => {
    return {
      ...state,
      todos: state.todos.map((todo) =>
        todo === payload.oldTodo ? payload.newTodo : todo,
      ),
    };
  },
  REMOVE_TODO: (state, payload) => {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo !== payload),
    };
  },
  RESET_TODO: (state) => {
    return {
      ...state,
      todos: [],
    };
  },
};

type ActionMap = {
  [K in keyof ReducerMap]: {
    type: K;
    payload: Parameters<ReducerMap[K]>[1];
  };
}[keyof ReducerMap];

const reducer = (state: ITodo, action: ActionMap): ITodo => {
  return reducerMap[action.type]?.(state, action.payload) || state;
};

const store = new Store(initialState);
store.dispatch('UPDATE_TODO', { newTodo: 'new', oldTodo: 'old' });
store.dispatch('ADD_TODO', 'new todo');
