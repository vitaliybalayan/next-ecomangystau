import Head from 'next/head'
import { useRouter } from 'next/router'

function SEO(props) {
    const router = useRouter()
    const URL = `${process.env.APP_URL}${router.asPath}`

    return (
        <Head>
            <title>{ props.data.title }</title>
            <meta name="author"                 content={ props.data.author } />
            <meta name="keywords"               content={ props.data.tags } />
            <meta property="og:type"            content="website" />
            <meta property="og:url"             content={ URL } />
            <meta property="og:title"           content={ props.data.title } />
            <meta property="og:description"     content={ props.data.desc } />

            <meta property="og:image"           content={ props.data.image } />
            <meta property="og:image:width"     content="1200" />
            <meta property="og:image:height"    content="630" />
        </Head>
    )
}

export default SEO