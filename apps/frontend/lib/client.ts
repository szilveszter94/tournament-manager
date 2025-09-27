import { AppClient } from "@/generated/api";

export const apiClient = new AppClient({
  BASE: process.env.NEXT_PUBLIC_API_URL ?? "",
  WITH_CREDENTIALS: true,
});