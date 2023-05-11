/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  Bars3BottomLeftIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React, { Fragment, useState } from 'react'

import Header from '../components/Header'

const navigation = [
  { current: true, href: '#', icon: HomeIcon, name: 'Dashboard' },
  { current: false, href: '#', icon: UsersIcon, name: 'Team' },
  { current: false, href: '#', icon: FolderIcon, name: 'Projects' },
  { current: false, href: '#', icon: CalendarIcon, name: 'Calendar' },
  { current: false, href: '#', icon: InboxIcon, name: 'Documents' },
  { current: false, href: '#', icon: ChartBarIcon, name: 'Reports' },
]
const userNavigation = [
  { href: '#', name: 'Your Profile' },
  { href: '#', name: 'Settings' },
  { href: '#', name: 'Sign out' },
]

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

const Index: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="md:hidden fixed inset-0 z-40 flex"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-indigo-700">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 pt-2 -mr-12">
                  <button
                    type="button"
                    className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white flex items-center justify-center w-10 h-10 ml-1 rounded-full"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="w-auto h-8"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
              <div className="flex-1 h-0 mt-5 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-indigo-800 text-white'
                          : 'text-indigo-100 hover:bg-indigo-600',
                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      )}
                    >
                      <item.icon
                        className="flex-shrink-0 w-6 h-6 mr-4 text-indigo-300"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="md:flex md:flex-shrink-0 hidden bg-indigo-700">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="w-auto h-8"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
            <div className="flex flex-col flex-1 mt-5">
              <nav className="flex-1 px-2 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-indigo-800 text-white'
                        : 'text-indigo-100 hover:bg-indigo-600',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    <item.icon
                      className="flex-shrink-0 w-6 h-6 mr-3 text-indigo-300"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <div className="relative z-10 flex flex-shrink-0 h-16 bg-white shadow">
          <button
            type="button"
            className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden px-4 text-gray-500 border-r border-gray-200"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3BottomLeftIcon className="w-6 h-6" aria-hidden="true" />
          </button>
          <div className="flex justify-between flex-1 px-4">
            <div className="flex flex-1">
              <form
                className="md:ml-0 flex w-full"
                action="pages/index#"
                method="GET"
              >
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="focus-within:text-gray-600 relative w-full text-gray-400">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon
                      className="w-5 h-5"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="search-field"
                    className="focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent"
                    placeholder="Search"
                    type="search"
                    name="search"
                  />
                </div>
              </form>
            </div>
            <div className="md:ml-6 flex items-center ml-4">
              <button className="hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 p-1 text-gray-400 bg-white rounded-full">
                <span className="sr-only">View notifications</span>
                <BellIcon className="w-6 h-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center max-w-xs text-sm bg-white rounded-full">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="ring-1 ring-black ring-opacity-5 focus:outline-none absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        <main className="focus:outline-none relative flex-1 overflow-y-auto">
          <div className="py-6">
            <div className="max-w-7xl sm:px-6 md:px-8 px-4 mx-auto">
              <h1 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
            </div>
            <div className="max-w-7xl sm:px-6 md:px-8 px-4 mx-auto">
              {/* Replace with your content */}
              <div className="py-4">
                <div className="h-96 border-4 border-gray-200 border-dashed rounded-lg">
                  <Header />
                </div>
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Index
