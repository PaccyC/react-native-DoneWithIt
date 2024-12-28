export type Image = {
    url: string;
    name: string;
    type: string;
  };
  

export type Listing = {
    id: number;
    title: string;
    price: string;
    images: Image[];
    description: string;
    location?: Object | null;
    category: { value: string; label: string };
  };

