import { Building2Icon, CalendarIcon, FileTextIcon, UsersIcon } from 'lucide-react'
import React from 'react'

const AdminDashboard = ({ data }) => {
    const stats = [
        {
            icon: UsersIcon,
            value: data.totalEmployees,
            label: "Total Employees",
            description: "Active workforce",
        },
        {
            icon: Building2Icon,
            value: data.totalDepartments,
            label: "Departments",
            description: "Organization units",
        },
        {
            icon: CalendarIcon,
            value: data.todayAttendance,
            label: "Today's Attendance",
            description: "Checked in today",
        },
        {
            icon: FileTextIcon,
            value: data.pendingLeaves,
            label: "Pending Leaves",
            description: "Awaiting approval",
        },
    ]
  return (
       <div className="animate-fade-in">
        <div className="page-header">
            <h1 className='page-title'>Dashboard</h1>
            <p className="page-subtitle">
                Welcome back, Admin — here's your overview
            </p>
        </div>

        <div className="max-w-8xl mx-auto grid grid-cols-4 sm:grid-cols-4 gap-5 mt-8 mb-8">
            {stats.map((s)=>(
                <div key={s.label} className="relative flex items-center justify-between bg-white border border-slate-200 rounded-xl p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
                    <div>
                        <div className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-slate-300 group-hover:bg-indigo-500 transition-colors duration-300"/>
                        <p className='text-sm font-medium text-slate-700'>{s.label}</p>
                        <p className='text-2xl font-bold text-slate-900 mt-1'>{s.value}</p>
                    </div>
                    <s.icon className='size-10 p-2.5 rounded-lg bg-slate-100  text-slate-600 group-hover:bg-indigo-50  group-hover:text-indigo-600 transition-colors duration-200'/>
                </div>
            ))}
        </div>   

    </div>
  )
}

export default AdminDashboard