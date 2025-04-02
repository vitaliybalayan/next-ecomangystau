import React, { Component } from 'react'
import classes 				from './Slide.module.sass'
import Link					from 'next/link'

class MainSlide extends Component {
	render() {
		return (
			<div className={'row'}>
				<div className={'col-md-7 col-xl-8'}>
					<div className={classes.body}>
						<div className={classes.title_block}>
							<Link href={`/[category]`} as={this.props.data.category_link}>
								<a className={classes.category}>{ this.props.data.category_name }</a>
							</Link>
							<Link href={ this.props.data.url }>
								<a className={classes.title}>{ this.props.data.title }</a>
							</Link>
							<p className={classes.desc}>{ this.props.data.desc }</p>
						</div>
					</div>
				</div>
				<div className={'col-md-5 col-xl-4'}>
					<div className={classes.image_block}>
						<Link href={ this.props.data.url }>
							<a className={classes.image}><img src={`${process.env.NEXT_PUBLIC_API_URL}${this.props.data.image}`} alt={ this.props.data.title }/></a>
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default MainSlide