import Search from '../Search';
import Setting from '../../assets/icon/setting.svg';
import Notification from '../../assets/icon/notification.svg';
import Avatar from '../../assets/icon/avatar.svg';
import Heart from '../../assets/icon/heart.svg';

function Header() {
  return (
    <header className="container-fluid ps-7 pe-6 my-5 mx-0">
      <div className="row align-items-center">
        <div className="col-2 pe-7">
          <h2 className="text-primary fw-bold pe-2">MORENT</h2>
        </div>
        <div className="col-5">
          <Search></Search>
        </div>
        <div className="col-3 offset-2 d-flex flex-row-reverse">
          <div className="d-flex flex-col align-content-center gap-8">
            <div className="d-flex gap-8">
              <button className="border-0 bg-transparent px-0">
                <img alt="icon heart" className="border border-1 rounded-circle p-9" src={Heart}></img>
              </button>
              <button className="border-0 bg-transparent px-0">
                <img alt="icon setting" className="border border-1 rounded-circle p-9" src={Setting}></img>
              </button>
              <button className="border-0 bg-transparent px-0">
                <img alt="icon notification" className="border border-1 rounded-circle p-9" src={Notification}></img>
              </button>
            </div>
            <div>
              <img alt="icon avatar" src={Avatar}></img>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
