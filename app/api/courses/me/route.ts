import { NextResponse } from "next/server";
export function POST() {
  return NextResponse.json([
    {
      title: "Mathematics",
      teacher: "Mr. Bekalu",
      schedule: "Mon & Wed 10:00-11:30",
    },
    {
      title: "Physics",
      teacher: "Ms. Rahel",
      schedule: "Tue & Thu 12:00-13:30",
    },
    {
      title: "English",
      teacher: "Mr. Daniel",
      schedule: "Mon, Wed & Fri 14:00-15:00",
    },
    {
      title: "History",
      teacher: "Ms. Hana",
      schedule: "Tue & Thu 09:00-10:30",
    },
  ]);
}
