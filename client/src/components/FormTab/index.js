import React from "react";

const FormTab = ({ currentTab, tabs, changeTab }) => {
  return (
    <div style={{display:"flex", flexDirection: "row", width:"100%"}}>
      {tabs.map(tab=> {
        return (
          <div onClick={()=> changeTab(tab)} style={ currentTab===tab ? {opacity:"0.7"} : {} } key={tab}>
            <h3 style={{color: "white"}}>{tab}</h3>
          </div>
        )
      })}
    </div>
  );
}

export default FormTab;
