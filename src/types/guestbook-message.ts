export interface GuestbookMessage {
  id: string;
  name: string;
  updateAt: Date;
  message: string;
  type: "update" | "delete";
}
