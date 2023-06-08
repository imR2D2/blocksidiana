import { connect } from "react-redux";


const Layout = ({children}) => {
    return (
        <div className="dark:bg-black">
            {children}
        </div>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

}) (Layout)