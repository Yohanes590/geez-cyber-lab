"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { ClipLoader } from "react-spinners";
interface responseData {
  email: string;
  fullname: string;
  grade: string;
  section: string;
  user_role: string;
}
export default function ChatRender() {
  const [searchParam, setParam] = useState<string>("");
  const [studentData, setData] = useState<responseData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [buttonLoading, setButtonLoading] = useState<boolean>(false);

  const SearchStudent = async () => {
    if (!searchParam) {
      toast.error("please insert student name");
    } else {
      setButtonLoading(true);
      const sendNameIntoServer = await fetch("/api/student-list", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          student_name: searchParam,
        }),
      });
      const serverResponse = await sendNameIntoServer.json();
      setButtonLoading(false);
      setLoading(false);
      console.log(serverResponse);
      if (serverResponse.length == 0) {
        setLoading(true);
        toast.error("no available student");
      } else {
        setData(serverResponse);
      }
    }
  };
  return (
    <div>
      <div className="title-bar">
        <h1 className="text-[25px] font-semibold text-[#fda760]">
          Student List
        </h1>
        <p className="text-[18px]">Quick look at everyone</p>
      </div>
      <div className="search-bar flex items-center flex-wrap mt-[20px]">
        <input
          type="text"
          value={searchParam}
          placeholder="Selamawit Admasu , Abenezer Dessalegn , Kaleb Mesfin ... "
          className="w-[80%] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          onChange={(e: any) => {
            setParam(e.target.value);
          }}
        />
        <button
          onClick={SearchStudent}
          disabled={buttonLoading}
          className={`ml-2 px-4 py-2 bg-yellow-600 text-white rounded-lg gap-2 flex justify-center items-center hover:bg-yellow-700 transition ${
            buttonLoading ? "cursor-no-drop bg-amber-950" : "cursor-default"
          }`}
        >
          {buttonLoading ? (
            <>
              Loading
              <ClipLoader size={15} color="white" />
            </>
          ) : (
            "Search"
          )}
        </button>
      </div>
      {loading ? (
        <div className="flex justify-center items-center cursor-default text-[#a54200c7] mt-[40px]">
          No student data available ...
        </div>
      ) : (
        <div className="max-w-5xl mx-auto mt-6 shadow-lg rounded-lg overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-5 bg-amber-800 text-white font-semibold p-3 text-center">
            <div>Name</div>
            <div>Grade</div>
            <div>Email</div>
            <div>Section</div>
            <div>Role</div>
          </div>

          {/* Single Student Row */}
          {studentData.map((students, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-5 bg-amber-50 text-gray-800 p-3 text-center border-b border-amber-200 hover:bg-amber-100 transition-colors"
              >
                <div>{students.fullname}</div>
                <div>{students.grade}</div>
                <div>{students.email}</div>
                <div>{students.section}</div>
                <div>{students.user_role}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
