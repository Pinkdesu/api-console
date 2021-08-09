export interface IFormValues {
   request: string;
   response?: string;
}

export interface IRequestItem {
   id: number;
   title: string;
   request: string;
   response: string;
   status: 'error' | 'success';
}

export interface IState {
   requestHistory: IRequestItem[];
   currentId: number;
   lastId: number;
}