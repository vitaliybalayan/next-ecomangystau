import React, { Component } from 'react'
import Link 		        from 'next/link'
import classes              from './CategoryButton.module.sass'

class CategoryButton extends Component {
    render() {

        const desc = () => {
            if (this.props.subtitle) {
                return <p className={classes.subtitle}>{ this.props.subtitle }</p>
            } else {
                return ''
            }
        }

        return(
            <Link href={this.props.to}>
                <a className={classes.button}>
                    <div>
                        <h3 className={classes.title}>{ this.props.title }</h3>
                        { desc() }
                    </div>
                </a>
            </Link>
        )
    }
}

export default CategoryButton