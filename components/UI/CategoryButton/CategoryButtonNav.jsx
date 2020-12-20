import React, { Component } from 'react'
import Link 		        from 'next/link'
import classes              from './CategoryButton.module.sass'
import ActiveLink 	        from '../../../UI/ActiveLink'

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
            <ActiveLink href={this.props.to} activeClassName={classes.btn_active}>
                <a className={classes.button}>
                    <div>
                        <h3 className={classes.title}>{ this.props.title }</h3>
                        { desc() }
                    </div>
                </a>
            </ActiveLink>
        )
    }
}

export default CategoryButton