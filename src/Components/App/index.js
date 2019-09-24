import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import "./style.css";
import StartPage from '../../Pages/StartPage';
import CategoryPage from '../../Pages/CategoryPage';
import PlayerPage from '../../Pages/PlayerPage';
import RelatedPage from '../../Pages/RelatedPage';
import CoursesPage from '../../Pages/CoursesPage';
import ProfilePage from '../../Pages/ProfilePage';
import RegistrationPage from '../../Pages/RegistrationPage';
import LoginPage from '../../Pages/LoginPage';
import Layout from '../Layout';

const App = () => {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route path="/" exact component={StartPage} />
					<Route path="/category/:categoryId" component={CategoryPage} />
					<Route path="/player/:playerId" component={PlayerPage} />
					<Route path="/related-courses" component={RelatedPage} />
					<Route path="/courses" component={CoursesPage} />
					<Route path="/profile" component={ProfilePage} />
					<Route path="/registration" component={RegistrationPage} />
					<Route path="/login" component={LoginPage} />
					{/* <Route component={NotFound}/> */}
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;