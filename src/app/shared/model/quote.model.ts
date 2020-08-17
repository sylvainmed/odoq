import {Theme} from './theme.model';

export interface Quote {

  /** identifiant */
  id: number;

  /** date de création de l'objet en base */
  dateCreation: Date;

  /** titre de la quote */
  title?: string;

  /** sous titre */
  subTitle?: string;

  /** contenu */
  content: string;

  /** Date à l'origine de la quote */
  date?: Date;

  /** auteur ou speaker de la quote */
  author: string;

  /** source de la quote */
  source?: string;

  /** Liste des thèmes dans lesquels ranger la quote */
  theme?: Array<Theme>;

  /** Liste des tags */
  tags?: Array<string>;

  /** Nombre de upvote ou downvote */
  upvote: number;

}
