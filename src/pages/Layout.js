import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-toggler  ">
       <Link className="container-fluid navbar-brand collapse navbar-collapse navbar-nav " to="/">Home</Link> &nbsp; &nbsp;
          <Link className="container-fluid navbar-brand collapse navbar-collapse navbar-nav" to="country">Country</Link>&nbsp; &nbsp;
          <Link className="container-fluid navbar-brand collapse navbar-collapse navbar-nav " to="state">State</Link>&nbsp; &nbsp;
          <Link className="container-fluid navbar-brand collapse navbar-collapse navbar-nav " to="district">District</Link>&nbsp; &nbsp;
         <Link className="container-fluid navbar-brand collapse navbar-collapse navbar-nav " to="insta" >Instagram</Link>&nbsp; &nbsp;
         <Link className="container-fluid navbar-brand collapse navbar-collapse navbar-nav " to="instalog">InstagramLogIn</Link>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
