import type { CruiseShip } from '@/data/cruices'
import type { Itinerary } from '@/data/itineraries'
export interface EnrichedItinerary extends Itinerary {
  ship: CruiseShip | undefined
}
