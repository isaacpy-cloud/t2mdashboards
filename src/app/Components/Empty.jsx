import React from "react";
import Head from "next/head";
import Script from "next/script";
import ScriptFiles from "../MainFiles/ScriptFiles";
import Navbar from "./Navbar";
import Header from "./Header";
import MainContainer from "./MainContainer";

function Empty({ params }) {
  console.log(params);
  return (
    <>
      <Head>
        <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
        <meta charSet="utf-8" />
        <title>Pages - Admin Dashboard UI Kit - Blank Page</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
        />
        <link rel="apple-touch-icon" href="pages/ico/60.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="pages/ico/76.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="pages/ico/120.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="pages/ico/152.png" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          content="Meet pages - The simplest and fastest way to build web UI for your dashboard or app."
          name="description"
        />
        <meta content="Ace" name="author" />
        <link
          href="dsassets/assets/plugins/pace/pace-theme-flash.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="dsassets/assets/plugins/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="dsassets/assets/plugins/jquery-scrollbar/jquery.scrollbar.css"
          rel="stylesheet"
          type="text/css"
          media="screen"
        />
        <link
          href="dsassets/assets/plugins/select2/css/select2.min.css"
          rel="stylesheet"
          type="text/css"
          media="screen"
        />
        <link
          className="main-stylesheet"
          href="dsassets/pages/css/pages.css"
          rel="stylesheet"
          type="text/css"
        />
        {/* Please remove the file below for production: Contains demo classes */}
        <link
          className="main-stylesheet"
          href="dsassets/assets/css/style.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

        <Navbar></Navbar>
        <MainContainer bigUrl="Ana Yönetici Sayfası"></MainContainer>

      <ScriptFiles></ScriptFiles>
    </>
  );
}

export default Empty;
