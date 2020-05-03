import React, { useEffect, Fragment } from "react";
import { Link, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import GlobalStat from "./GlobalStat";
import { makeStyles } from "@material-ui/core/styles";
// import GlobalStat from "./GlobalStat";
import LocalStat from "./LocalStat";
// import Spinner from '../layout/spinner'
import Drawer from "./Drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer />
      <main className={classes.content}>
        <h1>Dashboard</h1>
        <p>Welcome {user && user.name}</p>
        {profile !== null ? (
          <Fragment>has</Fragment>
        ) : (
          <Fragment>
            <p>You don't have profile</p>
            <Link to="/create-profile">Create profile</Link>
          </Fragment>
        )}
      </main>
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
