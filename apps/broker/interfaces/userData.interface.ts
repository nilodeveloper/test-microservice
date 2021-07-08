import { Profile }  from './profile.interface';
export interface UserData {
    dataCadastro: number, //TODO colocar timestamp
    dataUltimoLogin: number, //TODO colocar timestamp
    token: string,
    idPrestador: number,
    nomeFantasia: string,
    name: string,
    login:string,
    isAssociado: boolean,
    permiteConferencia: boolean,
    profiles: Profile[],
    canal: number
  }