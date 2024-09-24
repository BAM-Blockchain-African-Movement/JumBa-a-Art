import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import MyJumbaPage from "./pages/MyJumbaPage";
import CreateJumbaPage from "./pages/CreateJumbaPage";
import JumbaMarketPage from "./pages/JumbaMarketPage";
import { Principal } from "@dfinity/principal";

const App = () => {

  const CURRENT_USER_ID = "rvwtz-m4jrc-o7isb-7f5ce-ypx3t-tq6ud-7io2q-hxzi5-4tlzh-v665q-tae"
  const user_id = Principal.fromText(CURRENT_USER_ID);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jumbamarket" element={<JumbaMarketPage user_id={user_id}/>} />
        <Route path="/createjumba" element={<CreateJumbaPage />} />
        <Route path="/myjumba" element={<MyJumbaPage user_id={user_id}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  // <div className=''>App</div>
  // <>
  //   <div className="bg-[#F6F7F8]">
  //     <Navbar />
  //     {/* <Hero /> */}
  //     {/* <CreateNftForm /> */}
  //     {/* <NftListing /> */}
  //     <NftListings />
  //     <Footer/>
  //   </div>
  // </>
  //Router

  return <RouterProvider router={router} />;
};

export default App;
