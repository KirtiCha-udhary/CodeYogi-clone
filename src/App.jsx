import React from 'react';
import AssigmentListPage from './AssigmentListPage';
import LectureListPage from './LectureListPage';
import QuizPage from './QuizPage';
import { Navigate, Routes, Route } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import Logout from './Logout';
import MainLayout from './MainLayout';
import NotFound from './NotFound';
import AssigmentDetailPage from './AssigmentDetailPage';
import StudentList from './StudentList';

function App() {
	return (
		<Routes className="sticky top-0">
			<Route path="/" element={<Navigate to="/lectures" />} />
			<Route path="quiz" element={<QuizPage />} />
			<Route path="/" element={<MainLayout />}>
				<Route path="lectures" element={<LectureListPage />} />
				<Route path="assigments" element={<AssigmentListPage />} />
<Route path="students" element={<StudentList />} />
				<Route path="profile" element={<ProfilePage />} />
        <Route path="assigments/:assigmentNumber/details" element={<AssigmentDetailPage />} />
			</Route>
			<Route path="logout" element={<Logout />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
