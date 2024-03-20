import React from 'react'
import Img1 from '../img/pexels-tima-miroshnichenko-5452201.jpg'

function Banner2() {
    return (
        <div>
            <div className="">
                <section class="parallax_window_in short" data-parallax="scroll" data-image-src="img/subheader_in_2.jpg" data-natural-width="1400" data-natural-height="400">
                    <div id="sub_content_in">
                        <div class="container">
                            <h1>About us</h1>
                            <p>"Usu habeo equidem sanctus no ex melius"</p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="">
                <div id="position">
                    <div class="container">
                        <ul>
                            <li>< span >Home</ span></li>
                            <li>< span >About</ span></li>
                            <li>Page active</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="">
            <div class="container margin_60">
		<div class="row">
			<div class="col-sm-6 bbout">
				<h3 class="main_title_left"><em></em>Some words about us<span>Curabitur quam etsum lacus etsumis</span></h3>
				<p class="lead styled">Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie. Sed ad debet scaevola, ne mel lorem legendos.</p>
				<p>Lorem ipsum dolor sit amet, nec ad quod quando albucius, mea te putant mediocritatem, meliore scribentur instructior id nec. Ea omittam electram eos, ad quo paulo disputando, enim iudico nec ex. Movet luptatum ea qui. Usu ei sumo accusata interpretaris.</p>
				<h4>Strategy</h4>
				<p>Ad explicari temporibus pri, quo posse albucius electram ad. An platonem scribentur mel, partem regione iuvaret et vel, cu case persecuti pro. Est ipsum dicta nostro in, pri et doming bonorum eleifend. Nec dicant possim at. Vix ex eirmod scripta electram. Eu prima laudem ius, mel ei feugiat luptatum, omittam lucilius in cum. Albucius perfecto invenire cu vim.</p>
				<h4>Mission</h4>
				<p>Ad explicari temporibus pri, quo posse albucius electram ad. An platonem scribentur mel, partem regione iuvaret et vel, cu case persecuti pro. Est ipsum dicta nostro in, pri et doming bonorum eleifend. Nec dicant possim at. Vix ex eirmod scripta electram. Eu prima laudem ius, mel ei feugiat luptatum, omittam lucilius in cum. Albucius perfecto invenire cu vim.</p>
			</div>
			<div class="col-sm-5 col-sm-offset-1">
				<img src={Img1} alt="" class="img-responsive" />
			</div>
		</div>
	</div>
            </div>
        </div>
    )
}

export default Banner2