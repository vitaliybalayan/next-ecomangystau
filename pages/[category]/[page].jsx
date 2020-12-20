import { useRouter } 	from "next/router"
import Img	 			from "react-modal-image"
import classes 			from './Page.module.sass'
import SEO				from '../../components/SEO/SEO'
import Head				from '../../components/UI/ArticleHeader/ArticleHeader'
import More				from '../../components/SeeAlso/SeeAlso'
import PageDesc			from '../../components/UI/PageDesc/PageDesc'
import Content			from '../../components/Content/Content'
import Gallery			from '../../components/Gallery/Gallery'
import NotFound         from '../../components/NotFound/NotFound'

function Page({ page }) {
	const router = useRouter()

	if (typeof(page.status) != "undefined") {
        if (page.status === 404) {
            return <NotFound />
        }
    }

	const image = () => {
		if (page.image) {
			return <div className="col-md-12">
				<figure className={classes.img_preview}>
					<Img small={ page.image } large={ page.image } alt={ page.title } />
				</figure>
			</div>
		} else {
			return ''
		}
	}

	return (
		<article className={classes.body}>

			{/* SEO TAGS */}
				<SEO data={ page.seo } />
			{/* *** */}

			<div className="container">
				
				<Head data={page} />

				<div className={classes.article}>
					<div className="row">
						
						{ image() }

						<div className={'col-md-12'}>
							<Content article={ page.content } />
						</div>

						{ page.gallery ? <Gallery images={ page.gallery } /> : '' }
					</div>
				</div>

				<div className="row">
					<div className="col-md-10 m-auto">
	                    <PageDesc title={ page.title } desc={ page.desc } category={ page.category_name } to={ page.category_link } date={ page.date } />
					</div>
				</div>

			</div>

			<More articles={ page.other } />

		</article>
	)
}

export async function getServerSideProps(ctx) {
	const menus		= await (await fetch(`${process.env.API_URL}/api/menu/up`)).json()
	const footer	= await (await fetch(`${process.env.API_URL}/api/footer`)).json()
	
	const response	= await fetch(`${process.env.API_URL}/api/c/article/${ctx.query.category}/${ctx.query.page}`)
	const page		= await response.json()

	// Pass data to the page via props
	return { props: {menus, footer, page} }
}

export default Page