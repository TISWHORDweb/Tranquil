import React from 'react'

function Banner4() {
    return (
        <div>
            <div className="">
                <section class="parallax_window_in short contact" data-parallax="scroll" data-image-src="img/subheader_in_3.jpg" data-natural-width="1400" data-natural-height="400">
                    <div id="sub_content_in">
                        <div class="container">
                            <h1>Contact Us</h1>
                            <p>"Usu habeo equidem sanctus no ex melius"</p>
                        </div>
                    </div>
                </section>

                <div id="position">
                    <div class="container">
                        <ul>
                            <li><span>Home</span></li>
                            <li><span>Contact</span></li>
                            <li>Page active</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="">
            <div class="container margin_60">
		<div class="row">

			<div class="col-md-9">
				<h3>Contact us</h3>
				<p>
					Mussum ipsum cacilds, vidis litro abertis.
				</p>
				<div>
					<div id="message-contact"></div>
					<form method="post" action="assets/contact.php" id="contactform">
						<div class="row">
							<div class="col-md-6 col-sm-6">
								<div class="form-group">
									<label>First name:</label>
									<input type="text" class="form-control styled" id="name_contact" name="name_contact" placeholder="Jhon"/>
								</div>
							</div>
							<div class="col-md-6 col-sm-6">
								<div class="form-group">
									<label>Last name:</label>
									<input type="text" class="form-control styled" id="lastname_contact" name="lastname_contact" placeholder="Doe"/>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 col-sm-6">
								<div class="form-group">
									<label>Email:</label>
									<input type="email" id="email_contact" name="email_contact" class="form-control styled" placeholder="jhon@email.com"/>
								</div>
							</div>
							<div class="col-md-6 col-sm-6">
								<div class="form-group">
									<label>Phone number:</label>
									<input type="text" id="phone_contact" name="phone_contact" class="form-control styled" placeholder="00 44 5435435" />
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<div class="form-group">
									<label>Your message:</label>
									<textarea rows="5" id="message_contact" name="message_contact" class="form-control styled" style={{height:"100px"}} placeholder="Hello world!"></textarea>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6">
								<div class="form-group">
									<label>Are you human? 3 + 1 =</label>
									<input type="text" id="verify_contact" class=" form-control styled" placeholder=" 3 + 1 =" />
								</div>
								<p><input type="submit" value="Submit" class="btn_1" id="submit-contact"/></p>
							</div>
						</div>
					</form>
				</div>
			</div>
			
			<aside class="col-md-3">
				<div class="box_style_2">
					<h4>Contacts info</h4>
					<p>
						11 Fifth Ave - New York, US
						<br/> + 61 (2) 8093 3400
						<br/>
						<span>info@domain.com</span>
					</p>
					<h5>Get directions</h5>
					<form action="http://maps.google.com/maps" method="get" target="_blank">
						<div class="form-group">
							<input type="text" name="saddr" placeholder="Enter your location" class="form-control styled" />
							<input type="hidden" name="daddr" value="New York, NY 11430" />
							
						</div>
						<input type="submit" value="Get directions" class="btn_1 add_bottom_15" />
					</form>
					<hr class="styled" />
					<h4>Departmens</h4>
					<ul class="contacts_info">
						<li>Administration
							<br/>
							<a href="tel://003823932342">0038 23932342</a>
							<br /><a href="tel://003823932342">admin@domain.com</a>
							<br/>
							<small>Monday to Friday 9am - 7pm</small>
						</li>
						<li>General questions
							<br/>
							<a href="tel://003823932342">0038 23932342</a>
							<br/><a href="tel://003823932342">questions@domain.com</a>
							<br/>
							<small>Monday to Friday 9am - 7pm</small>
						</li>
					</ul>
				</div>
			</aside>
			
		</div>
		
	</div>
            </div>
        </div>
    )
}

export default Banner4