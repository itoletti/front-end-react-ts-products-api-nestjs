import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {

	render(): JSX.Element {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
					*<Link className="navbar-brand" to="/">Procuctos en React</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active">
								<Link className="nav-link" to="/product">Producto</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/product/create">Crear producto</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}
