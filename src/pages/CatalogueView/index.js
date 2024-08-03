import { lazy } from "react";
const CatalogueCard = lazy(() => import('./CatalogueCard/CatalogueCard'));
const CatalogueList = lazy(() => import('./CatalogueList/CatalogueList'));

export { CatalogueCard, CatalogueList };