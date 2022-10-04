import React from 'react'

const Stories = () => {
  return (
    <section class="section-stories" id="section-stories">
                <div class="bg-video">
                    <video class="bg-video_content" autoplay muted loop>
                        <source src="Images/video.mp4" type="video/mp4"/>
                        <source src="Images/video.webm" type="videowebm"/>
                        <source src="Images/video.webm" type="videowebm" />
                        Your browser is not supported!
                    </video>
                    <div><h1>hiiiiii</h1></div>
                </div>


                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                       We make people genuienly happy 
                    </h2>
                </div>
                <div class="row">
                    <div class="story">
                        <figure class="story_shape">
                            <img src="../Images/nat-8.jpg" class="story_img"alt=""/>
                            <figcaption class="story_caption">
                                Mary Jonas
                            </figcaption>
                        </figure>
                        <div class="story_text">
                            <h3 class="heading-tertiary u-margin-bottom-small">I had the best time with my family ever!</h3>
                            <p >Lorem, ipsum dolor  sit amet consectetur adipisicing elit. Harum accusantium explicabo, aliquid asperiores sed enim,
                                 natus itaque, unde eaque qui doloremque sunt minima quos quo quasi officia sit alias doloribus.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="story">
                        <figure class="story_shape">
                            <img src="../Images/nat-9.jpg" class="story_img"alt=""/>
                            <figcaption class="story_caption">
                                Iris Nordan
                            </figcaption>
                        </figure>
                        <div class="story_text">
                            <h3 class="heading-tertiary u-margin-bottom-small">Wow my life has changed completely now!</h3>
                            <p >Lorem, ipsum dolor  sit amet consectetur adipisicing elit. Harum accusantium explicabo, aliquid asperiores sed enim,
                                 natus itaque, unde eaque qui doloremque sunt minima quos quo quasi officia sit alias doloribus.</p>
                        </div>
                    </div>
                </div>
                <div class="u-center-text u-margin-bottom-big">
                    <a href="" class="btn-text">Read all stories &rarr;</a>
                </div>
            </section>
  )
}

export default Stories;