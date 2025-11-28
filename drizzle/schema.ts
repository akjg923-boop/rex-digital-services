import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Models table - stores information about models for hire
 */
export const models = mysqlTable("models", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  age: int("age").notNull(),
  gender: mysqlEnum("gender", ["male", "female"]).notNull(),
  bio: text("bio"),
  profileImage: text("profileImage"),
  videoUrl: text("videoUrl"),
  height: int("height"), // in cm
  experience: text("experience"),
  specialties: text("specialties"), // JSON array as text
  isActive: int("isActive").default(1).notNull(), // 1 = active, 0 = inactive
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Model = typeof models.$inferSelect;
export type InsertModel = typeof models.$inferInsert;

/**
 * Content creators table
 */
export const contentCreators = mysqlTable("contentCreators", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  bio: text("bio"),
  profileImage: text("profileImage"),
  portfolioUrl: text("portfolioUrl"),
  platforms: text("platforms"), // JSON array: ["instagram", "youtube", etc.]
  contentTypes: text("contentTypes"), // JSON array: ["video", "photo", etc.]
  sampleWorks: text("sampleWorks"), // JSON array of work URLs
  isActive: int("isActive").default(1).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ContentCreator = typeof contentCreators.$inferSelect;
export type InsertContentCreator = typeof contentCreators.$inferInsert;

/**
 * Video production portfolio
 */
export const videoProductions = mysqlTable("videoProductions", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  videoUrl: text("videoUrl").notNull(),
  thumbnailUrl: text("thumbnailUrl"),
  productionType: varchar("productionType", { length: 100 }), // commercial, documentary, etc.
  clientName: varchar("clientName", { length: 255 }),
  duration: int("duration"), // in seconds
  isActive: int("isActive").default(1).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type VideoProduction = typeof videoProductions.$inferSelect;
export type InsertVideoProduction = typeof videoProductions.$inferInsert;

/**
 * Voice over artists
 */
export const voiceArtists = mysqlTable("voiceArtists", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  bio: text("bio"),
  profileImage: text("profileImage"),
  gender: mysqlEnum("gender", ["male", "female"]).notNull(),
  voiceType: varchar("voiceType", { length: 100 }), // deep, soft, energetic, etc.
  languages: text("languages"), // JSON array
  accents: text("accents"), // JSON array
  sampleAudios: text("sampleAudios"), // JSON array of audio URLs
  isActive: int("isActive").default(1).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type VoiceArtist = typeof voiceArtists.$inferSelect;
export type InsertVoiceArtist = typeof voiceArtists.$inferInsert;

/**
 * Content writing portfolio
 */
export const contentWriting = mysqlTable("contentWriting", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  contentType: varchar("contentType", { length: 100 }), // blog, social media, technical, etc.
  sampleText: text("sampleText"),
  clientName: varchar("clientName", { length: 255 }),
  wordCount: int("wordCount"),
  isActive: int("isActive").default(1).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ContentWriting = typeof contentWriting.$inferSelect;
export type InsertContentWriting = typeof contentWriting.$inferInsert;

/**
 * Service requests from clients
 */
export const serviceRequests = mysqlTable("serviceRequests", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  service: varchar("service", { length: 100 }).notNull(),
  message: text("message"),
  status: mysqlEnum("status", ["pending", "in_progress", "completed", "cancelled"]).default("pending").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ServiceRequest = typeof serviceRequests.$inferSelect;
export type InsertServiceRequest = typeof serviceRequests.$inferInsert;