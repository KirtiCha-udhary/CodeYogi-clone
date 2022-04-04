import React from 'react';
import MainLayout from './MainLayout';
import lectures from './mockdata/lectures';

function LectureListPage() {
	return (
		<div className="grow">
			<h1 className="text-xl font-semibold mb-5 mt-10">Session List</h1>
			<div className="bg-gray-50 flex px-4 py-4 items-center justify-center mt-2 sm:px-6 lg:px-8 ">
				<div className="w-full max-w-4x1 space-y-8">
					<ul className="w-full relative">
						<li className="w-full border-2 border-gray-100 bg-white rounded-lg shadow-lg mb-5">
							<div className="flex items-center justify-between w-full p-2 space-x-6">
								<div className="flex-1">
									<div className="flex flex-col justify-between sm:items-center sm:flex-row">
										<div className="mb-2 sm:mb-0">
											<h3 className="font-medium text-gray-900 truncate">
												Lecture #1
												<span className="text-gray-500">
													{' '}
													(Mon Dec 13 2021)
												</span>
											</h3>
											<p className="mt-1 text-sm text-gray-500 truncate">
												Duration: 03:00:10
											</p>
										</div>
									</div>
									<div className="wmde-markdown wmde-markdown-color flex-shrink-0 inline-block mt-3 p-1 py-2 text-sm font-medium">
										<ul className=" px-6">
											<li>Basic HTML</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="flex justify-center divide-x divide-gray-200">
								<div className="flex flex-1 px-2 sm:px-8">
									<a className="relative inline-flex items-center text-center w-full justify-center py-4 -mr-px text-sm font-medium text-gray-500 border border-transparent rounded-bl-lg hover:text-gray-700">
                     <img className="h-4 w-4 mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/External.svg/800px-External.svg.png" />
										Watch/Download Recording
									</a>
								</div>
							</div>
						</li>

            <li className="w-full border-2 border-gray-100 bg-white rounded-lg shadow-lg mb-5">
							<div className="flex items-center justify-between w-full p-2 space-x-6">
								<div className="flex-1">
									<div className="flex flex-col justify-between sm:items-center sm:flex-row">
										<div className="mb-2 sm:mb-0">
											<h3 className="font-medium text-gray-900 truncate">
												Lecture #2
												<span className="text-gray-500">
													{' '}
													(Wed Dec 15 2021)
												</span>
											</h3>
											<p className="mt-1 text-sm text-gray-500 truncate">
												Duration: 03:10:50
											</p>
										</div>
									</div>
									<div className="wmde-markdown wmde-markdown-color flex-shrink-0 inline-block mt-3 p-1 py-2 text-sm font-medium">
										<ul className=" px-6">
											<li>Basic HTML & CSS</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="flex justify-center divide-x divide-gray-200">
								<div className="flex flex-1 px-2 sm:px-8">
									<a className="relative inline-flex items-center text-center w-full justify-center py-4 -mr-px text-sm font-medium text-gray-500 border border-transparent rounded-bl-lg hover:text-gray-700">
                    <img className="h-4 w-4 mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/External.svg/800px-External.svg.png" />
										Watch/Download Recording
									</a>
								</div>
							</div>
						</li>

            <li className="w-full border-2 border-gray-100 bg-white rounded-lg shadow-lg mb-5">
							<div className="flex items-center justify-between w-full p-2 space-x-6">
								<div className="flex-1">
									<div className="flex flex-col justify-between sm:items-center sm:flex-row">
										<div className="mb-2 sm:mb-0">
											<h3 className="font-medium text-gray-900 truncate">
												Lecture #3
												<span className="text-gray-500">
													{' '}
													(Mon Dec 13 2021)
												</span>
											</h3>
											<p className="mt-1 text-sm text-gray-500 truncate">
												Duration: 03:40:00
											</p>
										</div>
									</div>
									<div className="wmde-markdown wmde-markdown-color flex-shrink-0 inline-block mt-3 p-1 py-2 text-sm font-medium">
										<ul className=" px-6">
											<li>Flex grow and shrink</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="flex justify-center divide-x divide-gray-200">
								<div className="flex flex-1 px-2 sm:px-8">
									<a className="relative inline-flex items-center text-center w-full justify-center py-4 -mr-px text-sm font-medium text-gray-500 border border-transparent rounded-bl-lg hover:text-gray-700">
                     <img className="h-4 w-4 mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/External.svg/800px-External.svg.png" />
                     
										Watch/Download Recording
									</a>
								</div>
							</div>
						</li>

            <li className="w-full border-2 border-gray-100 bg-white rounded-lg shadow-lg mb-5">
							<div className="flex items-center justify-between w-full p-2 space-x-6">
								<div className="flex-1">
									<div className="flex flex-col justify-between sm:items-center sm:flex-row">
										<div className="mb-2 sm:mb-0">
											<h3 className="font-medium text-gray-900 truncate">
												Lecture #4
												<span className="text-gray-500">
													{' '}
													(Mon Dec 13 2021)
												</span>
											</h3>
											<p className="mt-1 text-sm text-gray-500 truncate">
												Duration: 03:20:10
											</p>
										</div>
									</div>
									<div className="wmde-markdown wmde-markdown-color flex-shrink-0 inline-block mt-3 p-1 py-2 text-sm font-medium">
										<ul className=" px-6">
											<li>Introduction to Tailwind CSS</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="flex justify-center divide-x divide-gray-200">
								<div className="flex flex-1 px-2 sm:px-8">
									<a className="relative inline-flex items-center text-center w-full justify-center py-4 -mr-px text-sm font-medium text-gray-500 border border-transparent rounded-bl-lg hover:text-gray-700">
                    <img className="h-4 w-4 mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/External.svg/800px-External.svg.png" />
										Watch/Download Recording
									</a>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default LectureListPage;
