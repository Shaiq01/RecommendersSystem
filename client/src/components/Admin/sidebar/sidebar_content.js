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
    color: "black",
    textDecoration: "none",
    
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
        <a href="/vp" style={styles.sidebarLink} className="mx-auto"  >
          <span className="fas fa-user-tie fa-1x "></span>&emsp;Profile
        </a>
        <a href="/adminoffer" style={styles.sidebarLink} className="mx-auto">
          <span className="fas fa-cart-plus fa-1x "></span>&emsp;Manage Offer
        </a>
        <a href="/managecategory" style={styles.sidebarLink} className="mx-auto">
          <span className="fas fa-clone fa-1x "></span>&emsp;Manage Categories
        </a>
        <a style={styles.sidebarLink} data-toggle="collapse" href="#collapseExample" className="mx-auto">
          <span className="far fa-user fa-1x "></span>&emsp;Manage Users
        </a>
        <div class="collapse" id="collapseExample">

          <a href="/xx" style={styles.sidebarLink}>&emsp;&emsp;<span className="far fa-edit fa-1x "></span>&nbsp;&nbsp;Admin</a>
          <a href="/xx" style={styles.sidebarLink}>&emsp;&emsp;<span className="far fa-edit fa-1x "></span>&nbsp; &nbsp;Student</a>
          <a href="/xx" style={styles.sidebarLink}>&emsp;&emsp;<span className="far fa-edit fa-1x "></span>&nbsp;&nbsp;Vendor</a>

      </div>
        <a href="/logout" style={styles.sidebarLink}>
          <span className="fas fa-sign-out-alt fa-1x "></span>&emsp;Log Out
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
