import './Dashboard.css'
import Header from '../../components/header/Header'
import Copyright from '../../components/Copyright/Copyright'
import DashboardControls from '../../components/DashboardControls/DashboardControls'
import DashboardDisplay from '../../components/DashboardDisplay/DashboardDisplay'

function Dashboard() {
  return (
    <div className='dashboard'>
      <Header/>
      <div className="dashbaord-inner">
        <DashboardControls/>
        <DashboardDisplay/>
      </div>
      <Copyright/>
    </div>
  )
}

export default Dashboard