

export interface ItemModel {
  name:string,
  background:string,
  technologies:string,
  link?:string,
  images: string[],
  category:string
}

export interface ProjectsModel  {
  items: Array<ItemModel>,
  active:boolean,
  pictureActive:string,
}