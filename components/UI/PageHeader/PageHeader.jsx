import classes  from './PageHeader.module.sass'
import Share    from '../Share/Share'

function PageHeader(props) {
    return (
        <div className={'container'}>
            <div className={'row align-items-end'}>
                <div className="col-lg-8">
                    <div className="d-flex align-items-center">
                        <h1 className={classes.title}>{ props.title }</h1>
                        { props.count_articles ? <span className={classes.count}>{ props.count_articles }</span> : '' }
                    </div>
                    { props.desc ?  <p className={classes.desc}>{ props.desc }</p> : ''}
                </div>
                <div className="col-lg-4 justify-content-lg-end d-flex mt-lg-0 mt-5">
                    <Share title={ props.title } desc={ props.desc } />
                </div>
            </div>
        </div>
    )
}

export default PageHeader