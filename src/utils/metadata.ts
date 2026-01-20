// src/utils/metadata.ts
import type { Metadata } from "next";
import { hygraphFetch } from "./hygraph.server";

// ============================================
// Types
// ============================================

interface PageMetadataResponse {
  seenaMetadata: {
    title: string;
    description: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: {
      url: string;
    };
  } | null;
}

export interface PageMetadata {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

interface MetadataDefaults {
  title: string;
  description: string;
}

// ============================================
// GraphQL Query
// ============================================

const PAGE_METADATA_QUERY = `
  query GetPageMeta($slug: String!) {
    seenaMetadata(where: { slug: $slug }) {
      title
      description
      ogTitle
      ogDescription
      ogImage {
        url
      }
    }
  }
`;

// ============================================
// Functions
// ============================================

export async function getPageMetadata(slug: string): Promise<PageMetadata | null> {
  try {
    const data = await hygraphFetch<PageMetadataResponse>(
      PAGE_METADATA_QUERY,
      { slug },
      { revalidateSeconds: 3600 }
    );

    if (!data.seenaMetadata) return null;

    return {
      title: data.seenaMetadata.title,
      description: data.seenaMetadata.description,
      ogTitle: data.seenaMetadata.ogTitle,
      ogDescription: data.seenaMetadata.ogDescription,
      ogImage: data.seenaMetadata.ogImage?.url,
    };
  } catch (error) {
    console.error(`Failed to fetch metadata for "${slug}":`, error);
    return null;
  }
}

export async function buildPageMetadata(
  slug: string,
  defaults: MetadataDefaults
): Promise<Metadata> {
  const meta = await getPageMetadata(slug);

  return {
    title: meta?.title ?? defaults.title,
    description: meta?.description ?? defaults.description,
    openGraph: {
      title: meta?.ogTitle ?? meta?.title ?? defaults.title,
      description: meta?.ogDescription ?? meta?.description ?? defaults.description,
      images: meta?.ogImage ? [{ url: meta.ogImage }] : undefined,
    },
  };
}