"use client"
import { useEffect, useState } from "react";
import "./styles/layout.css";
import Banner from "./components/Banner";

const Home = () => {
  const [Client, SetClient] = useState(false)

  useEffect(() => {
    SetClient(true)
  }, [])
  
  if (!Client) return null;

  return (
    <div className="main">
         <Banner/>
    </div>
  );
}

export default Home;
