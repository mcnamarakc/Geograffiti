import React from "react";

const styles = {
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    maxWidth: "1024px",
    margin: "0 auto"
  },
  item: {
    width: "50%"
  },
  itemActive: {
    width: "50%",
    opacity: 0.7
  }
}
const FormTab = ({ currentTab, tabs, changeTab }) => {
  return (
    <div style={styles.row}>
      {tabs.map(tab=> {
        return (
          <div onClick={()=> changeTab(tab)} style={ currentTab===tab ? styles.itemActive : styles.item } key={tab}>
            <h3 style={{color: "white"}}>{tab}</h3>
          </div>
        )
      })}
    </div>
  );
}

export default FormTab;
