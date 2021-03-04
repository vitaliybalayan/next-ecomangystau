import SEO from '../components/SEO/SEO'

function AirKaz ({ page }) {
    return (
        <div className={'container mt-5'}>
            <SEO data={ page.seo } />
            <iframe src="https://airkaz.org/aktau.php" frameborder="0" width={'100%'} height={'500'}></iframe>
        </div>
    )
}

export async function getServerSideProps(ctx) {
	const layout	= await (await fetch(`${process.env.API_URL}/api/layout`)).json()
	
	// const response	= await fetch(`${process.env.API_URL}/api/c/article/${ctx.query.category}/${ctx.query.page}`)
	// const page		= await response.json()

    const page          = {
        seo: {
            author: "PARALLAX.PRO",
            image: "//storage.ecomangystau.kz/storage/settings/6/og_image.jpg",
            title: "Чистый воздух | Ecomangystau",
        }
    }

	// Pass data to the page via props
	return { props: {layout, page} }
}

export default AirKaz