import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainView from '../MainView/MainView';
import CatalogueView from '../../pages/CatalogueView/CatalogueView';
import FiltersView from '../../pages/FiltersView/FiltersView';

const routesConfig = [
  { path: '/catalogue', Component: <CatalogueView /> },
  { path: '/filters', Component: <FiltersView /> },
];

const AppRoutes = () => {
  return (
		<Routes>
      <Route element={<MainView />}>
        {routesConfig.map(({ path, Component }, key) => (
          <Route key={key} path={path} element={Component} />
      ))}
      </Route>
      <Route path="*" element={<Navigate to="/catalogue" replace />} />
		</Routes>
	);
}

export default AppRoutes;