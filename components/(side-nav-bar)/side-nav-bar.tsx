"use client";
import { dashboardFeatures } from "@/lib/(dinamic-dashboard)/dinamic-dashboard";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { UserCheck } from "@/lib/(authorization)/user-check";
import Link from "next/link";
import Cookies from "js-cookie";
import LoadingScreen from "../(same-component)/wait-screen";
import { toast } from "react-hot-toast";
export default function Sidebar() {
  const [mapDashboardButtons, setMapDashboardButtons] = useState<any[]>([]);
  const [userRole, setUserRole] = useState<string>("");
  const [userProfileImage, setUserProfile] = useState<string | null>(null);

  const Logout = () => {
    if (confirm("are you suer for logout ?")) {
      Cookies.remove("token");
      window.location.reload();
    } else {
      toast.success("process cancel success");
    }
  };

  const pathname = usePathname();

  const [username, setUsername] = useState<string>("...");
  const [email, setEmail] = useState<string>("...");

  const fetchUserData = async () => {
    const role = await UserCheck();
    setUserRole(role?.role);
    const filteredFeatures = dashboardFeatures.filter((feature) =>
      feature.user_role.includes(role?.role)
    );
    setMapDashboardButtons(filteredFeatures);
    setUsername(role?.serverResponse.user_name);
    setEmail(role?.serverResponse.user_email);
    setUserProfile(role?.serverResponse.user_profile_pic);
    console.log(role?.serverResponse);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <LoadingScreen />
      <div className="flex flex-col fixed h-screen w-64 bg-yellow-50 text-brown-900 shadow-lg">
        {/* Top logo */}
        <div className="flex flex-col items-center justify-center py-6 border-b border-yellow-200">
          <div className="flex items-center space-x-2">
            <div className="bg-yellow-600 text-white font-bold text-xl w-10 h-10 flex items-center justify-center rounded">
              GZ
            </div>
            <div>
              <h1 className="text-xl font-bold">Alem Collage</h1>
              <p className="text-sm text-yellow-800">
                Student Dashboard Overview
              </p>
            </div>
          </div>
        </div>

        {/* looped buttons */}
        <nav className="flex-1 px-4 py-6">
          {mapDashboardButtons.map((feature, index) => {
            const IconComponent = feature.icon;
            const fullPath =
              feature.href === ""
                ? `/dashboard/${userRole}`
                : `/dashboard/${userRole}${feature.href}`;
            return (
              <Link
                href={"/dashboard/" + userRole + "/" + feature.href}
                key={index}
              >
                <div
                  className={`flex items-center mt-[20px] gap-2 px-4 py-2 h-[40px] text-brown-900 rounded hover:bg-yellow-700 hover:text-white transition-colors ${
                    pathname === fullPath ? "bg-yellow-700 text-white" : ""
                  }`}
                >
                  <div className="icon-content text-yellow-900">
                    <IconComponent />
                  </div>
                  <div className="title-content ">{feature.title}</div>
                </div>
              </Link>
            );
          })}
        </nav>

        <div
          onClick={Logout}
          className="px-6 py-4 border-t cursor-default bg-red-100 text-red-500 hover:bg-red-500 cursor-pointer transition-all hover:text-white mt-auto flex items-center space-x-3"
        >
          <div className="icon"></div>
          <div className="text-content">Logout</div>
        </div>

        <div className="px-6 py-4 border-t border-yellow-200 cursor-default hover:bg-yellow-200 mt-auto flex items-center space-x-3">
          <div className="w-15 h-15 rounded-full overflow-hidden shadow-md flex-shrink-0">
            <img
              src={userProfileImage ?? "/assets/default-profile.jpg"}
              alt="Profile picture"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <p className="font-semibold">{username}</p>
            <p className="text-sm text-yellow-800">{email}</p>
          </div>
        </div>
      </div>
    </>
  );
}
