export interface IComment {
    userName: string;
    email: string;
    text: string;
}

export interface IPost {
    title: string;
    text: string;
    path: number;
    id: number;
}

export interface ILoaderProps{
    text?: string;
    display?: string;
}