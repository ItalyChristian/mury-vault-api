export type Genre = "r&b"| "pop"| "rock"| "indie"| "folk"| "jazz"

export interface Discovery {
  type: Genre;
  name: string;
  album: string;
  year: string;
  favTrack: string;
  rating: number;
  image: string;
}

export const data: Discovery[] = [
  {
    type: "r&b",
    name: "Khamari",
    album: "A Brief Nirvana",
    year: "2023",
    favTrack: "Doctor, My Eyes",
    rating: 10,
    image: 'khamari-album-cover.jpg',
  },
  {
    type: "pop",
    name: "Olivia Dean",
    album: "Messy",
    year: "2023",
    favTrack: "Dive",
    rating: 10,
    image: 'olivia-dean-album-cover.avif',
  },
  {
    type: "rock",
    name: "Maggie Lindemann",
    album: "HEADSPLIT",
    year: "2024",
    favTrack: "hostage",
    rating: 10,
    image: 'maggie-lindemann-album-cover.jpg',
  },
  {
    type: "indie",
    name: "The Fratellis",
    album: "In Our Own Sweet Time",
    year: "2018",
    favTrack: "Starcrossed Lovers",
    rating: 10,
    image: 'the-fratellis-album-cover.jpg',
  },
  {
    type: "folk",
    name: "Vance Joy",
    album: "Dream Your Life Away",
    year: "2014",
    favTrack: "Riptide",
    rating: 10,
    image: 'vance-joy-album-cover.avif',
  },
  {
    type: "jazz",
    name: "Ella Fitzgerald",
    album: "Get Happy!",
    year: "1959",
    favTrack: "Blue Skies",
    rating: 10,
    image: 'ella-fitzgerald-album-cover.jpg',
  },
];
