/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from 'react';

import Navbar from './components/Navbar';
import FormItem from './components/FormItem';
import TabsAndSearchLayer from './components/TabsAndSearchLayer';
import AddNewForm from './components/AddNewForm';



function App() {

  return (
    <Fragment>
      <div className="h-screen  bg-gray-300 ">
        <Navbar />
        <TabsAndSearchLayer />

        <div className=" px-9 bg-gray-300  flex-1 overflow-scroll grid  sm:grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">

          <AddNewForm />

          {/* Single Component */}

          <FormItem />
          <FormItem />
          <FormItem />
          <FormItem />
          <FormItem />
          <FormItem />
          <FormItem />
 



        </div>
      </div>


      

    </Fragment>
  );
}

export default App;
