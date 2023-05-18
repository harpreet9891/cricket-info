import { useState } from 'react';
import './App.css';
import { mockData } from './mockData';

function App() {
  const[tab, setTab] = useState(1);
  function activeTab(tabNumber){
    setTab(tabNumber);
  }
  const ipl_teams = mockData.filter((team)=> team.item === "IPL Team");
  const cricket_bats = mockData.filter((team)=> team.item === "Cricket Bats");
  const cricket_balls = mockData.filter((team)=> team.item === "Cricket Balls");

  const data = tab === 1 ? ipl_teams : tab === 2 ? cricket_bats : tab === 3 ? cricket_balls : null;

  return (
    <div className="App">
        <div className='category'>
          <div className='cricket_info'>
            <div class="cricket-item" onClick={()=> activeTab(1)} style={{borderBottom: tab === 1 ? "5px solid yellow": ""}}>IPL Team</div>
            <div class="cricket-item" onClick={()=> activeTab(2)} style={{borderBottom: tab === 2 ? "5px solid yellow": ""}}>Cricket Bats</div>
            <div class="cricket-item" onClick={()=> activeTab(3)} style={{borderBottom: tab === 3 ? "5px solid yellow": ""}}>Cricket Balls</div>
          </div>
        </div>
        <div className='item_div'>
            {data && data.map((value)=>{
              return(
                <div><span>{value.description}</span></div>
              )
            })}
        </div>
    </div>
  );
}

export default App;
