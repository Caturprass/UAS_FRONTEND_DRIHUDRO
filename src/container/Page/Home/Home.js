import React, {Component} from 'react';
import Features from '../../../component/Features/Features';

class Home extends Component {
	render(){
		return(
			<div className="body homepag">

			    <div id="main-slider" className="no-margin">
			        <div className="carousel slide">
			            <ol className="carousel-indicators">
			                <li data-target="#main-slider" data-slide-to="0" className="active"></li>
			                <li data-target="#main-slider" data-slide-to="1"></li>
			            </ol>
			            <div className="carousel-inner">

			                <div className="item active slider-img-1">
			                    <div className="container">
			                        <div className="row">
			                            <div className="col-md-7">
			                                <div className="carousel-content">
			                                    <h1 >Seputar Tentang Hidroponik</h1>
			                                    <div >
			                                        Mari memulai menghijaukan dunia dengan berbagai tanaman hidroponik.
			                                    </div>
			                                    <a className="btn-slide animation " href="#">Info lanjut</a>
			                                    <a className="btn-slide white animation" href="#">Yuk Mulai</a>
			                                </div>
			                            </div>

			                        </div>
			                    </div>
			                </div>

			                <div className="item slider-img-2">
			                    <div className="container">
			                        <div className="row">
			                            <div className="col-md-7">
			                                <div className="carousel-content">
			                                    <h1 >Seputar Tentang Hidroponik</h1>
			                                    <div >
			                                      Mari memulai menghijaukan dunia dengan berbagai tanaman hidroponik.
			                                    </div>
			                                    <a className="btn-slide white animation" href="#">Info lanjut</a>
			                                    <a className="btn-slide animation " href="#">Yuk Mulai</a>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>

			        <a className="prev hidden-xs hidden-sm" href="#main-slider" data-slide="prev">
			            <i className="fa fa-chevron-left"></i>
			        </a>
			        <a className="next hidden-xs hidden-sm" href="#main-slider" data-slide="next">
			            <i className="fa fa-chevron-right"></i>
			        </a>
			    </div>

			    <section id="feature">
			        <div className="container">
			            <div className="center fadeInDown">
			                <h2>Fitur di web kami</h2>
			                <p className="lead">Terdapat fitur keranjnag,pembelian,dan lainnya
			                </p>
			            </div>

			            <div className="row">
			                <Features
			                	icon="fa fa-rocket"
			                	title="Cepat dalam pemesanan"
			                	desc="Kami menawarkan fitur pemesanan dan pemesanaan dengan cepat"
			                />
			                <Features
			                	icon="fa fa-check"
			                	title="Mudah mencari informasi"
			                	desc="Terdapat informasi tentang druidhiro yang mungkin bisa membantu anda mencari informasi seputar hidroponik"
			                />
			                <Features
			                	icon="fa fa-bullhorn"
			                	title="saran"
			                	desc="Apabila anda mengalami masalah pada web kami dan mungkin ada saran bisa langsung melakukan masukan"
			                />
			                <Features
			                	icon="fa fa-arrows"
			                	title="Flexsible"
			                	desc="Web kami sudah bisa anda akses menggunakan Smartphone maupun desktop"
			                />
			            </div>
			        </div>
			    </section>

			    <section id="recent-works">
			        <div className="container">
			            
			            <div className="clearfix text-center">
			                <a href="#" className="btn btn-primary btn-top">Kembali Ke Home</a>
			            </div>
			        </div>
			    </section>

			    
			</div>
		)
	}
}


export default Home;

