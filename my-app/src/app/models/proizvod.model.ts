import { IKomentar } from './komentar.model'

export interface IProizvod {
    id: number;
    naziv: string;
    slika: string;
    cijena: number;
    opis: string;
    favorite: boolean;
    komentari: IKomentar[];
}