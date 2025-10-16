import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ParticipantTournament } from "@/generated/api";

interface ParticipantsState {
  list: ParticipantTournament[];
}

const initialState: ParticipantsState = {
  list: [],
};

export const participantsSlice = createSlice({
  name: "participants",
  initialState,
  reducers: {
    setParticipants: (state, action: PayloadAction<ParticipantTournament[]>) => {
      state.list = action.payload;
    },
    clearParticipants: (state) => {
      state.list = [];
    },
  },
});

export const { setParticipants, clearParticipants } = participantsSlice.actions;
export default participantsSlice.reducer;
