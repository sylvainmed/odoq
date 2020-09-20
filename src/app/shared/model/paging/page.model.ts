/**
 * Interface représentant le retour d'une pagination d'élements
 */
import {Pageable} from './pageable.model';
import {Sort} from './sort.model';

export interface Page<T> {

  content: T[];

  empty: boolean;

  first: boolean;

  last: boolean;

  number: number;

  numberOfElements: number;

  pageable: Pageable;

  sort: Sort;

  size: number;

  totalElements: number;

  totalPages: number;
}
