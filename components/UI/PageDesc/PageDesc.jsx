import Link         from 'next/link'
import classes      from './PageDesc.module.sass'
import Share		from '../Share/Share'

function PageDesc(props) {
	return (
		<div className="row align-items-center">
			<div className="col-lg-8">
				<p className={ classes.desc }>Опубликовано в <Link href={`/[category]`} as={`${props.to}`}><a>{ props.category }</a></Link> • { props.date }</p>
			</div>
			<div className="col-lg-4 justify-content-lg-end d-flex mt-lg-0 mt-4">
				<Share title={ props.title } desc={ props.desc } />
			</div>
		</div>
	)
}

export default PageDesc