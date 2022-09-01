import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function BackToTop() {
  const { pathname } = useLocation();
  let top = ""
  if(!pathname.includes("/page")){
    top = pathname
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [top]);

  return null;
}