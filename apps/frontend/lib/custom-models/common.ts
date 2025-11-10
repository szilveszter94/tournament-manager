export type State = {
  message: string | null;
  errors: { [key: string]: string[] };
  success: boolean;
};

export const initialState: State = {
  message: null,
  errors: {},
  success: false,
};
