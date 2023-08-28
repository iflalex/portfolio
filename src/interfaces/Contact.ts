export default interface Contact {
  [name:string]:Boolean
}

export type dataMail = {
  [name:string]: string | undefined
}

export type Mail = {
  data: dataMail,
  template_id:string
}
