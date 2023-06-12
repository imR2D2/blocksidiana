import { connect } from "react-redux";


const Layout = ({children}) => {
    return (
        <div className="dark:bg-slate-900">
            {children}
        </div>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

}) (Layout)