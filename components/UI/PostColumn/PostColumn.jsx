import Link     from 'next/link'
import classes  from './PostColumn.module.sass'

function PostColumn(props) {
    return (
        <Link href={`/[category]/[page]`} as={`${props.to}`}>
            <a className={'d-block'}>
                <article className={classes.article}>
                    <div className={ classes.image }>
                        <img src={ props.image } alt={ props.title }/>
                    </div>
                    <h3 className={ classes.title }>{ props.title }</h3>
                    <p className={ classes.desc }>{ props.desc }</p>
                    <p className={ classes.date }>{ props.date }</p>
                </article>
            </a>
        </Link>
    )
}

export default PostColumn