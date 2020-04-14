import React from "react";
import PropTypes from "prop-types";
import MaterialTitlePanel from "./material_title_panel";




const styles = {
  sidebar: {
    width: 256,
    height: "100%"
  },
  sidebarLink: {
    display: "block",
    padding: "16px 0px",
    color: "#757575",
    textDecoration: "none"
  },
  divider: {
    margin: "8px 0",
    height: 1,
    backgroundColor: "#757575"
  },
  content: {
    padding: "16px",
    height: "100%",
    backgroundColor: "white"
  }
};



const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;




  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
        <a href="/vp" style={styles.sidebarLink}>
          <span className="fas fa-user fa-1x "></span>&emsp;Profile
        </a>
        <a href="/offer" style={styles.sidebarLink}>
          <span className="fas fa-cart-plus fa-1x "></span>&emsp;Manage Offers
        </a>
        <div style={styles.divider} />
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export default SidebarContent;
