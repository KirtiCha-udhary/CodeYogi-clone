import React from 'react';
import Student from './Student';

function StudentList() {
	return (
		<div className="bg-white max-w-screen-lg mx-auto flex flex-col justify-around">
			<div className="flex flex-wrap justify-around ml-6 mr-6 ">
				<Student
					name="Lindsay Walton"
					title="Front-end Developer"
					photo="https://images.unsplash.com/photo-1607569490015-7101095605ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
					linkedInLink="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
					twitterLink="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
				/>
				<Student
					name="Courtney Henry"
					title="Designer"
					photo="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
					linkedInLink="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
					twitterLink="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
				/>
				<Student
					name="Tom Cook"
					title="Director,Product Development"
					photo="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
					linkedInLink="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
					twitterLink="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
				/>
				<Student
					name="Whitney Francis"
					title="Copywriter"
					photo="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
					linkedInLink="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
					twitterLink="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
				/>
				<Student
					name="Leonard Krasner"
					title="Senior Designer"
					photo="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
					linkedInLink="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
					twitterLink="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
				/>
				<Student
					name="Floyd Miles"
					title="Principal Designer"
					photo="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
					linkedInLink="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
					twitterLink="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
				/>
				<span className="w-80 shrink=0" />
        
			</div>
    </div>
	);
}

export default StudentList;
