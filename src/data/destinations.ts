// src/data/destinations.ts

export interface Destination {
  ID: string
  DESTINO: string
  REGION: string
  PUERTO: string // <-- 1. Añadimos la nueva propiedad
}

export const allDestinations: Destination[] = [
  // --- 2. Añadimos el dato del puerto a cada objeto ---
  {
    ID: 'AK01',
    DESTINO: '5-Night Alaskan Cruise from Vancouver',
    REGION: 'Alaska',
    PUERTO: 'Vancouver',
  },
  {
    ID: 'AK02',
    DESTINO: '7-Night Alaskan Cruise from Vancouver',
    REGION: 'Alaska',
    PUERTO: 'Vancouver',
  },
  {
    ID: 'AK03',
    DESTINO: '9-Night Alaskan Cruise with Glacier Viewing',
    REGION: 'Alaska',
    PUERTO: 'Vancouver',
  },

  {
    ID: 'BH01',
    DESTINO: '3-Night Bahamian Cruise from Port Canaveral',
    REGION: 'Bahamas',
    PUERTO: 'Port Canaveral, FL',
  },
  {
    ID: 'BH02',
    DESTINO: '4-Night Bahamian Cruise from Fort Lauderdale',
    REGION: 'Bahamas',
    PUERTO: 'Fort Lauderdale, FL',
  },
  {
    ID: 'BH03',
    DESTINO: '5-Night Bahamian Cruise with 2 Stops at Castaway Cay',
    REGION: 'Bahamas',
    PUERTO: 'Port Canaveral, FL',
  },

  {
    ID: 'CC01',
    DESTINO: '4-Night Baja Cruise from San Diego',
    REGION: 'California Coast',
    PUERTO: 'San Diego, CA',
  },
  {
    ID: 'CC02',
    DESTINO: '7-Night Mexican Riviera from San Diego',
    REGION: 'California Coast',
    PUERTO: 'San Diego, CA',
  },

  {
    ID: 'CB01',
    DESTINO: '7-Night Eastern Caribbean from Port Canaveral',
    REGION: 'Caribbean',
    PUERTO: 'Port Canaveral, FL',
  },
  {
    ID: 'CB02',
    DESTINO: '7-Night Western Caribbean from Port Canaveral',
    REGION: 'Caribbean',
    PUERTO: 'Port Canaveral, FL',
  },
  {
    ID: 'CB03',
    DESTINO: '6-Night Western Caribbean Cruise from Galveston',
    REGION: 'Caribbean',
    PUERTO: 'Galveston, TX',
  },
  {
    ID: 'CB04',
    DESTINO: '5-Night Caribbean Getaway from Miami',
    REGION: 'Caribbean',
    PUERTO: 'Miami, FL',
  },

  {
    ID: 'EU01',
    DESTINO: '7-Night Mediterranean Cruise from Barcelona',
    REGION: 'Europe',
    PUERTO: 'Barcelona, Spain',
  },
  {
    ID: 'EU02',
    DESTINO: '9-Night Greek Isles Cruise from Rome',
    REGION: 'Europe',
    PUERTO: 'Civitavecchia (Rome), Italy',
  },
  {
    ID: 'EU03',
    DESTINO: '11-Night Northern Europe Cruise from Copenhagen',
    REGION: 'Europe',
    PUERTO: 'Copenhagen, Denmark',
  },
  {
    ID: 'EU04',
    DESTINO: '7-Night British Isles Cruise from Southampton',
    REGION: 'Europe',
    PUERTO: 'Southampton, UK',
  },
]
