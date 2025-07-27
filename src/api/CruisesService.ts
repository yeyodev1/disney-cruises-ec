import type {
  CruceroResponse,
  CrucerosListResponse,
  CruceroFilters,
  RegionCrucero,
} from '../types/cruceros'
import Storyblok from './StoryblokBaseService'

export default class CruisesService {
  async getCruceros(filters?: CruceroFilters): Promise<CrucerosListResponse> {
    const filterQuery: any = {}

    if (filters?.region) {
      filterQuery['content.region'] = {
        in: filters.region,
      }
    }

    if (filters?.puerto) {
      filterQuery['content.puerto'] = {
        in: filters.puerto,
      }
    }

    if (filters?.barco) {
      filterQuery['content.barco'] = {
        in: filters.barco,
      }
    }

    const response = await Storyblok.get('cdn/stories', {
      version: 'published',
      starts_with: 'crucero',
      filter_query: Object.keys(filterQuery).length > 0 ? filterQuery : undefined,
    })

    return response.data
  }

  async getCruceroBySlug(slug: string): Promise<CruceroResponse> {
    const response = await Storyblok.get(`cdn/stories/crucero/${slug}`, {
      version: 'published',
    })

    return response.data
  }

  async getAllCruceros(): Promise<CrucerosListResponse> {
    const response = await Storyblok.get('cdn/stories', {
      version: 'published',
      starts_with: 'crucero',
    })

    return response.data
  }

  async getCrucerosByRegion(region: RegionCrucero): Promise<CrucerosListResponse> {
    return this.getCruceros({ region })
  }
}
