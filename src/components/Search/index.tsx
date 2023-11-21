import iconSearch from '../../assets/icon/icon-search.svg';
import iconFilter from '../../assets/icon/icon-filter.svg';

function Search() {
  return (
    <>
      <div className="container align-items-center p-2 border border-1 rounded-pill">
        <div className="row d-flex flex-col ">
          <div className="d-flex flex-col col-10">
            <img alt="icon seacrh" src={iconSearch} className="mx-8"></img>
            <div className="w-100">
              <input type="text" className="form-control border-0 px-0" placeholder="Search something here" />
            </div>
          </div>
          <div className="dropdown col-2">
            <button className="border-0 bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img alt="icon seacrh" src={iconFilter} className="mx-8"></img>
            </button>
            <ul className="dropdown-menu dropdown-menu-light">
              <li className="dropdown-item ">Sport</li>
              <li className="dropdown-item ">SUV</li>
              <li className="dropdown-item ">MPV</li>
              <li className="dropdown-item ">Sedan</li>
              <li className="dropdown-item ">Coupe</li>
              <li className="dropdown-item ">Hatchback</li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
