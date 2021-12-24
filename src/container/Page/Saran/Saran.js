import React, {Component} from 'react';


class Saran extends Component {
	render(){
		return(
			<div className="body">
			    <section id="contact-page">
			        <div className="container">
			            <div className="large-title text-center">        
			                <h2>Masukan Saran anda</h2>
			                <p>Masukan anda sangat membantu kami untuk mengembangkan web DruidHidro semakin lebih bagus lagi</p>
			            </div> 
			            <div className="row contact-wrap"> 
			               
			                <form id="main-contact-form" className="contact-form" name="contact-form" method="post" action="sendemail.php">
			                    <div className="col-sm-5 col-sm-offset-1">
			                        <div className="form-group">
			                            <label>Nama Lengkap *</label>
			                            <input type="text" name="name" className="form-control" required="required"/>
			                        </div>
			                        <div className="form-group">
			                            <label>Email *</label>
			                            <input type="email" name="email" className="form-control" required="required"/>
			                        </div>
			                        <div className="form-group">
			                            <label>Nowor WA</label>
			                            <input type="number" className="form-control"/>
			                        </div>
			                        <div className="form-group">
			                            <label>Alamat</label>
			                            <input type="text" className="form-control"/>
			                        </div>                        
			                    </div>
			                    <div className="col-sm-5">
			                        <div className="form-group">
			                            <label>Subject *</label>
			                            <input type="text" name="subject" className="form-control" required="required"/>
			                        </div>
			                        <div className="form-group">
			                            <label>Masukan Pesan / Masukan*</label>
			                            <textarea name="message" id="message" required="required" className="form-control" rows="8"></textarea>
			                        </div>                        
			                        <div className="form-group">
			                            <button type="submit" name="submit" className="btn btn-primary btn-lg" required="required">Kirim</button>
			                        </div>
			                    </div>
			                </form> 
			            </div>
			        </div>
			    </section>
			</div>
		)
	}
}

export default Saran;