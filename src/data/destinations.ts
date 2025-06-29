// src/data/destinations.ts

export interface Destination {
  ID: string
  DESTINO: string
  REGION: string
  PUERTO: string
  SHIP: string // <-- 1. Añadimos la nueva propiedad
}

export const allDestinations: Destination[] = [
  // --- 2. Añadimos el dato del barco a cada objeto ---
  {
    ID: 'AK01',
    DESTINO: '5-Night Alaskan Cruise',
    REGION: 'Alaska',
    PUERTO: 'Vancouver',
    SHIP: 'Disney Wonder',
  },
  {
    ID: 'AK02',
    DESTINO: '7-Night Alaskan Cruise',
    REGION: 'Alaska',
    PUERTO: 'Vancouver',
    SHIP: 'Disney Wonder',
  },

  {
    ID: 'BH01',
    DESTINO: '3-Night Bahamian Cruise',
    REGION: 'Bahamas',
    PUERTO: 'Port Canaveral, FL',
    SHIP: 'Disney Wish',
  },
  {
    ID: 'BH02',
    DESTINO: '4-Night Bahamian Cruise',
    REGION: 'Bahamas',
    PUERTO: 'Fort Lauderdale, FL',
    SHIP: 'Disney Magic',
  },
  {
    ID: 'BH03',
    DESTINO: '5-Night Bahamian Cruise',
    REGION: 'Bahamas',
    PUERTO: 'Port Canaveral, FL',
    SHIP: 'Disney Fantasy',
  },

  {
    ID: 'CC01',
    DESTINO: '4-Night Baja Cruise',
    REGION: 'California Coast',
    PUERTO: 'San Diego, CA',
    SHIP: 'Disney Magic',
  },
  {
    ID: 'CC02',
    DESTINO: '7-Night Mexican Riviera',
    REGION: 'California Coast',
    PUERTO: 'San Diego, CA',
    SHIP: 'Disney Wonder',
  },

  {
    ID: 'CB01',
    DESTINO: '7-Night Eastern Caribbean',
    REGION: 'Caribbean',
    PUERTO: 'Port Canaveral, FL',
    SHIP: 'Disney Fantasy',
  },
  {
    ID: 'CB02',
    DESTINO: '7-Night Western Caribbean',
    REGION: 'Caribbean',
    PUERTO: 'Port Canaveral, FL',
    SHIP: 'Disney Wish',
  },
  {
    ID: 'CB03',
    DESTINO: '6-Night Western Caribbean',
    REGION: 'Caribbean',
    PUERTO: 'Galveston, TX',
    SHIP: 'Disney Magic',
  },

  {
    ID: 'EU01',
    DESTINO: '7-Night Mediterranean Cruise',
    REGION: 'Europe',
    PUERTO: 'Barcelona, Spain',
    SHIP: 'Disney Dream',
  },
  {
    ID: 'EU02',
    DESTINO: '9-Night Greek Isles Cruise',
    REGION: 'Europe',
    PUERTO: 'Civitavecchia (Rome), Italy',
    SHIP: 'Disney Dream',
  },
  {
    ID: 'EU03',
    DESTINO: '7-Night British Isles Cruise',
    REGION: 'Europe',
    PUERTO: 'Southampton, UK',
    SHIP: 'Disney Dream',
  },
]
