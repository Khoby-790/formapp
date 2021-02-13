/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { Input } from 'antd';


const { Search } = Input

const TabsAndSearchLayer = () => {
    return (
        <Fragment>
            <div className="w-full px-9 pt-20 flex flex-row">
                <div className="flex-1">

                    <div className="mb-5  px-9">
                        <div class="sm:hidden">
                            <label for="tabs" class="sr-only">Select a tab</label>
                            <select id="tabs" name="tabs" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                <option>My Account</option>
                                <option>Company</option>
                                <option selected>Team Members</option>
                                <option>Billing</option>
                            </select>
                        </div>
                        <div class="hidden sm:block">
                            <div class=" border-gray-200">
                                <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                    {/* <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" --> */}
                                    <a href="#" class="border-green-500 text-green-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" aria-current="page">
                                        Group form
                                    </a>
                                    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                                        My Forms
                                    </a>
                                    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                                        Shared with me
                                    </a>

                                    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                                        Billing
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex-1 flex justify-end">
                    <div className="w-1/2">
                        <Search size="large" />
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default TabsAndSearchLayer
