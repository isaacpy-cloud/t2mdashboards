import React from "react";
import Header from "./Header";

function MainContainer({bigUrl}) {
  return (
    <>
      <div className="page-container ">
        <Header bigUrl="Ana Yönetici Sayfası"></Header>

        <div className="page-content-wrapper ">
          <div className="content p-t-0">
            <div className="jumbotron" data-pages="parallax">
              <div className=" container-fluid   container-fixed-lg sm-p-l-0 sm-p-r-0">
                <div className="inner">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Navigasyon</a>
                    </li>
                    <li className="breadcrumb-item active">{bigUrl}</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className=" container-fluid   container-fixed-lg"></div>
          </div>
          <div className=" container-fluid  container-fixed-lg footer">
            <div className="copyright sm-text-center">
              <p className="small-text no-margin pull-left sm-pull-reset">
                ©2023-2024 Tüm hakları saklıdır. Sistem üreticisi ve yöneticisi olarak Ahmet H.E. ile iletişime geçebilirsiniz. 
                <span className="hint-text m-l-15">
                  Transfer2Market v1.0.0.0
                </span>
              </p>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContainer;
