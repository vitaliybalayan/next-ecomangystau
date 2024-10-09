import '../style.css'
import 'swiper/swiper.scss'
import '../node_modules/react-modal-video/scss/modal-video.scss'
import App, { Container }              from 'next/app'
import Layout           from '../hoc/Layout/Layout'
import NextNprogress    from 'nextjs-progressbar'

export default class MyApp extends App {

    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}
        
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
    
        /* your own logic */
    
        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props
        
        return (
            <Container>
                <Layout layout={pageProps.layout} >
                    <NextNprogress color="#87B550" startPosition={0.4} stopDelayMs={200} height="2" showSpinner="false" options={{ showSpinner: false }} />
                    <Component {...pageProps} />
                </Layout>
            </Container>
        )
    }
}