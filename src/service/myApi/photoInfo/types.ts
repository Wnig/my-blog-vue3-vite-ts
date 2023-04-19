export interface IPhotoParams {
  pageNum: number,
  pageSize: number,
}

export interface IPhotoApi {
  getBlogPhotoInfo: (params: IPhotoParams)=> Promise<any>
}