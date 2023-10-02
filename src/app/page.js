import Empty from "./Components/Empty";

export default function Home() {
  return (
    <>
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
    href="dsassets/https://fonts.googleapis.com/icon?family=Material+Icons"
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
      <Empty></Empty>
    </>
  )
}
