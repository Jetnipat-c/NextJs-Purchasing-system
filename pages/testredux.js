import { connect } from 'react-redux'


const testredux = (props) =>{
    return (
        <div>
            testredux : {props.info}
        </div>
    )

}
const mapStateToProps = state => ({
    info: state.Profile.user
});

const mapDispatchToProps = dispatch => {
    return {
        addProfile: (props) =>dispatch(addProfile(props))
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(testredux);