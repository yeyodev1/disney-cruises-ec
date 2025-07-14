/**
 * @file cruiseShips.ts
 * @description Fuente única de verdad para la información de los barcos de Disney Cruise Line.
 * Centralizar los datos aquí permite una fácil actualización y mantenimiento.
 * Las imágenes son enlaces directos a los assets oficiales para la mejor calidad.
 */

// Principio de TypeScript: Definimos una interfaz estricta para asegurar la consistencia de los datos.
export interface CruiseShip {
  id: string // Identificador único, ideal para 'key' en v-for y URLs.
  name: string
  tagline: string // Frase corta y atractiva para la tarjeta.
  description: string // Descripción más detallada.
  imageUrl: string // URL de la imagen principal del barco.
  highlights: {
    icon: string
    label: string
    value: string
  }[]
  gallery: {
    id: number
    url: string
    alt: string
  }[]
}

// Exportamos el array de datos para que sea importable desde cualquier componente.
export const cruiseShips: CruiseShip[] = [
  {
    id: 'disney-magic',
    name: 'Disney Magic',
    tagline: 'El barco original donde la magia zarpó por primera vez.',
    description:
      'Un barco clásico que combina la nostalgia con las últimas comodidades, ofreciendo itinerarios encantadores y entretenimiento para todas las edades.',
    imageUrl:
      'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/magic/1205ZX_1397MS-16x9.jpg?2023-03-17T21:40:55+00:00',
    highlights: [
      { icon: '🗓️', label: 'Inaugurado', value: '1998' },
      { icon: '👥', label: 'Huéspedes', value: '2,713' },
      { icon: '⚓', label: 'Tonelaje', value: '83,969' },
    ],
    gallery: [
      {
        id: 1,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/magic/1205ZX_1397MS-16x9.jpg?2023-03-17T21:40:55+00:00',
        alt: 'Vista del Disney Magic 1',
      },
      {
        id: 2,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/magic/1205ZX_1397MS-16x9.jpg?2023-03-17T21:40:55+00:00',
        alt: 'Vista del Disney Magic 2',
      },
      {
        id: 3,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/magic/1205ZX_1397MS-16x9.jpg?2023-03-17T21:40:55+00:00',
        alt: 'Vista del Disney Magic 3',
      },
      {
        id: 4,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/magic/1205ZX_1397MS-16x9.jpg?2023-03-17T21:40:55+00:00',
        alt: 'Vista del Disney Magic 4',
      },
    ],
  },
  {
    id: 'disney-adventure',
    name: 'Disney Adventure',
    tagline: 'Embárcate en una aventura única llena de descubrimientos.',
    description:
      'El barco más aventurero de la flota, diseñado para exploradores intrépidos que buscan experiencias únicas y emocionantes en cada puerto.',
    imageUrl:
      'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/adventure/D125_DH_mv_2-2-A_3529-16x9.jpg?2024-05-02T18:18:23+00:00',
    highlights: [
      { icon: '🗓️', label: 'Inaugurado', value: '2025' },
      { icon: '👥', label: 'Huéspedes', value: '4,000' },
      { icon: '⚓', label: 'Tonelaje', value: '144,000' },
    ],
    gallery: [
      {
        id: 1,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/adventure/D125_DH_mv_2-2-A_3529-16x9.jpg?2024-05-02T18:18:23+00:00',
        alt: 'Vista del Disney Adventure 1',
      },
      {
        id: 2,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/adventure/D125_DH_mv_2-2-A_3529-16x9.jpg?2024-05-02T18:18:23+00:00',
        alt: 'Vista del Disney Adventure 2',
      },
      {
        id: 3,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/adventure/D125_DH_mv_2-2-A_3529-16x9.jpg?2024-05-02T18:18:23+00:00',
        alt: 'Vista del Disney Adventure 3',
      },
      {
        id: 4,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/adventure/D125_DH_mv_2-2-A_3529-16x9.jpg?2024-05-02T18:18:23+00:00',
        alt: 'Vista del Disney Adventure 4',
      },
    ],
  },
  {
    id: 'disney-wonder',
    name: 'Disney Wonder',
    tagline: 'Descubre maravillas en alta mar con estilo y sofisticación.',
    description:
      'Hermano del Disney Magic, el Wonder ofrece sus propias aventuras únicas, incluyendo viajes a Alaska y la Riviera Mexicana, con musicales espectaculares.',
    imageUrl:
      'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/wonder/959939327_0505ZZ_0333DZ-16x9.jpg?2022-03-23T05:13:12+00:00',
    highlights: [
      { icon: '🗓️', label: 'Inaugurado', value: '1999' },
      { icon: '👥', label: 'Huéspedes', value: '2,713' },
      { icon: '⚓', label: 'Tonelaje', value: '84,130' },
    ],
    gallery: [
      {
        id: 1,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/wonder/959939327_0505ZZ_0333DZ-16x9.jpg?2022-03-23T05:13:12+00:00',
        alt: 'Vista del Disney Wonder 1',
      },
      {
        id: 2,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/wonder/959939327_0505ZZ_0333DZ-16x9.jpg?2022-03-23T05:13:12+00:00',
        alt: 'Vista del Disney Wonder 2',
      },
      {
        id: 3,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/wonder/959939327_0505ZZ_0333DZ-16x9.jpg?2022-03-23T05:13:12+00:00',
        alt: 'Vista del Disney Wonder 3',
      },
      {
        id: 4,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/wonder/959939327_0505ZZ_0333DZ-16x9.jpg?2022-03-23T05:13:12+00:00',
        alt: 'Vista del Disney Wonder 4',
      },
    ],
  },
  {
    id: 'disney-dream',
    name: 'Disney Dream',
    tagline: 'Donde los sueños de un crucero de cuento de hadas se hacen realidad.',
    description:
      'Un barco innovador que introdujo la montaña rusa acuática "AquaDuck". El Disney Dream está diseñado para crear recuerdos inolvidables.',
    imageUrl:
      'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/dream/004087-DCL-Q3_Key-Visual-16x9.jpg?2023-02-07T12:44:12+00:00',
    highlights: [
      { icon: '🗓️', label: 'Inaugurado', value: '2011' },
      { icon: '👥', label: 'Huéspedes', value: '4,000' },
      { icon: '⚓', label: 'Tonelaje', value: '129,690' },
    ],
    gallery: [
      {
        id: 1,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/dream/004087-DCL-Q3_Key-Visual-16x9.jpg?2023-02-07T12:44:12+00:00',
        alt: 'Vista del Disney Dream 1',
      },
      {
        id: 2,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/dream/004087-DCL-Q3_Key-Visual-16x9.jpg?2023-02-07T12:44:12+00:00',
        alt: 'Vista del Disney Dream 2',
      },
      {
        id: 3,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/dream/004087-DCL-Q3_Key-Visual-16x9.jpg?2023-02-07T12:44:12+00:00',
        alt: 'Vista del Disney Dream 3',
      },
      {
        id: 4,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/dream/004087-DCL-Q3_Key-Visual-16x9.jpg?2023-02-07T12:44:12+00:00',
        alt: 'Vista del Disney Dream 4',
      },
    ],
  },
  {
    id: 'disney-fantasy',
    name: 'Disney Fantasy',
    tagline: 'Vive tus fantasías en un viaje lleno de imaginación y esplendor.',
    description:
      'Similar al Dream pero con sus propias experiencias únicas, el Fantasy se especializa en itinerarios más largos por el Caribe, ofreciendo entretenimiento inmersivo.',
    imageUrl:
      'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/fantasy/archive/310221943_0108ZZ_0132DR-16x9.jpg?2022-03-23T05:13:10+00:00',
    highlights: [
      { icon: '🗓️', label: 'Inaugurado', value: '2012' },
      { icon: '👥', label: 'Huéspedes', value: '4,000' },
      { icon: '⚓', label: 'Tonelaje', value: '129,750' },
    ],
    gallery: [
      {
        id: 1,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/fantasy/archive/310221943_0108ZZ_0132DR-16x9.jpg?2022-03-23T05:13:10+00:00',
        alt: 'Vista del Disney Fantasy 1',
      },
      {
        id: 2,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/fantasy/archive/310221943_0108ZZ_0132DR-16x9.jpg?2022-03-23T05:13:10+00:00',
        alt: 'Vista del Disney Fantasy 2',
      },
      {
        id: 3,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/fantasy/archive/310221943_0108ZZ_0132DR-16x9.jpg?2022-03-23T05:13:10+00:00',
        alt: 'Vista del Disney Fantasy 3',
      },
      {
        id: 4,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/fantasy/archive/310221943_0108ZZ_0132DR-16x9.jpg?2022-03-23T05:13:10+00:00',
        alt: 'Vista del Disney Fantasy 4',
      },
    ],
  },
  {
    id: 'disney-wish',
    name: 'Disney Wish',
    tagline: 'El castillo en el mar donde los deseos se conceden.',
    description:
      'El barco más nuevo y encantado de la flota, el Wish presenta mundos de Marvel, Star Wars y Frozen como nunca antes, redefiniendo la magia en alta mar.',
    imageUrl:
      'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/wish/0818ZO_1773SD_JB-16x9.jpg?2023-04-13T14:10:41+00:00',
    highlights: [
      { icon: '🗓️', label: 'Inaugurado', value: '2022' },
      { icon: '👥', label: 'Huéspedes', value: '4,000' },
      { icon: '⚓', label: 'Tonelaje', value: '144,000' },
    ],
    gallery: [
      {
        id: 1,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/wish/0818ZO_1773SD_JB-16x9.jpg?2023-04-13T14:10:41+00:00',
        alt: 'Vista del Disney Wish 1',
      },
      {
        id: 2,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/wish/0818ZO_1773SD_JB-16x9.jpg?2023-04-13T14:10:41+00:00',
        alt: 'Vista del Disney Wish 2',
      },
      {
        id: 3,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/wish/0818ZO_1773SD_JB-16x9.jpg?2023-04-13T14:10:41+00:00',
        alt: 'Vista del Disney Wish 3',
      },
      {
        id: 4,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/wish/0818ZO_1773SD_JB-16x9.jpg?2023-04-13T14:10:41+00:00',
        alt: 'Vista del Disney Wish 4',
      },
    ],
  },
  {
    id: 'disney-treasure',
    name: 'Disney Treasure',
    tagline: 'Un viaje épico en busca de la aventura te espera.',
    description:
      'Inspirado en la pasión por los viajes de Walt Disney, este barco celebra la exploración con temáticas de Aladdin, Coco y atracciones de los parques Disney.',
    imageUrl:
      'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/treasure/Disney_Treasure-w-Disclosure-UPDATE-16x9-16x9.jpg?2023-08-25T14:58:51+00:00',
    highlights: [
      { icon: '🗓️', label: 'Inaugurado', value: '2024' },
      { icon: '👥', label: 'Huéspedes', value: '4,000' },
      { icon: '⚓', label: 'Tonelaje', value: '144,000' },
    ],
    gallery: [
      {
        id: 1,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/treasure/Disney_Treasure-w-Disclosure-UPDATE-16x9-16x9.jpg?2023-08-25T14:58:51+00:00',
        alt: 'Vista del Disney Treasure 1',
      },
      {
        id: 2,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/treasure/Disney_Treasure-w-Disclosure-UPDATE-16x9-16x9.jpg?2023-08-25T14:58:51+00:00',
        alt: 'Vista del Disney Treasure 2',
      },
      {
        id: 3,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/treasure/Disney_Treasure-w-Disclosure-UPDATE-16x9-16x9.jpg?2023-08-25T14:58:51+00:00',
        alt: 'Vista del Disney Treasure 3',
      },
      {
        id: 4,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/treasure/Disney_Treasure-w-Disclosure-UPDATE-16x9-16x9.jpg?2023-08-25T14:58:51+00:00',
        alt: 'Vista del Disney Treasure 4',
      },
    ],
  },
  {
    id: 'disney-destiny',
    name: 'Disney Destiny',
    tagline: 'Un viaje mágico donde el destino te lleva a nuevas aventuras.',
    description:
      'Inspirado en los sueños y el destino, este barco celebra la magia de Disney con temáticas de princesas, héroes y las historias más queridas de Disney.',
    imageUrl:
      'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/v/DCL_sh001_R4_xak_wN-3600x2026-D-16x9.jpg?2024-03-18T22:50:00+00:00',
    highlights: [
      { icon: '🗓️', label: 'Inaugurado', value: '2026' },
      { icon: '👥', label: 'Huéspedes', value: '4,000' },
      { icon: '⚓', label: 'Tonelaje', value: '144,000' },
    ],
    gallery: [
      {
        id: 1,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/v/DCL_sh001_R4_xak_wN-3600x2026-D-16x9.jpg?2024-03-18T22:50:00+00:00',
        alt: 'Vista del Disney Destiny 1',
      },
      {
        id: 2,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/v/DCL_sh001_R4_xak_wN-3600x2026-D-16x9.jpg?2024-03-18T22:50:00+00:00',
        alt: 'Vista del Disney Destiny 2',
      },
      {
        id: 3,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/v/DCL_sh001_R4_xak_wN-3600x2026-D-16x9.jpg?2024-03-18T22:50:00+00:00',
        alt: 'Vista del Disney Destiny 3',
      },
      {
        id: 4,
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/ships/v/DCL_sh001_R4_xak_wN-3600x2026-D-16x9.jpg?2024-03-18T22:50:00+00:00',
        alt: 'Vista del Disney Destiny 4',
      },
    ],
  },
]
