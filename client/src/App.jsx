import {Toaster} from 'react-hot-toast'
import {Route, Routes, Navigate} from 'react-router-dom'
import LoginLanding from './pages/loginLanding'
import Layout from './pages/Layout'
import Employees from './pages/Employees'
import Leave from './pages/Leave'
import Payslips from './pages/Payslips'
import Settings from './pages/Settings'
import Dashboard from './pages/Dashboard'
import Attendance from './pages/Attendance'
import PrintPayslip from './pages/PrintPayslip'

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/login' element={ <LoginLanding /> } />
        <Route element={ <Layout /> } >
          <Route path='/dashboard' element={ <Dashboard/> } />
          <Route path='/employees' element={ <Employees/> } />
          <Route path='/attendence' element={ <Attendance/> } />
          <Route path='/leave' element={ <Leave /> } />
          <Route path='/payslips' element={ <Payslips/> } />
          <Route path='/settings' element={ <Settings /> } />
        </Route>
        <Route path='/print/payslips/:id' element={ <PrintPayslip /> } />
        <Route path='*' element={ < Navigate to= "/dashboard" replace /> } />
      </Routes>
    </>
  )
}

export default App