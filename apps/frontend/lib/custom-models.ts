export type State = {
  message: string | null;
  errors: { [key: string]: string[] };
};

export const initialState: State = {
  message: null,
  errors: {},
};