"use client";
import { ClipLoader } from "react-spinners";
export default function LoadingScreen() {
  return (
    <>
      <div className="main-loader w-[100%] flex justify-center items-center z-50 text-yellow-800 h-[100%] fixed bg-white">
        <ClipLoader size={40} color="#A65F00" />
      </div>
    </>
  );
}
