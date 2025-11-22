import Cookies from "js-cookie";
export async function UserCheck() {
  const get_token = Cookies.get("token");
  if (!get_token) {
    window.location.href = "/";
  } else {
    let role;
    const sendRequest = await fetch("/api/auth/user-check", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: get_token,
      }),
    });
    const serverResponse = await sendRequest.json();
    if (serverResponse.verified) {
      role = serverResponse.user_role;
      const LoaderDIV = document.querySelector(".main-loader") as HTMLElement;
      LoaderDIV.style.display = "none";
    }
    console.log(serverResponse);
    const currentPath = window.location.pathname;
    const dashboardPath = `/dashboard/${role}`;
    if (!currentPath.startsWith(dashboardPath)) {
      window.location.href = dashboardPath;
    }
    return { role, serverResponse };
  }
}
