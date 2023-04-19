export interface ILoginParams {
  user_art: string
  pwd_art: string | number
}
export interface ILoginApi {
  login: (params: ILoginParams)=> Promise<any>
}