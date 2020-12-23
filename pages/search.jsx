import categoryClasses  from '../styles/Category.module.sass'
import SEO              from '../components/SEO/SEO'
import Head             from '../components/UI/PageHeader/PageHeader'
import classes          from '../styles/Search.module.sass'
import PostColumn       from '../components/UI/PostColumn/PostColumn'
import PostVideo        from '../components/UI/PostVideo/PostVideo'
import CategoryButton   from '../components/UI/CategoryButton/CategoryButton'

function Search({ results }) {

    const renderResults = () => {
        if (results.pages) {
            const pages = results.pages
            return (
                pages.map((page, index) => {

                    if (page.type === 'Article') {
                        return <div className={'col-md-4'} key={index}>
                            <div className={classes.block}>
                                <PostColumn to={ page.url } title={ page.title } image={ page.image } desc={ page.desc } date={ page.footer }/>
                            </div>
                        </div>
                    }

                    if (page.type === 'Video') {
                        return <div className={'col-md-4'} key={index}>
                            <div className={classes.block}>
                                <PostVideo image={ page.image } title={ page.title } video={ page.video } />
                            </div>
                        </div>
                    }

                    if (page.type === 'Category') {
                        return <div className={'col-md-6'} key={index}>
                            <div className={classes.block}>
                                <CategoryButton to={ page.url } title={ page.title } subtitle={ page.desc } />
                            </div>
                        </div>
                    }

                    if (page.type === 'Consultant') {
                        return <div className={'col-md-6'} key={index}>
                            <div className={classes.block}>
                                <CategoryButton to={ page.url } title={ page.title } subtitle={'Эко-консультант'} />
                            </div>
                        </div>
                    }

                    return <div key={index}>{ page.type } — {page.title}</div>
                })
            )
        } else {
            return (
                <div className={'col-md-12'} style={{ textAlign: 'left' }}>Ничего не найдено</div>
            )
        }
    }

    return (
        <div className={categoryClasses.body}>
				
            <SEO data={ results.seo } />
            <Head title={ results.title } />

            <div className={categoryClasses.body}>
                <div className="container">
                    <div className="row">
                        { renderResults() }
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(ctx) {  
	const layout	= await (await fetch(`${process.env.API_URL}/api/layout`)).json()   
    const query     = ctx.query['v']
	const response	= await fetch(`${process.env.API_URL}/api/search?v=${encodeURIComponent(query)}`)
    const results	= await response.json()
    
	// Pass data to the page via props
	return { props: { layout, results } }
}

export default Search