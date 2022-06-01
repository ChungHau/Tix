/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';

export default function Header() {
  return (
    <header className='bg-slate-700 opacity-95  fixed w-full top-0 left-0 right-0 z-50 '>
      <Popover className='relative'>
        <div className='max-w-8xl mx-auto px-4 sm:px-6'>
          <div className='flex justify-between items-center py-4 md:justify-start md:space-x-10'>
            <div className='flex justify-start md:w-0 md:flex-1'>
              <a href='#'>
                <img
                  className='h-8 w-12 sm:h-10'
                  src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                  alt=''
                />
              </a>
            </div>
            <div className='-mr-2 -my-2 md:hidden'>
              <Popover.Button className='bg-indigo-600 rounded-md p-2 inline-flex items-center justify-center hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                <span className='sr-only'>Open menu</span>
                <MenuIcon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
            </div>
            <Popover.Group as='nav' className='hidden md:flex space-x-10'>
              <a
                href='#'
                className='text-base xl:text-xl font-bold text-slate-50 hover:text-indigo-500'>
                Lịch chiếu
              </a>

              <a
                href='#'
                className='text-base xl:text-xl font-bold text-slate-50 hover:text-indigo-500'>
                Cụm rạp
              </a>
              <a
                href='#'
                className='text-base xl:text-xl font-bold text-slate-50 hover:text-indigo-500'>
                Tin tức
              </a>
              <a
                href='#'
                className='text-base xl:text-xl font-bold text-slate-50 hover:text-indigo-500'>
                Ứng dụng
              </a>
            </Popover.Group>
            <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
              <a
                href='#'
                className='whitespace-nowrap text-base xl:text-xl font-bold text-slate-50 '>
                Sign in
              </a>
              <a
                href='#'
                className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base xl:text-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700'>
                Sign up
              </a>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'>
          <Popover.Panel
            focus
            className='absolute top-0 inset-x-0 p-2 z-50 transition transform origin-top-right md:hidden'>
            <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-800 divide-y-2 divide-gray-50'>
              <div className='pt-5 pb-6 px-5'>
                <div className='flex items-center justify-between'>
                  <div>
                    <img
                      className='h-8 w-auto'
                      src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                      alt='Workflow'
                    />
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Close menu</span>
                      <XIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='mt-6'>
                  <nav className='grid gap-y-8'></nav>
                </div>
              </div>
              <div className='py-6 px-5 space-y-6'>
                <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                  <a
                    href='#'
                    className='text-base xl:text-xl font-medium text-slate-50 hover:text-indigo-600'>
                    Lịch chiếu
                  </a>

                  <a
                    href='#'
                    className='text-base xl:text-xl font-medium text-slate-50 hover:text-indigo-600'>
                    Cụm rạp
                  </a>
                  <a
                    href='#'
                    className='text-base xl:text-xl font-medium text-slate-50 hover:text-indigo-600'>
                    Tin tức
                  </a>
                  <a
                    href='#'
                    className='text-base xl:text-xl font-medium text-slate-50 hover:text-indigo-600'>
                    Ứng dụng
                  </a>
                </div>
                <div>
                  <a
                    href='#'
                    className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base xl:text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
                    Sign up
                  </a>
                  <p className='mt-6 text-center text-base xl:text-xl font-medium text-gray-500'>
                    Existing customer?{' '}
                    <a
                      href='#'
                      className='text-indigo-600 hover:text-indigo-500'>
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}
