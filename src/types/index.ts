export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail?: string;
}

export interface Platform {
  id: string;
  name: string;
  icon: string;
  videos: Video[];
}
