export interface IImage {
    id: number;
    name: string;
    url: string;
    category: "photo" | "vector";
    likes: number;
    shares: number;
  }