import axios from 'axios';

export const fetcher = (url: string) => axios.get(url).then((res: { data: any; }) => res.data);