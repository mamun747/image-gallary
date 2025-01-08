export type Tcategory = "photo" | "vector"
export interface IImage {
    id: number;
    name: string;
    url: string;
    category: Tcategory;
    likes: number;
    shares: number;
  }