import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle"/>

            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <div class="navigation__background">&nbsp;</div>

            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><Link to="about" class="navigation__link"><span>01</span>About Natous</Link></li>
                    <li class="navigation__item"><Link to="benefits" class="navigation__link"><span>02</span>Your benfits</Link></li>
                    <li class="navigation__item"><Link to="tours" class="navigation__link"><span>03</span>Popular tours</Link></li>
                    <li class="navigation__item"><Link to="stories" class="navigation__link"><span>04</span>Stories</Link></li>
                    <li class="navigation__item"><Link to="booking" class="navigation__link"><span>05</span>Book now</Link></li>
                    </ul>
            </nav>
        </div>
  )
}

export default Navbar;