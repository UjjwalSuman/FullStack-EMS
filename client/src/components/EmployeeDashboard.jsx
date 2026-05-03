import React from "react";
import {
  ArrowRightIcon,
  CalendarIcon,
  DollarSignIcon,
  FileTextIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const EmployeeDashboard = ({ data }) => {
  const emp = data.employee;

  const cards = [
    {
      icon: CalendarIcon,
      value: data.currentMonthAttendance,
      title: "Days Present",
      subtitle: "This month",
    },
    {
      icon: FileTextIcon,
      value: data.pendingLeaves,
      title: "Pending Leaves",
      subtitle: "Awaiting approval",
    },
    {
      icon: DollarSignIcon,
      value: data.latestPayslip
        ? `$${data.latestPayslip.netSalary?.toLocaleString()}`
        : "N/A",
      title: "Latest Payslip",
      subtitle: "Most recent payout",
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Welcome, {emp?.firstName}!</h1>
        <p className="page-subtitle">
          {emp?.position} - {emp?.department || "No Department"}
        </p>
      </div>

      <div className="max-w-8xl mx-auto grid grid-cols-3 sm:grid-cols-3 gap-5 mt-8 mb-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative flex items-center justify-between bg-white border border-slate-200 rounded-xl p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
          >
            {/* Left border */}
            <div className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-slate-300 group-hover:bg-indigo-500 transition-colors duration-300"></div>

            {/* Text */}
            <div className="pl-4">
              <p className="text-sm font-medium text-slate-500">{card.title}</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">
                {card.value}
              </p>
            </div>

            {/* Icon */}
            <div className="p-2.5 rounded-lg bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all duration-300">
              <card.icon className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        {/* Primary Button */}
        <Link
          to="/attendance"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg 
               bg-indigo-600 text-white text-sm font-medium
               shadow-sm transition-all duration-300
               hover:bg-indigo-700 hover:shadow-md hover:-translate-y-0.5"
        >
          Mark Attendance
          <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        {/* Secondary Button */}
        <Link
          to="/leave"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg 
               border border-slate-200 text-slate-600 text-sm font-medium bg-white
               transition-all duration-300
               hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm"
        >
          Apply for Leave
        </Link>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
