import classes from './ArticleHeader.module.sass'
import PageDesc from '../PageDesc/PageDesc'

function ArticleHeader(props) {
    return (
        <div className={classes.header}>
            <div className="row">
                <div className="col-md-10 m-auto">
                    <h1 className={classes.title}>{ props.data.title }</h1>
                    <PageDesc title={ props.data.title } desc={ props.data.desc } category={ props.data.category_name } to={ props.data.category_link } date={ props.data.date } />
                </div>
            </div>
        </div>
    )
}

export default ArticleHeader