import { OpenAPI } from "../../../generated/services/api";

export function initApi() {
  OpenAPI.BASE = process.env.NEXT_PUBLIC_API_URL ?? "";
}
