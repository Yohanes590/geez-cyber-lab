"use client";
import { ClipLoader } from "react-spinners";
export default function LoadingSpinner() {
  return (
    <div className="fixed flex justify-center w-[10%]">
      <ClipLoader color="#b45309" />
    </div>
  );
}
