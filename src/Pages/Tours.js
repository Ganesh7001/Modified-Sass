import React from 'react'

const Tours = () => {
  return (
    <section class="section-tours" id="section-tours">
                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                       Our most popular tours
                    </h2>
                </div> 
                <div class="row">
                    <div class="col-1-of-3">
                        <div class="card">
                            <div class="card_side card_side--front">
                                <div class="card_picture card_picture-1">                                   
                                </div>
                                <h4 class="card_heading">
                                    <span class="card_heading-span card_heading-span--1">
                                        The Sea Explorer
                                    </span>
                                </h4>
                                <div class="card_content">
                                    <ul>
                                        <li>3 days tours</li>
                                        <li>Up to 30 people</li>
                                        <li>2 tour guides</li>
                                        <li>sleep in cozy hotels</li>
                                        <li>Difficulty: easy</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card_side card_side--back card_side--back-1">
                               <div class="card_cta">
                                <div class="card_price-box">
                                    <p class="card_price-only">only</p>
                                    <p class="card_price-value">$280</p>
                                </div>
                                <a href="#popup" class="btn btn--white">Book Now</a>
                               </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-1-of-3">
                        <div class="card">
                            <div class="card_side card_side--front">
                                <div class="card_picture card_picture-2">
                                    &nbsp;
                                </div>
                                <h4 class="card_heading">
                                    <span class="card_heading-span card_heading-span--2">
                                        The Forest Hiker
                                    </span>
                                </h4>
                                <div class="card_content">
                                    <ul>
                                        <li>5 days tours</li>
                                        <li>Up to 50 people</li>
                                        <li>3 tour guides</li>
                                        <li>sleep in campings</li>
                                        <li>Difficulty: medium</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card_side card_side--back card_side--back-2">
                                <div class="card_cta">
                                 <div class="card_price-box">
                                     <p class="card_price-only">only</p>
                                     <p class="card_price-value">$380</p>
                                 </div>
                                 <a href="#popup" class="btn btn--white">Book Now</a>
                                </div>
                             </div>
                        </div>
                    </div>


                    <div class="col-1-of-3">
                        <div class="card">
                            <div class="card_side card_side--front">
                                <div class="card_picture card_picture-3">
                                    &nbsp;
                                </div>
                                <h4 class="card_heading">
                                    <span class="card_heading-span card_heading-span--3">
                                        The Snow Adventurer
                                    </span>
                                </h4>
                                <div class="card_content">
                                    <ul>
                                        <li>5 days tours</li>
                                        <li>Up to 20 people</li>
                                        <li>2 tour guides</li>
                                        <li>sleep in sleeping cubes</li>
                                        <li>Difficulty: hard</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card_side card_side--back card_side--back-3">
                                <div class="card_cta">
                                 <div class="card_price-box">
                                     <p class="card_price-only">only</p>
                                     <p class="card_price-value">$580</p>
                                 </div>
                                 <a href="#popup" class="btn btn--white">Book Now</a>
                                </div>
                             </div>
                        </div>
                    </div>
                </div> 
                <div class="u-center-text u-margin-bottom-big">
                    <a href="" class="btn btn--green">Discover all tours</a>
                </div>
            </section>
            
  )
}

export default Tours;