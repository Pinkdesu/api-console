export interface IFormValues {
   request: string;
   response: string;
}

export interface IRequestItem {
   id: number;
   request: string;
   response: string;
   title: string;
   status: 'error' | 'success';
}

export interface IState {
   requestHistory: IRequestItem[];
   currentId: number | null,
   lastId: number | null;
}