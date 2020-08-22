import {Theme} from './theme.model';
import {Author} from './author.model';

export interface Quote {

  /** identifiant */
  id: number;

  /** date de création de l'objet en base */
  dateCreation: Date;

  /** contenu */
  content: string;

  /** Date à l'origine de la quote */
  date?: Date;

  /** auteur ou speaker de la quote */
  author: Author;

  /** source de la quote */
  source?: string;

  /** Liste des thèmes dans lesquels ranger la quote */
  themes?: Array<Theme>;

  /** Liste des tags */
  tags?: Array<string>;

  /** Nombre de upvote ou downvote */
  upvote: number;

}
