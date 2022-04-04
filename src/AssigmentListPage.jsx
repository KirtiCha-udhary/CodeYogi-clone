import React from 'react';
import MainLayout from './MainLayout';
import assigmentData from './mockdata/assigment';
import {Link, } from 'react-router-dom';
import AssigmentDetailPage from './AssigmentDetailPage';


function AssigmentListPage() {
	return (
		<div>
     
			<h1 className="text-xl font-semibold mb-5 mt-10">Assigment List</h1>
			<div className="bg-gray-50 flex px-4 py-4 items-center justify-center mt-2 sm:px-6 lg:px-8 ">
				<div className="w-full max-w-4x1 space-y-8">
           
					<ul className="w-full relative">
            <Link to="/assigments/1/details">
						<li className=" border-2 border-gray-100 bg-white rounded-lg shadow-lg mb-5">
							<div className="flex items-center justify-between w-full p-2 space-x-6 ml-4">
								<div className="flex-1">
									<a>
                    
										<div className="flex flex-col justify-between sm:items-center sm:flex-row">
											<div className="mb-2 sm:mb-0">
												<h3 className="font-medium text-gray-900 truncate">
                          #1 Create simple HTML page
													<span className="text-gray-500">
														{' '}
														(Sun Mar 27 2022)
													</span>
												</h3>
												<div className="my-2">
													<p className="mt-1 text-sm text-red-700 truncate">
														Due Date:Wed Mar 30 2022
													</p>
												</div>
											</div>
											<p className="text-red-600 font-semibold px-2 py-4 whitespace-nowrap block mr-5">
												Not Submitted
											</p>
										</div>
									</a>
									<div className="wmde-markdown wmde-markdown-color flex-shrink-0 inline-block mt-3 p-1 py-2 text-sm font-medium" />
								</div>
							</div>
							<div className="flex justify-center divide-x divide-gray-200">
								<div className="flex flex-1 px-2 sm:px-8">
									<a className="relative inline-flex items-center text-center w-full justify-center py-4 -mr-px text-sm font-medium text-green-600 border border-transparent rounded-bl-lg hover:text-gray-700">
										Submit
									</a>
								</div>
							</div>
						</li>
              </Link>
            <Link to="/assigments/2/details">
            <li className="w-full border-2 border-gray-100 bg-white rounded-lg shadow-lg mb-5">
							<div className="flex items-center justify-between w-full p-2 space-x-6 ml-4">
								<div className="flex-1">
									<a>
										<div className="flex flex-col justify-between sm:items-center sm:flex-row">
											<div className="mb-2 sm:mb-0">
												<h3 className="font-medium text-gray-900 truncate">
                         #2 Devslane client page
													<span className="text-gray-500">
														{' '}
														(Fri Jan 21 2022)
													</span>
												</h3>
												<div className="my-2">
													<p className="mt-1 text-sm text-red-700 truncate">
														Due Date:Wed Jan 22 2022
													</p>
												</div>
											</div>
											<p className="text-red-600 font-semibold px-2 py-4 whitespace-nowrap block mr-5">
												Not Submitted
											</p>
										</div>
									</a>
									<div className="wmde-markdown wmde-markdown-color flex-shrink-0 inline-block mt-3 p-1 py-2 text-sm font-medium" />
								</div>
							</div>
							<div className="flex justify-center divide-x divide-gray-200">
								<div className="flex flex-1 px-2 sm:px-8">
									<a className="relative inline-flex items-center text-center w-full justify-center py-4 -mr-px text-sm font-medium text-green-600 border border-transparent rounded-bl-lg hover:text-gray-700">
										Submit
									</a>
								</div>
							</div>
             </li>
              </Link>
            <Link to="/assigments/3/details">
            <li className="w-full border-2 border-gray-100 bg-white rounded-lg shadow-lg mb-5">
							<div className="flex items-center justify-between w-full p-2 space-x-6 ml-4">
								<div className="flex-1">
									<a>
										<div className="flex flex-col justify-between sm:items-center sm:flex-row">
											<div className="mb-2 sm:mb-0">
												<h3 className="font-medium text-gray-900 truncate">
                        #3 Create simple CSS page
													<span className="text-gray-500">
														{' '}
														(Mon Jan 25 2022)
													</span>
												</h3>
												<div className="my-2">
													<p className="mt-1 text-sm text-red-700 truncate">
														Due Date:Wed jan 27 2022
													</p>
												</div>
											</div>
											<p className="text-red-600 font-semibold px-2 py-4 whitespace-nowrap block mr-5">
												Not Submitted
											</p>
										</div>
									</a>
									<div className="wmde-markdown wmde-markdown-color flex-shrink-0 inline-block mt-3 p-1 py-2 text-sm font-medium" />
								</div>
							</div>
							<div className="flex justify-center divide-x divide-gray-200">
								<div className="flex flex-1 px-2 sm:px-8">
									<a className="relative inline-flex items-center text-center w-full justify-center py-4 -mr-px text-sm font-medium text-green-600 border border-transparent rounded-bl-lg hover:text-gray-700">
										Submit
									</a>
								</div>
							</div>
              </li>
              </Link>
            <Link to="/assigments/4/details">
            <li className="w-full border-2 border-gray-100 bg-white rounded-lg shadow-lg mb-5">
							<div className="flex items-center justify-between w-full p-2 space-x-6 ml-4">
								<div className="flex-1">
									<a>
										<div className="flex flex-col justify-between sm:items-center sm:flex-row">
											<div className="mb-2 sm:mb-0">
												<h3 className="font-medium text-gray-900 truncate">
                         #4 Tailwind CSS
													<span className="text-gray-500">
														{' '}
														(Wed Jan 27 2022)
													</span>
												</h3>
												<div className="my-2">
													<p className="mt-1 text-sm text-red-700 truncate">
														Due Date:Fri Jan 29 2022
													</p>
												</div>
											</div>
											<p className="text-red-600 font-semibold px-2 py-4 whitespace-nowrap block mr-5">
												Not Submitted
											</p>
										</div>
									</a>
									<div className="wmde-markdown wmde-markdown-color flex-shrink-0 inline-block mt-3 p-1 py-2 text-sm font-medium" />
								</div>
							</div>
							<div className="flex justify-center divide-x divide-gray-200">
								<div className="flex flex-1 px-2 sm:px-8">
									<a className="relative inline-flex items-center text-center w-full justify-center py-4 -mr-px text-sm font-medium text-green-600 border border-transparent rounded-bl-lg hover:text-gray-700">
										Submit
									</a>
								</div>
							</div>
              </li>
              </Link>
						</ul>
          
					</div>
			</div>
        
		</div>
					
	);
}

export default AssigmentListPage;
