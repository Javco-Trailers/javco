export interface InventoryItem {
  _id: string; // MongoDB ObjectId as a string
  year: number; // Manufacturing year
  make: string; // Manufacturer
  model: string; // Model name
  price: string; // Price (as a string)
  detailed_description: string; // Detailed description
  image_ids: string[]; // Array of image ObjectId strings
}
