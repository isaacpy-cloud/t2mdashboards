import React from 'react'

function Header(bigUrl) {
  return (
    <>
    <div className="header ">
      <a
        href="#"
        className="btn-link toggle-sidebar d-lg-none pg-icon btn-icon-link"
        data-toggle="sidebar"
      >
        menu
      </a>
      <div className="">
        <div className="brand inline   ">
          <img
            src="dsassets/assets/img/logo.png"
            alt="logo"
            data-src="dsassets/assets/img/logo.png"
            data-src-retina="dsassets/assets/img/logo_2x.png"
            width={78}
            height={22}
          />
        </div>
        <ul className="d-lg-inline-block d-none notification-list no-margin d-lg-inline-block b-grey b-l b-r no-style p-l-20 p-r-20">
          <li className="p-r-5 inline">
            <div className="dropdown">
              <a
                href="javascript:;"
                id="notification-center"
                className="header-icon  btn-icon-link"
                data-toggle="dropdown"
              >
                <i className="pg-icon">world</i>
                <span className="bubble" />
              </a>
              <div
                className="dropdown-menu notification-toggle"
                role="menu"
                aria-labelledby="notification-center"
              >
                <div className="notification-panel">
                  <div className="notification-body scrollable">
                    <div className="notification-item unread clearfix">
                      <div className="heading open">
                        <a
                          href="#"
                          className="text-complete pull-left d-flex align-items-center"
                        >
                          <i className="pg-icon m-r-10">map</i>
                          <span className="bold">Carrot Design</span>
                          <span className="fs-12 m-l-10">David Nester</span>
                        </a>
                        <div className="pull-right">
                          <div className="thumbnail-wrapper d16 circular inline m-t-15 m-r-10 toggle-more-details">
                            <div>
                              <i className="pg-icon">chevron_down</i>
                            </div>
                          </div>
                          <span className=" time">few sec ago</span>
                        </div>
                        <div className="more-details">
                          <div className="more-details-inner">
                            <h5 className="semi-bold fs-16">
                              “Apple’s Motivation - Innovation <br />
                              distinguishes between <br />A leader and a
                              follower.”
                            </h5>
                            <p className="small hint-text">
                              Commented on john Smiths wall.
                              <br /> via pages framework.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="option"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="mark as read"
                      >
                        <a href="#" className="mark" />
                      </div>
                    </div>
                    <div className="notification-item  clearfix">
                      <div className="heading">
                        <a href="#" className="text-danger pull-left">
                          <i className="pg-icon m-r-10">alert_warning</i>
                          <span className="bold">98% Server Load</span>
                          <span className="fs-12 m-l-10">Take Action</span>
                        </a>
                        <span className="pull-right time">2 mins ago</span>
                      </div>
                      <div className="option">
                        <a href="#" className="mark" />
                      </div>
                    </div>
                    <div className="notification-item  clearfix">
                      <div className="heading">
                        <a href="#" className="text-warning pull-left">
                          <i className="pg-icon m-r-10">alert_warning</i>
                          <span className="bold">Warning Notification</span>
                          <span className="fs-12 m-l-10">Buy Now</span>
                        </a>
                        <span className="pull-right time">yesterday</span>
                      </div>
                      <div className="option">
                        <a href="#" className="mark" />
                      </div>
                    </div>
                    <div className="notification-item unread clearfix">
                      <div className="heading">
                        <div className="thumbnail-wrapper d24 circular b-white m-r-5 b-a b-white m-t-10 m-r-10">
                          <img
                            width={30}
                            height={30}
                            data-src-retina="dsassets/assets/img/profiles/1x.jpg"
                            data-src="dsassets/assets/img/profiles/1.jpg"
                            alt=""
                            src="dsassets/assets/img/profiles/1.jpg"
                          />
                        </div>
                        <a href="#" className="text-complete pull-left">
                          <span className="bold">Revox Design Labs</span>
                          <span className="fs-12 m-l-10">Owners</span>
                        </a>
                        <span className="pull-right time">11:00pm</span>
                      </div>
                      <div
                        className="option"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="mark as read"
                      >
                        <a href="#" className="mark" />
                      </div>
                    </div>
                  </div>
                  <div className="notification-footer text-center">
                    <a href="#" className="">
                      Read all notifications
                    </a>
                    <a
                      data-toggle="refresh"
                      className="portlet-refresh text-black pull-right"
                      href="#"
                    >
                      <i className="pg-refresh_new" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="p-r-5 inline">
            <a href="#" className="header-icon  btn-icon-link">
              <i className="pg-icon">link_alt</i>
            </a>
          </li>
          <li className="p-r-5 inline">
            <a href="#" className="header-icon  btn-icon-link">
              <i className="pg-icon">grid_alt</i>
            </a>
          </li>
        </ul>
        <a
          href="#"
          className="search-link d-lg-inline-block d-none"
          data-toggle="search"
        >
          <i className="pg-icon">search</i>Ne aramak istersiniz{" "}
          <span className="bold"></span>
        </a>
      </div>
      <div className="d-flex align-items-center">
        <div className="dropdown pull-right d-lg-block d-none">
          <button
            className="profile-dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="profile dropdown"
          >
            <span className="thumbnail-wrapper d32 circular inline">
              <img
                src="dsassets/assets/img/profiles/avatar.jpg"
                alt=""
                data-src="dsassets/assets/img/profiles/avatar.jpg"
                data-src-retina="dsassets/assets/img/profiles/avatar_small2x.jpg"
                width={32}
                height={32}
              />
            </span>
          </button>
          <div
            className="dropdown-menu dropdown-menu-right profile-dropdown"
            role="menu"
          >
            <a href="#" className="dropdown-item">
              <span>
                Signed in as <br />
                <b>David Aunsberg</b>
              </span>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              Your Profile
            </a>
            <a href="#" className="dropdown-item">
              Your Activity
            </a>
            <a href="#" className="dropdown-item">
              Your Archive
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              Features
            </a>
            <a href="#" className="dropdown-item">
              Help
            </a>
            <a href="#" className="dropdown-item">
              Settings
            </a>
            <a href="#" className="dropdown-item">
              Logout
            </a>
            <div className="dropdown-divider" />
            <span className="dropdown-item fs-12 hint-text">
              Last edited by David
              <br />
              on Friday at 5:27PM
            </span>
          </div>
        </div>
        <a
          href="#"
          className="header-icon m-l-5 sm-no-margin d-inline-block"
          data-toggle="quickview"
          data-toggle-element="#quickview"
        >
          <i className="pg-icon btn-icon-link">menu_add</i>
        </a>
      </div>
    </div>
    </>
  )
}

export default Header