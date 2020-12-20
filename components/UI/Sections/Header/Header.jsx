import Link         from 'next/link'
import classes      from './Header.module.sass'

function Header(props) {
    return (
        <div className={classes.block}>
            <div className="row align-items-center">
                <div className="col-md-8">
                    <h2 className={classes.h2_title}>{ props.title }</h2>
                </div>
                { props.more ? (
                    <div className="col-md-4 justify-content-md-end mt-3 mt-md-0 d-flex">
                        <Link href={props.more}><a className={classes.button}>Посмотреть все</a></Link>
                    </div>
                ) : ('') }
            </div>
        </div>
    )
}

export default Header