import React from 'react';
import { Link } from 'react-router-dom';

function SideBarPage() {
	return (
		<div className="pr-2 bg-gray-800 w-52 flex flex-col justify-between items-stretch h-screen sticky top-0">
			<div className="flex flex-col ml-4 ">
				<h1 className="text-white font-extrabold text-3xl pt-6 mb-5">
					CodeYogi
				</h1>
				
					<Link to="/quiz" className="text-gray-300 hover:bg-gray-700 hover:text-white group rounded-md undefined px-2 py-2 items-center font-medium text-sm">
            <span className="flex">
						<img
							className="h-4 w-4 mr-3"
							src="https://cdn.w600.comps.canstockphoto.com/online-test-color-icon-vector-eps-vectors_csp91602434.jpg"
						/>
              
					Quiz
            </span>
            	
					</Link>
			

				<Link to="/lectures" className="text-gray-300 hover:bg-gray-700 hover:text-white group rounded-md undefined px-2 py-2 items-center font-medium text-sm">
					{' '}
          <span className="flex">
					<img
						className="w-4 h-4 mr-3"
						src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-teaching-icon-png-image_4253101.jpg"
					/>
					Lectures
            </span>
				</Link>
				<Link to="/assigments" className="text-gray-300 hover:bg-gray-700 hover:text-white group rounded-md undefined px-2 py-2 items-center font-medium text-sm">
					{' '}
          <span className="flex">
					<img
						className="w-4 h-4 mr-3"
						src="https://cdn.pixabay.com/photo/2021/03/03/14/25/icon-6065420_960_720.png"
					/>
					Assigments
            </span>
          </Link>
        
			</div>
			<div className="flex flex-col ml-4 mb-5">
				<Link to="/profile" className="text-gray-300 hover:bg-gray-700 hover:text-white group rounded-md undefined px-2 py-2 items-center font-medium text-sm">
					{' '}
          <span className="flex">
					<img
						className="w-4 h-4 mr-3"
						src="https://png.pngtree.com/png-clipart/20210711/original/pngtree-blank-whatsapp-bussiness-man-photo-profile-png-image_6512221.jpg"
					/>
					Profile
            </span>
				</Link>
				<Link to="/logout" className="text-gray-300 hover:bg-gray-700 hover:text-white group rounded-md undefined px-2 py-2 items-center font-medium text-sm">
					{' '}
          <span className="flex">
					<img
						className="w-5 h-5 mr-3"
						src="https://png.pngtree.com/png-clipart/20190517/original/pngtree-vector-logout-icon-png-image_4221908.jpg"
					/>
					Logout
            </span>
				</Link>
        <Link to="/details"></Link>
			</div>
		</div>
	);
}

export default SideBarPage;
