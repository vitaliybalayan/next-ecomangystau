import categoryClasses  from '../styles/Category.module.sass'
import classes          from '../styles/FAQ.module.sass'
import SEO              from '../components/SEO/SEO'
import Head             from '../components/UI/PageHeader/PageHeader'

function FAQ({ results }) {
    return (
        <div className={categoryClasses.body}>
				
            <SEO data={ results.seo } />

            <div className="container">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <Head title={'Эко-консультант'} />
                    </div>
                </div>
            </div>

            <div className={classes.body}>
                <div className="container faq-style-wrapper">
                    <div className="row">
                        <div className="col-md-10 m-auto">

                            <div {...{ className: 'wrapper' }}>
                                <ul {...{ className: 'accordion-list' }}>
                                {results.rows.map((data, key) => {
                                    return (
                                    <li {...{ className: 'accordion-list__item', key }}>
                                        <AccordionItem {...data} />
                                    </li>
                                    )
                                })}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

class AccordionItem extends React.Component {
    state = {
      opened: false
    }
    
    render () {
      const {
        props: {
          content,
          title
        },
        state: {
          opened
        }
      } = this
      
      return (
        <div
          {...{
            className: `accordion-item ${opened && 'accordion-item--opened'}`,
            onClick: () => { this.setState({ opened: !opened }) }
          }}
        >
          <div {...{ className: 'accordion-item__line' }}>
            <h3 {...{ className: 'accordion-item__title' }}>
              {title}
            </h3>
            <span {...{ className: 'accordion-item__icon' }}/>
          </div>
            <div {...{ className: 'accordion-item__inner' }}>
              <div {...{ className: 'accordion-item__content' }}>
                <p {...{ className: 'accordion-item__paragraph' }}>
                  {content}
                </p>
              </div>
            </div>
        </div>
      )
    }
  }

export async function getServerSideProps() {    
  const layout	= await (await fetch(`${process.env.API_URL}/api/layout`)).json()

	const response	= await fetch(`${process.env.API_URL}/api/eco-faq`)
	const results	= await response.json()

	// Pass data to the page via props
	return { props: { results, layout } }
}

export default FAQ