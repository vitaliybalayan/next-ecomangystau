import categoryClasses  from '../../styles/Category.module.sass'
import Head             from '../../components/UI/PageHeader/PageHeader'
import classes          from '../../styles/Services.module.sass'
import SEO              from '../../components/SEO/SEO'
import ServicesNav      from '../../components/UI/ServicesNav/ServicesNav'
import Callback         from '../../components/Callback/Callback'
import Content          from '../../components/Content/Content'

function Index({ services, article }) {
    return (
        <div className={categoryClasses.body}>

            {/* IN HEAD DOCUMENT */}
                <SEO data={ services.seo } />
            {/* *** */}

            <div className={categoryClasses.header}>
                <Head title={services.title} />
            </div>

            <div className={classes.body}>
                <ServicesNav services={services} />
            </div>

            <div className={classes.article}>
                <div className={'container'}>
                    <Content article={ article.content } />
                </div>
            </div>

            <div className={classes.callback}>
                <Callback />
            </div>
        </div>
    )
}

export async function getServerSideProps(ctx) {     
    const layout	= await (await fetch(`${process.env.API_URL}/api/layout`)).json()
    const services	= await (await fetch(`${process.env.API_URL}/api/c/services`)).json()
    
	// const article	= await (await fetch(`${process.env.API_URL}/api/c/article/${ctx.query.category}/${ctx.query.page}`)).json()
    const response	= await fetch(`${process.env.API_URL}/api/c/article/services/${ctx.query.service}`)
    const article   = await response.json()

	return { props: { services, article, layout } }
}

export default Index