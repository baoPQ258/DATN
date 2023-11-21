function Footer() {
  return (
    <footer className="py-5 ps-7 pe-6 my-5 mx-0 border-top">
      <div className="row">
        <div className="col-md-3  mb-3">
          <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
            <h2 className="text-primary fw-bold pe-2">MORENT</h2>
          </a>
          <p className="text-body-secondary">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>
        <div className="col-3"></div>
        <div className="col-6 col-md-2 mb-3">
          <h5>About</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-body-secondary">
                How it works
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-body-secondary">
                Partnership
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-body-secondary">
                Bussiness Relation
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Community</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-body-secondary">
                Events
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-body-secondary">
                Blog
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-body-secondary">
                Podcast
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-body-secondary">
                Invite a friend
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Socials</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-body-secondary">
                Discord
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-body-secondary">
                Instagram
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-body-secondary">
                Twitter
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-body-secondary">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <h5>©2024 MORENT. All rights reserved</h5>
        <ul className=" nav flex-row">
          <li className="ms-3">
            <a className="link-body-emphasis text-decoration-none fs-5" href="/">
              Privacy & Policy
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis  text-decoration-none fs-5" href="/">
              Terms & Condition
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
