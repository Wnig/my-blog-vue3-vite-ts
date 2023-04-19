export interface IArtParams {
  pageNum: number,
  pageSize: number,
  status_art: number,
  type_art: string,
}
export interface IArtsParams {
  status_art: number,
}
export interface IArtDetailParams {
  id_art: number | string,
  status_art: number
}


export interface IArtApi {
  artList: (params: IArtParams)=> Promise<any>
  artsList: (params: IArtsParams)=> Promise<any>
  artDetail: (params: IArtDetailParams)=> Promise<any>
}