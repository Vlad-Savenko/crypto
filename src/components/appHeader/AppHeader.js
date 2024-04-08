import { Link,NavLink } from 'react-router-dom';


import './AppHeader.css'

const AppHeader = () => {
    return (
      <div class="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden min-h-screen">
          <div class="flex items-center justify-center h-20 shadow-md">
            <h1 class="text-3xl uppercase text-indigo-500">Logo</h1>
          </div>
          <ul class="flex flex-col py-4">
            <li>
              <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-home"></i></span>
                <Link to={'/main'}><span class="text-sm font-medium">Main</span></Link>
              </a>
            </li>
            <li>
              <div href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-music"></i></span>
                <Link to={'/crypto'}><span class="text-sm font-medium">Crypto</span></Link>
              </div>
            </li>
            <li>
              <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-drink"></i></span>
                <Link to={'/birge'}><span class="text-sm font-medium">Birge</span></Link>
              </a>
            </li>
            <li>
              <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-shopping-bag"></i></span>
                <span class="text-sm font-medium">Shopping</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-user"></i></span>
                <span class="text-sm font-medium">Profile</span>
              </a>
            </li>
          </ul>
        </div>
    )
}

export default AppHeader;