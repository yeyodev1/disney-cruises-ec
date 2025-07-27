export interface CruceroContent {
  _uid: string;
  barco: string;
  puerto: string;
  region: string;
  titulo: string;
  component: string;
}

export interface CruceroStory {
  name: string;
  created_at: string;
  published_at: string;
  updated_at: string;
  id: number;
  uuid: string;
  content: CruceroContent;
  slug: string;
  full_slug: string;
  sort_by_date: null;
  position: number;
  tag_list: string[];
  is_startpage: boolean;
  parent_id: number;
  meta_data: null;
  group_id: string;
  first_published_at: string;
  release_id: null;
  lang: string;
  path: null;
  alternates: any[];
  default_full_slug: null;
  translated_slugs: null;
}

export interface CruceroResponse {
  story: CruceroStory;
  cv: number;
  rels: any[];
  links: any[];
}

export interface CrucerosListResponse {
  stories: CruceroStory[];
  cv: number;
  rels: any[];
  links: any[];
}

// Tipos para filtros
export interface CruceroFilters {
  region?: string;
  puerto?: string;
  barco?: string;
}

// Enum para regiones disponibles
export enum RegionCrucero {
  ALASKA = 'alaska',
  CARIBE = 'caribe',
  MEDITERRANEO = 'mediterraneo',
  BAHAMAS = 'bahamas'
}