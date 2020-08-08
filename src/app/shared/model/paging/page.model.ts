/**
 * Interface représentant le retour d'une pagination d'élements
 */
export interface Page<T> {
  /**
   * la liste des éléments paginés
   */
  content: Array<T>;

  /**
   * le number total d'éléments retournés par la requete
   */
  totalElements: number;

  /**
   * nombre total de pages d'éléments
   */
  totalPages: number;
}
