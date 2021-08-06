export interface IAuth {
   login: string,
   sublogin: string,
   password: string
}

export interface IUser {
   sessionKey: string,
   login: string,
   sublogin?: string,
}

export interface IState {
   user: IUser;
   loading: boolean;
   isAuth: boolean;
   error: string | null;
}

export interface IError {
   id: string;
   explain: string;
}