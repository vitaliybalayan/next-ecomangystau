import categoryClasses  from '../../styles/Category.module.sass'
import Head             from '../../components/UI/PageHeader/PageHeader'
import classes          from '../../styles/Services.module.sass'
import SEO              from '../../components/SEO/SEO'
import ServicesNav      from '../../components/UI/ServicesNav/ServicesNav'
import Callback         from '../../components/Callback/Callback'

function Index({ services }) {
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

            <div className={classes.callback}>
                <Callback />
            </div>
        </div>
    )
}

export async function getServerSideProps() {  
    const layout	= await (await fetch(`${process.env.API_URL}/api/layout`)).json()

	const response	= await fetch(`${process.env.API_URL}/api/c/services`)
	const services	= await response.json()

	return { props: { services, layout } }
}

export default Index