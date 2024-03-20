import React from 'react'
import Img1 from '../img/img.jpg'
import Img4 from '../img/img4.jpg'
import Img6 from '../img/th.jpg'
import Img7 from '../img/tt.jpg'

function Banner3() {
    return (
        <div>
            <div className="">
                <section class="parallax_window_in short service" data-parallax="scroll" data-image-src="img/subheader_in_1.jpg" data-natural-width="1400" data-natural-height="400">
                    <div id="sub_content_in">
                        <div class="container">
                            <h1>Service page </h1>
                            <p>"Usu habeo equidem sanctus no ex melius"</p>
                        </div>
                    </div>
                </section>

                <div id="position">
                    <div class="container">
                        <ul>
                            <li><span>Home</span></li>
                            <li><span>Service</span></li>
                            <li>Page active</li>
                        </ul>
                    </div>
                </div>

                <div class="container margin_60 overv">
                    <h2 class="main_title"><em></em>Overview</h2>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="box_service_single_2">
                                <figure><img src={Img1} alt="" class="img-responsive" /></figure>
                                <h3>Reporting Analysis</h3>
                                <p>Lorem ipsum dolor sit amet, no movet simul laoreet pri, aperiri fabulas expetenda ei pro. Sed vero assentior ad, est vide liber viris ne. Mea saperet evertitur intellegebat ei, an labore cetero eos. Quo no facilisis contentiones, enim graeci vim ea, justo graecis ne qui. His tation theophrastus intellegebat ut, hinc fierent nam ea.</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="box_service_single_2">
                                <figure><img src={Img4} alt="" class="img-responsive" /></figure>
                                <h3>Business Plan</h3>
                                <p>At per vulputate persequeris, ferri mediocrem imperdiet nam in. Docendi dignissim et qui. Sea alia regione repudiare ne, diam posse mel an. Ut stet saperet officiis vel, consetetur sadipscing vituperatoribus no sea. His nihil ignota putant in.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="box_service_single_2">
                                <figure><img src={Img7} alt="" class="img-responsive" /></figure>
                                <h3>Tutoring and Conulting</h3>
                                <p>Illud singulis indoctum ad sed, sed falli aliquip dolorem an. Tempor nonumes torquatos ne nec, an eum case cetero dissentiunt. Alterum bonorum mentitum an mel, eam dictas adipisci ad, omnes civibus sententiae no eos.</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="box_service_single_2">
                                <figure><img src={Img6} alt="" class="img-responsive" /></figure>
                                <h3>Business Strategy</h3>
                                <p>Ut unum diceret eos, mel cu velit principes, ut quo inani dolorem mediocritatem. Mea in justo posidonium necessitatibus. Augue honestatis vis no, ius quot mazim forensibus in, per sale virtute legimus ne. Mea dicta facilisis eu.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="bg_content" id="skills">
                    <div class="container margin_120_95">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="content_center">
                                    <h3><em></em>The strategy</h3>
                                    <p class="lead">Augue honestatis vis no, ius quot mazim forensibus in, per sale virtute legimus ne.</p>
                                    <p>Illud singulis indoctum ad sed, sed falli aliquip dolorem an. Tempor nonumes torquatos ne nec, an eum case cetero dissentiunt. Alterum bonorum mentitum an mel, eam dictas adipisci ad, omnes civibus sententiae no eos.</p>
                                </div>

                            </div>
                            <div class="col-sm-5 col-sm-offset-1 add_top_20">

                                <div class="barWrapper">
                                    <span class="progressText"><b>Marketing Strategy</b></span>
                                    <div class="">
                                        <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                            <div class="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "90%" }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="barWrapper">
                                    <span class="progressText"><b>Target success</b></span>
                                    <div class="">
                                        <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                            <div class="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "75%" }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="barWrapper">
                                    <span class="progressText"><b>Consumer increase</b></span>
                                    <div class="">
                                        <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                            <div class="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "95%" }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="barWrapper">
                                    <span class="progressText"><b>Marketing campaigns</b></span>
                                    <div class="">
                                        <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                            <div class="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "85%" }}></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner3