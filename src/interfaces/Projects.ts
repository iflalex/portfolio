export interface ItemModel {
  name:string,
  background:string,
  images: string[],
  category:string
}

export interface ProjectsModel  {
  items: Array<ItemModel>,
  sizeContainer:number
}