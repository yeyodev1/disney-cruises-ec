/**
 * @file itineraries.ts
 * @description Define todos los itinerarios de cruceros disponibles.
 * Cada itinerario se vincula a un barco a través de `shipId`.
 */

export interface Itinerary {
  id: string
  name: string
  region: string
  port: string
  shipId: string // ✅ USA un ID para referenciar el barco, no un string con el nombre.
}

export const allItineraries: Itinerary[] = [
  {
    id: 'AK01',
    name: '5-Night Alaskan Cruise',
    region: 'Alaska',
    port: 'Vancouver',
    shipId: 'disney-wonder',
  },
  {
    id: 'AK02',
    name: '7-Night Alaskan Cruise',
    region: 'Alaska',
    port: 'Vancouver',
    shipId: 'disney-wonder',
  },
  {
    id: 'BH01',
    name: '3-Night Bahamian Cruise',
    region: 'Bahamas',
    port: 'Port Canaveral, FL',
    shipId: 'disney-wish',
  },
  {
    id: 'BH02',
    name: '4-Night Bahamian Cruise',
    region: 'Bahamas',
    port: 'Fort Lauderdale, FL',
    shipId: 'disney-magic',
  },
  {
    id: 'BH03',
    name: '5-Night Bahamian Cruise',
    region: 'Bahamas',
    port: 'Port Canaveral, FL',
    shipId: 'disney-fantasy',
  },
  {
    id: 'CC01',
    name: '4-Night Baja Cruise',
    region: 'California Coast',
    port: 'San Diego, CA',
    shipId: 'disney-magic',
  },
  {
    id: 'CC02',
    name: '7-Night Mexican Riviera',
    region: 'California Coast',
    port: 'San Diego, CA',
    shipId: 'disney-wonder',
  },
  {
    id: 'CB01',
    name: '7-Night Eastern Caribbean',
    region: 'Caribbean',
    port: 'Port Canaveral, FL',
    shipId: 'disney-fantasy',
  },
  {
    id: 'CB02',
    name: '7-Night Western Caribbean',
    region: 'Caribbean',
    port: 'Port Canaveral, FL',
    shipId: 'disney-wish',
  },
  {
    id: 'CB03',
    name: '6-Night Western Caribbean',
    region: 'Caribbean',
    port: 'Galveston, TX',
    shipId: 'disney-magic',
  },
  {
    id: 'EU01',
    name: '7-Night Mediterranean Cruise',
    region: 'Europe',
    port: 'Barcelona, Spain',
    shipId: 'disney-dream',
  },
  {
    id: 'EU02',
    name: '9-Night Greek Isles Cruise',
    region: 'Europe',
    port: 'Civitavecchia (Rome), Italy',
    shipId: 'disney-dream',
  },
  {
    id: 'EU03',
    name: '7-Night British Isles Cruise',
    region: 'Europe',
    port: 'Southampton, UK',
    shipId: 'disney-dream',
  },
]
