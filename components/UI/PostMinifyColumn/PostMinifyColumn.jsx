import { useRouter } from 'next/router'
import React    from "react";
import Link     from 'next/link'
import classes  from './PostMinifyColumn.module.sass'


function PostMinifyColumn(props) {

    const router = useRouter()

    function _handleClick(event, link) {
        event.preventDefault();
        router.push(link)
        // console.log(link)
    }

    return (
        <Link href={ props.to }>
            <a className={classes.block}>
                <article className="row">
                    <div className="col-sm-6">
                        <div className={classes.image}>
                            <img src={props.image} alt={props.title} />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className={classes.content}>
                            <p className={classes.category} onClick={ event => _handleClick(event, props.category_link) }>{ props.category }</p>
                            <h3 className={classes.title}>{ props.title }</h3>
                            <p className={classes.date}>{ props.date }</p>
                        </div>
                    </div>
                </article>
            </a>
        </Link>
    )
}

export default PostMinifyColumn