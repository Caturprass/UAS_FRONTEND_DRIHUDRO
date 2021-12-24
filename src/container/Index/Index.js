import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from '../../component/Footer/Footer';
import TopBar from '../../component/TopBar/TopBar';
import Home from '../Page/Home/Home';
import Info from '../Page/Info/Info';
import Keranjang from '../Page/Keranjang/Keranjang';
import Shop from '../Page/Shop/Shop';
import Saran from '../Page/Saran/Saran';

class Index extends Component {
	render(){
		return(
			<Router>
				<div>
					<header id="header">
				        <TopBar/>
				        <nav className="navbar navbar-inverse" role="banner">
				            <div className="container">
				                <div className="collapse navbar-collapse navbar-right">
				                    <ul className="nav navbar-nav">
				                        <li className="home-nav active"><Link to="/">Home</Link></li>
				                        <li className=""><Link to="/info">Info</Link></li>
				                        <li className=""><Link to="/keranjang">Keranjang</Link></li>
				                        <li className=""><Link to="/shop">Shop</Link></li>
				                        <li className=""><Link to="/saran">Saran</Link></li>
				                    </ul>
				                </div>
				            </div>
				        </nav>
	    			</header>

					<Route path="/" exact component={Home} />
					<Route path="/info/" component={Info} />
					<Route path="/keranjang/" component={Keranjang} />
					<Route path="/shop/" component={Shop} />
					<Route path="/saran/" component={Saran} />

					<Footer/>
				</div>
			</Router>
		)
	}
}

export default Index;