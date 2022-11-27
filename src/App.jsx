import './App.css';
import { SideBar } from './components/SideBar';
import { ToolsColumn } from './components/ToolsColumn';
import { MainHeader } from './components/MainHeader';
import { MainTasks } from './components/MainTasks';
import { useSelector } from 'react-redux';


function App() {
  const rows = useSelector(store => store.canban.rows)
  return (
    <div className="App">
      <SideBar />
      <ToolsColumn />
      <div className="main">
        <MainHeader />
        <MainTasks data={rows} />
      </div>
    </div>
  );
}

export default App;
