import { and, between, eq, like } from "drizzle-orm";
import { models, contentCreators, videoProductions, voiceArtists, contentWriting } from "../drizzle/schema";
import { getDb } from "./db";

export async function getModels(filters: {
  gender?: string;
  minAge?: number;
  maxAge?: number;
  specialty?: string;
}) {
  const db = await getDb();
  if (!db) return [];

  const conditions = [eq(models.isActive, 1)];

  if (filters.gender && filters.gender !== "all") {
    conditions.push(eq(models.gender, filters.gender as "male" | "female"));
  }

  if (filters.minAge !== undefined && filters.maxAge !== undefined) {
    conditions.push(between(models.age, filters.minAge, filters.maxAge));
  }

  if (filters.specialty && filters.specialty !== "all") {
    conditions.push(like(models.specialties, `%${filters.specialty}%`));
  }

  const result = await db
    .select()
    .from(models)
    .where(and(...conditions))
    .orderBy(models.createdAt);

  return result;
}

export async function getContentCreators(filters: {
  platform?: string;
  contentType?: string;
}) {
  const db = await getDb();
  if (!db) return [];

  const conditions = [eq(contentCreators.isActive, 1)];

  if (filters.platform && filters.platform !== "all") {
    conditions.push(like(contentCreators.platforms, `%${filters.platform}%`));
  }

  if (filters.contentType && filters.contentType !== "all") {
    conditions.push(like(contentCreators.contentTypes, `%${filters.contentType}%`));
  }

  const result = await db
    .select()
    .from(contentCreators)
    .where(and(...conditions))
    .orderBy(contentCreators.createdAt);

  return result;
}

export async function getVideoProductions(filters: {
  productionType?: string;
}) {
  const db = await getDb();
  if (!db) return [];

  const conditions = [eq(videoProductions.isActive, 1)];

  if (filters.productionType && filters.productionType !== "all") {
    conditions.push(eq(videoProductions.productionType, filters.productionType));
  }

  const result = await db
    .select()
    .from(videoProductions)
    .where(and(...conditions))
    .orderBy(videoProductions.createdAt);

  return result;
}

export async function getVoiceArtists(filters: {
  gender?: string;
  voiceType?: string;
  language?: string;
}) {
  const db = await getDb();
  if (!db) return [];

  const conditions = [eq(voiceArtists.isActive, 1)];

  if (filters.gender && filters.gender !== "all") {
    conditions.push(eq(voiceArtists.gender, filters.gender as "male" | "female"));
  }

  if (filters.voiceType && filters.voiceType !== "all") {
    conditions.push(eq(voiceArtists.voiceType, filters.voiceType));
  }

  if (filters.language && filters.language !== "all") {
    conditions.push(like(voiceArtists.languages, `%${filters.language}%`));
  }

  const result = await db
    .select()
    .from(voiceArtists)
    .where(and(...conditions))
    .orderBy(voiceArtists.createdAt);

  return result;
}

export async function getContentWritingSamples(filters: {
  contentType?: string;
}) {
  const db = await getDb();
  if (!db) return [];

  const conditions = [eq(contentWriting.isActive, 1)];

  if (filters.contentType && filters.contentType !== "all") {
    conditions.push(eq(contentWriting.contentType, filters.contentType));
  }

  const result = await db
    .select()
    .from(contentWriting)
    .where(and(...conditions))
    .orderBy(contentWriting.createdAt);

  return result;
}
