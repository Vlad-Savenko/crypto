import { Link } from 'react-router-dom';


import './AppHeader.css'

const AppHeader = () => {
    return (
      <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden min-h-screen">
          <div className="flex items-center justify-center h-20 shadow-md">
            <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
          </div>
          <ul className="flex flex-col py-4">
            <li>
              <div href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                <Link to={'/main'}><span className="text-sm font-medium">Main</span></Link>
              </div>
            </li>
            <li>
              <div href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
                <Link to={'/crypto'}><span className="text-sm font-medium">Crypto</span></Link>
              </div>
            </li>
            <li>
              <div href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
                <Link to={'/birge'}><span className="text-sm font-medium">Birge</span></Link>
              </div>
            </li>
            <li>
              <div href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
                <span className="text-sm font-medium">Shopping</span>
              </div>
            </li>
            <li>
              <div href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
                <span className="text-sm font-medium">Profile</span>
              </div>
            </li>
          </ul>
        </div>
    )
}

export default AppHeader;