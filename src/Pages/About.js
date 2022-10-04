import React from 'react';

const About = () => {
  return (
    <section class="section-about" id="section-about" >
    <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">
            Exciting tours for adventourous people
        </h2>
    </div>     
    <div class="row">
        <div class="col-1-of-2">
            <h3 class="heading-tertiary u-margin-bottom-small">
                You will love this nature
            </h3>
            <p class="paragraph">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore nostrum quam odit in expedita alias debitis voluptatum placeat sequi tempore minus autem obcaecati delectus et, suscipit ipsa iste aliquid quisquam.
            </p>
            <h3 class="heading-tertiary u-margin-bottom-small">
                Live the life with this amazing nature!
            </h3>
            <p class="paragraph">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore nostrum quam odit in expedita alias debitis voluptatum placeat sequi tempore minus autem obcaecati delectus et, suscipit ipsa iste aliquid quisquam.
            </p>

            <a href="#" class="btn-text">Click here &rarr;</a>
        </div>
        <div class="col-1-of-2">
            <div class="composition">

                <img srcset="Images/nat-1.jpg 300w,Images/nat-1-large.jpg 1000w" 
                sizes="(max-width:56.25em) 20vw,(max-width:37.5em) 30vw, 300px "
                class="composition_photo composition_photo--p1"
                src="Images/nat-1-large.jpg"
                alt="photo-1"/>

                <img srcset="Images/nat-2.jpg 300w, Images/nat-2-large.jpg 2000w" 
                sizes="(max-width:56.25em) 20vw,(max-width:37.5em) 30vw, 300px "
                class="composition_photo composition_photo--p2"
                src="Images/nat-2-large.jpg"
                alt="photo-2"/>

                <img srcset="Images/nat-3-large.jpg 300w, Images/nat-3-large.jpg 3000w" 
                sizes="(max-width:56.25em) 20vw,(max-width:37.5em) 30vw, 300px "
                class="composition_photo composition_photo--p3"
                src="Images/nat-3-large.jpg"
                alt="photo-3"/>
                
            </div>
        </div>
    </div>          
</section>
  )
}

export default About;