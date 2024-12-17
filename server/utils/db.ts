import { drizzle } from "drizzle-orm/d1"

export function initializeDrizzle(D1: IDBDatabase) {
  return drizzle(D1)
}
