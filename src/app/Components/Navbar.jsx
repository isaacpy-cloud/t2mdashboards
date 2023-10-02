import React from 'react'

function Navbar() {
  return (
    <>
     <nav className="page-sidebar" data-pages="sidebar">
    <div className="sidebar-overlay-slide from-top" id="appMenu">
      <div className="row">
        <div className="col-xs-6 no-padding">
          <a href="#" className="p-l-40">
            <img src="dsassets/assets/img/demo/social_app.svg" alt="socail" />
          </a>
        </div>
        <div className="col-xs-6 no-padding">
          <a href="#" className="p-l-10">
            <img src="dsassets/assets/img/demo/email_app.svg" alt="socail" />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6 m-t-20 no-padding">
          <a href="#" className="p-l-40">
            <img src="dsassets/assets/img/demo/calendar_app.svg" alt="socail" />
          </a>
        </div>
        <div className="col-xs-6 m-t-20 no-padding">
          <a href="#" className="p-l-10">
            <img src="dsassets/assets/img/demo/add_more.svg" alt="socail" />
          </a>
        </div>
      </div>
    </div>
    <div className="sidebar-header">
      <img
        src="dsassets/assets/img/logo_white.png"
        alt="logo"
        className="brand"
        data-src="dsassets/assets/img/logo_white.png"
        data-src-retina="dsassets/assets/img/logo_white_2x.png"
        width={78}
        height={22}
      />
      <div className="sidebar-header-controls">
        <button
          aria-label="Toggle Drawer"
          type="button"
          className="btn btn-icon-link invert sidebar-slide-toggle m-l-20 m-r-10"
          data-pages-toggle="#appMenu"
        >
          <i className="pg-icon">chevron_down</i>
        </button>
        <button
          aria-label="Pin Menu"
          type="button"
          className="btn btn-icon-link invert d-lg-inline-block d-xlg-inline-block d-md-inline-block d-sm-none d-none"
          data-toggle-pin="sidebar"
        >
          <i className="pg-icon" />
        </button>
      </div>
    </div>
    <div className="sidebar-menu">
      <ul className="menu-items">
        <li className="m-t-20 ">
          <a href="index.html" className="detailed">
            <span className="title">Dashboard</span>
            <span className="details">12 New Updates</span>
          </a>
          <span className="icon-thumbnail">
            <i className="pg-icon">home</i>
          </span>
        </li>
        <li className="">
          <a href="email.html" className="detailed">
            <span className="title">Email</span>
            <span className="details">234 New Emails</span>
          </a>
          <span className="icon-thumbnail">
            <i className="pg-icon">inbox</i>
          </span>
        </li>
        <li className="">
          <a href="social.html">
            <span className="title">Social</span>
          </a>
          <span className="icon-thumbnail">
            <i className="pg-icon">social</i>
          </span>
        </li>
        <li>
          <a href="javascript:;">
            <span className="title">Calendar</span>
            <span className=" arrow" />
          </a>
          <span className="icon-thumbnail">
            <i className="pg-icon">calendar</i>
          </span>
          <ul className="sub-menu">
            <li className="">
              <a href="calendar.html">Basic</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">c</i>
              </span>
            </li>
            <li className="">
              <a href="calendar_lang.html">Languages</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">l</i>
              </span>
            </li>
            <li className="">
              <a href="calendar_month.html">Month</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">m</i>
              </span>
            </li>
            <li className="">
              <a href="calendar_lazy.html">Lazy load</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">la</i>
              </span>
            </li>
            <li className="">
              <a
                href="https://docs.pages.revox.io/apps/calendar"
                rel="noreferrer"
                target="_blank"
              >
                Documentation
              </a>
              <span className="icon-thumbnail">
                <i className="pg-icon">d</i>
              </span>
            </li>
          </ul>
        </li>
        <li className="">
          <a href="builder.html">
            <span className="title">Builder</span>
          </a>
          <span className="icon-thumbnail">
            <i className="pg-icon">brush</i>
          </span>
        </li>
        <li>
          <a href="javascript:;">
            <span className="title">Layouts</span>
            <span className=" arrow" />
          </a>
          <span className="icon-thumbnail">
            <i className="pg-icon">grid</i>
          </span>
          <ul className="sub-menu">
            <li className="">
              <a href="default_layout.html">Default</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">dl</i>
              </span>
            </li>
            <li className="">
              <a href="secondary_layout.html">Secondary</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">sl</i>
              </span>
            </li>
            <li className="">
              <a href="boxed_layout.html">Boxed</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">bl</i>
              </span>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:;">
            <span className="title">UI Elements</span>
            <span className=" arrow" />
          </a>
          <span className="icon-thumbnail">
            <i className="pg-icon">shapes</i>
          </span>
          <ul className="sub-menu">
            <li className="">
              <a href="color.html">Color</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">c</i>
              </span>
            </li>
            <li className="">
              <a href="typography.html">Typography</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">t</i>
              </span>
            </li>
            <li className="">
              <a href="icons.html">Icons</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">i</i>
              </span>
            </li>
            <li className="">
              <a href="buttons.html">Buttons</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">b</i>
              </span>
            </li>
            <li className="">
              <a href="notifications.html">Notifications</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">n</i>
              </span>
            </li>
            <li className="">
              <a href="modals.html">Modals</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">m</i>
              </span>
            </li>
            <li className="">
              <a href="progress.html">Progress &amp; Activity</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">pa</i>
              </span>
            </li>
            <li className="">
              <a href="tabs_accordian.html">Tabs &amp; Accordions</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">ta</i>
              </span>
            </li>
            <li className="">
              <a href="sliders.html">Sliders</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">s</i>
              </span>
            </li>
            <li className="">
              <a href="tree_view.html">Tree View</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">tv</i>
              </span>
            </li>
            <li className="">
              <a href="nestables.html">Nestable</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">ns</i>
              </span>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:;">
            <span className="title">Forms</span>
            <span className=" arrow" />
          </a>
          <span className="icon-thumbnail">
            <i className="pg-icon">note</i>
          </span>
          <ul className="sub-menu">
            <li className="">
              <a href="form_elements.html">Form Elements</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">fe</i>
              </span>
            </li>
            <li className="">
              <a href="form_layouts.html">Form Layouts</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">fl</i>
              </span>
            </li>
            <li className="">
              <a href="form_wizard.html">Form Wizard</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">fw</i>
              </span>
            </li>
          </ul>
        </li>
        <li className="">
          <a href="cards.html">
            <span className="title">Cards</span>
          </a>
          <span className="icon-thumbnail">
            <i className="pg-icon">card</i>
          </span>
        </li>
        <li className="">
          <a href="views.html">
            <span className="title">Views</span>
          </a>
          <span className="icon-thumbnail">
            <i className="pg-icon">layout</i>
          </span>
        </li>
        <li>
          <a href="javascript:;">
            <span className="title">Tables</span>
            <span className=" arrow" />
          </a>
          <span className="icon-thumbnail">
            <i className="pg-icon">table</i>
          </span>
          <ul className="sub-menu">
            <li className="">
              <a href="tables.html">Basic Tables</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">bt</i>
              </span>
            </li>
            <li className="">
              <a href="datatables.html">Data Tables</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">dt</i>
              </span>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:;">
            <span className="title">Maps</span>
            <span className=" arrow" />
          </a>
          <span className="icon-thumbnail">
            <i className="pg-icon">map</i>
          </span>
          <ul className="sub-menu">
            <li className="">
              <a href="google_map.html">Google Maps</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">gm</i>
              </span>
            </li>
            <li className="">
              <a href="vector_map.html">Vector Maps</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">vm</i>
              </span>
            </li>
          </ul>
        </li>
        <li className="">
          <a href="charts.html">
            <span className="title">Charts</span>
          </a>
          <span className="icon-thumbnail">
            <i className="pg-icon">chart</i>
          </span>
        </li>
        <li>
          <a href="javascript:;">
            <span className="title">Extra</span>
            <span className=" arrow" />
          </a>
          <span className="icon-thumbnail">
            <i className="pg-icon">effects</i>
          </span>
          <ul className="sub-menu">
            <li className="">
              <a href="invoice.html">Invoice</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">in</i>
              </span>
            </li>
            <li className="">
              <a href="404.html">404 Page</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">pg</i>
              </span>
            </li>
            <li className="">
              <a href="500.html">500 Page</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">pg</i>
              </span>
            </li>
            <li className="">
              <a href="blank_template.html">Blank Page</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">bp</i>
              </span>
            </li>
            <li className="">
              <a href="login.html">Login</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">li</i>
              </span>
            </li>
            <li className="">
              <a href="register.html">Register</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">re</i>
              </span>
            </li>
            <li className="">
              <a href="lock_screen.html">Lockscreen</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">ls</i>
              </span>
            </li>
            <li className="">
              <a href="gallery.html">Gallery</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">gl</i>
              </span>
            </li>
            <li className="">
              <a href="timeline.html">Timeline</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">tl</i>
              </span>
            </li>
          </ul>
        </li>
        <li className="">
          <a href="javascript:;">
            <span className="title">Menu Levels</span>
            <span className="arrow" />
          </a>
          <span className="icon-thumbnail">
            <i className="pg-icon">menu_level</i>
          </span>
          <ul className="sub-menu">
            <li>
              <a href="javascript:;">Level 1</a>
              <span className="icon-thumbnail">
                <i className="pg-icon">l1</i>
              </span>
            </li>
            <li>
              <a href="javascript:;">
                <span className="title">Level 2</span>
                <span className="arrow" />
              </a>
              <span className="icon-thumbnail">
                <i className="pg-icon">L2</i>
              </span>
              <ul className="sub-menu">
                <li>
                  <a href="javascript:;">Sub Menu</a>
                  <span className="icon-thumbnail">
                    <i className="pg-icon">sm</i>
                  </span>
                </li>
                <li>
                  <a href="ujavascript:;">Sub Menu</a>
                  <span className="icon-thumbnail">
                    <i className="pg-icon">sm</i>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="">
          <a
            href="https://docs.pages.revox.io/"
            rel="noreferrer"
            target="_blank"
          >
            <span className="title">Docs</span>
          </a>
          <span className="icon-thumbnail">
            <i className="pg-icon">flag</i>
          </span>
        </li>
        <li className="m-b-40">
          <a
            href="http://changelog.pages.revox.io/"
            rel="noreferrer"
            target="_blank"
          >
            <span className="title">Changelog</span>
          </a>
          <span className="icon-thumbnail">
            <i className="pg-icon">clipboard</i>
          </span>
        </li>
      </ul>
      <div className="clearfix" />
    </div>
  </nav>
    </>
  )
}

export default Navbar