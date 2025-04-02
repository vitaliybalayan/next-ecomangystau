import { useRouter } 	from "next/router"
import Img	 			from "react-modal-image"
import classes 			from './[category]/Page.module.sass'
import SEO				from '../components/SEO/SEO'
import Head				from '../components/UI/ArticleHeader/ArticleHeader'
import More				from '../components/SeeAlso/SeeAlso'
import PageDesc			from '../components/UI/PageDesc/PageDesc'
import Content			from '../components/Content/Content'
import Gallery			from '../components/Gallery/Gallery'
import NotFound         from '../components/NotFound/NotFound'
import CategoryButton from "../components/UI/CategoryButton/CategoryButton"

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
					<Img small={ `${process.env.NEXT_PUBLIC_API_URL}${page.image}` } large={ `${process.env.NEXT_PUBLIC_API_URL}${page.image}` } alt={ page.title } />
				</figure>
			</div>
		} else {
			return ''
		}
	}

	const iframe = () => {
		if (page.iframe) {
			return <div className={'d-flex justify-content-center mb-5'} dangerouslySetInnerHTML={{__html: page.iframe}}></div>
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

                <div className="row">
                    <div className={'col-md-4'}>
                        <CategoryButton title={'Русский язык'} to={'/consolidation?locale=ru'} />
                    </div>
                    <div className={'col-md-4'}>
                        <CategoryButton title={'English language'} to={'/consolidation?locale=en'} />
                    </div>
                    <div className={'col-md-4'}>
                        <CategoryButton title={'Қазақ тілі'} to={'/consolidation?locale=kz'} />
                    </div>
                </div>

				<div className={classes.article}>
					<div className="row">
						
						{ image() }

						<div className={'col-md-12'}>
							<Content article={ page.content } />
						</div>

						{ page.gallery ? <Gallery images={ page.gallery } /> : '' }
					</div>
				</div>

				{ iframe() }

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
	const layout	= await (await fetch(`${process.env.API_URL}/api/layout`)).json()

    const locale = ctx.query.locale || 'ru'
	
	const response	= await fetch(`${process.env.API_URL}/api/c/article_id/${process.env.consolidation_id}?locale=${locale}`)
	const page		= await response.json()

    console.log(page);
    

	// Pass data to the page via props
	return { props: {layout, page} }
}

export default Page