import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Item from "./components/Item";
import JoinForm from "./components/JoinForm";
import LoginForm from "./components/LoginForm";
import Study from "./pages/Study";
import Trade from "./pages/Trade";
import TradeItem from "./pages/TradeItem";
import TradeList from "./pages/TradeList";
import LostMap from "./pages/LostMap";
import Login from "./components/LoginForm";
import Join from "./components/JoinForm";
import Study1 from "./pages/StudyPost";
import StudyApply from "./pages/StudyApply";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/Item" element={<Item />} />
          <Route path="/JoinForm" element={<JoinForm />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/Study" element={<Study />} />
          <Route path="/Trade" element={<Trade />} />
          <Route path="/Trade/TradeList/TradeItem" element={<TradeItem />} />
          <Route path="/Trade/TradeList" element={<TradeList />} />
          <Route path="/LostMap" element={<LostMap />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/Study/StudyPost" element={<Study1 />} />
          <Route path="/Study/StudyPost/StudyApply" element={<StudyApply />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
