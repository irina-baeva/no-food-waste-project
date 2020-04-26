import React, {useEffect, Fragment} from 'react'
import {Link, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getCurrentProfile} from '../../actions/profile';
import GlobalStat from './GlobalStat'
// import Spinner from '../layout/spinner'



const Dashboard = ({getCurrentProfile, auth: {user}, profile: {profile, loading}}) => {
    useEffect(()=>{
        getCurrentProfile()
    }, [])
    
    return (<Fragment>
        <h1>Dashboard</h1>
        <p>Welcome {user && user.name}</p>
        
        {profile !== null ? (<Fragment>has</Fragment>) : 
        (<Fragment>
            <p>You don't have profile</p>
            <Link to='/create-profile'>Create profile</Link>
        </Fragment>)}
        <>
        <p>If you want to check  statistics</p>
        <Switch>
                <Link  to='/global-stat' >here</Link>
                <Route exact path='/department-stat' component={GlobalStat} />
         </Switch>
        </>
    </Fragment>)
    
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard)
