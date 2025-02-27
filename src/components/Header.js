import React from "react";

const Header = () => {
  // let scrollBefore = 0;

  // window.addEventListener("scroll", function () {
  //   const scrolled = window.pageYOffset;
  //   if (document.getElementById("toggle").checked) {
  //   } else {
  //     if (scrollBefore > scrolled) {
  //       scrollBefore = scrolled;
  //       document.getElementById("header").style.top = "0px";
  //     } else {
  //       scrollBefore = scrolled;
  //       document.getElementById("header").style.top = "-80px";
  //     }
  //   }
  // });

  return (
    <div className="header">
      <header id="header">
        <nav>
          <label for="toggle">☰</label>
          <input type="checkbox" id="toggle" />
          <lu class="allHeader">
            <li>
              <a href="#about">
                <button id="headerNavItems">
                  <div className="item1">
                    <span id="numberInNav">01.</span> About
                  </div>
                </button>
              </a>
            </li>
            <li>
              <a href="#works" style={{ marginTop: 40 }}>
                <button id="headerNavItems">
                  <div className="item3">
                    <span id="numberInNav">02.</span> Work
                  </div>
                </button>
              </a>
            </li>
            <li>
              <a href="#contact">
                <button id="headerNavItems">
                  <div className="item4">
                    <span id="numberInNav">03.</span> Contact
                  </div>
                </button>
              </a>
            </li>
          </lu>
        </nav>
      </header>
    </div>
  );
};

export default Header;
