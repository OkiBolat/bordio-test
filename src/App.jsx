import './App.css';

import { useSelector } from 'react-redux';
import { SideBar } from './page/SideBar';
import { ToolsColumn } from './page/ToolsColumn';
import { MainHeader } from './page/MainHeader';
import { MainTasks } from './page/MainTasks';

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
