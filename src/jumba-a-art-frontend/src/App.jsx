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

const App = () => {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jumbamarket" element={<JumbaMarketPage />} />
        <Route path="/createjumba" element={<CreateJumbaPage />} />
        <Route path="/myjumba" element={<MyJumbaPage />} />
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
