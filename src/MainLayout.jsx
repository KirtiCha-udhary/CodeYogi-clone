import React from 'react';
import SideBarPage from './SideBarPage';
import { Outlet } from 'react-router-dom';

function MainLayout(props) {
	return (
		<div className="flex items-stretch">
			<SideBarPage />
			<div className="p-12 bg-gray-100 grow">
				<Outlet />
			</div>
		</div>
	);
}

export default MainLayout;
