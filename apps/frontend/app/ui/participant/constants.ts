import { Participant } from "@/generated/api";
import { createdDateFilterValues, updatedDateFilterValues } from "@/generated/backend/common";
import { eloNumberFilterValues, lossesNumberFilterValues, winsNumberFilterValues } from "@/generated/backend/participant";
import { Column, PARTICIPANT_TYPE_VALUES } from "@/lib/global-constants";

export const participantColumns: Column<Participant>[] = [
  {
    value: "name",
    name: "Name",
    dataType: "string",
    filterType: "search",
    typeValues: [],
  },
  {
    value: "type",
    name: "Type",
    dataType: "string",
    filterType: "checkbox",
    typeValues: PARTICIPANT_TYPE_VALUES,
  },
  {
    value: "elo",
    name: "Elo",
    dataType: "string",
    filterType: "number",
    typeValues: eloNumberFilterValues,
  },
  {
    value: "wins",
    name: "Wins",
    dataType: "string",
    filterType: "number",
    typeValues: winsNumberFilterValues,
  },
  {
    value: "losses",
    name: "Losses",
    dataType: "string",
    filterType: "number",
    typeValues: lossesNumberFilterValues,
  },
  {
    value: "createdAt",
    name: "Created",
    dataType: "date",
    filterType: "date",
    typeValues: createdDateFilterValues,
  },
  {
    value: "updatedAt",
    name: "Updated",
    dataType: "date",
    filterType: "date",
    typeValues: updatedDateFilterValues,
  },
  {
    value: "id",
    name: "",
    dataType: "string",
    filterType: "none",
    typeValues: [],
    buttons: [
      { type: "edit", path: "/participant" },
      { type: "delete", path: "/participant" },
    ],
  },
];
