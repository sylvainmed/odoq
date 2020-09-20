/**
 * interface représentant un pageable permettant de faire de la pagination des données
 */
import {Sort} from './sort.model';

export interface Pageable {

  offset: number;

  pageNumber: number;

  pageSize: number;

  paged: true;

  sort: Sort;

  unpaged: boolean;

}
