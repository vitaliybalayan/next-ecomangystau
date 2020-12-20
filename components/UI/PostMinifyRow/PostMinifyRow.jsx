import React, { Component } from 'react'
import Link                 from 'next/link'
import classes              from './PostMinifyRow.module.sass'

class PostMinifyRow extends Component {
    render() {
        return(
            <Link href={ this.props.to }>
                <a className={classes.block}>
                    <div className={classes.title}>{ this.props.title }</div>
                    <div className={classes.footer}><p>{ this.props.subtitle }</p></div>
                </a>
            </Link>
        )
    }
}

export default PostMinifyRow