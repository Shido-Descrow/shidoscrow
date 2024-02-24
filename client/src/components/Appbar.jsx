// import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ConnectWallet } from "@thirdweb-dev/react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "History", href: "/history" },
  { name: "Dashboard", href: "/dashboard" },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function AppBar() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Disclosure as="nav" className="bg-[#201F2D] text-[#E4E4E4]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-[#E4E4E4] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#E4E4E4]">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-between sm:items-stretch">
                <div className="hidden sm:flex flex-shrink-0 items-center">
                  <img className="h-8 w-auto" src={logo} alt="Logo" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        onClick={() => {
                          navigate(item.href);
                        }}
                        style={{cursor:"pointer"}}
                        className={`${
                          location.pathname === item.href ? "bg-[#0077b6]" : ""
                        } rounded-md px-3 py-2 font-medium`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-8 sm:pr-0">
                <ConnectWallet
                  className=" px-[.5rem!important]"
                  switchToActiveChain={true}
                  theme="dark"
                />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={`${
                    // location.pathname.includes(item.href) ? "bg-[#0077b6]" : ""
                    location.pathname === item.href ? "bg-[#0077b6]" : ""
                  } rounded-md px-3 py-2 font-medium`}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}