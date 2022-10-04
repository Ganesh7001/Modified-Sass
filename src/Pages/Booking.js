import React from 'react'

const Booking = () => {
  return (
    <section class="section-book" id="section-book">
    <div class="row">
        <div class="book">
            <div class="book_form">
                <form action="" class="form">
                    <div class="u-margin-bottom-medium">
                        <h2 class="heading-secondary">
                           start Booking Now
                        </h2>
                    </div>
                    <div class="form_group">
                        <input type="text" class="form_input" placeholder="Full Name" id="name" required/>
                        <label for="name" class="form_label">Full Name</label>
                    </div>
                    <div class="form_group">
                        <input type="email" class="form_input" placeholder="Email" id="email" required/>
                        <label for="email" class="form_label">Email</label>
                    </div>
                    <div class="form_group u-margin-bottom-medium">
                        <div class="form_radio-group">
                            <input type="radio" class="form_radio-input" id="small" name="size"/>
                            <label for="small" class="form_radio-label">
                                <span class="form_radio-button"></span>
                                small tour group</label>
                        </div>
                        <div class="form_radio-group">
                            <input type="radio" class="form_radio-input" id="large" name="size"/>
                            <label for="large" class="form_radio-label">
                                <span class="form_radio-button"></span>
                                large tour group</label>
                        </div>
                    </div>
                    <div class="form_group">
                        <button class="btn btn--green">
                            Next Step &rarr;
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
  )
}

export default Booking;