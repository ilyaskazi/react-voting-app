import Header from '../components/Header'
import Meta from '../components/Meta'

const Home = () => {
  // page content
  const pageTitle = 'Home'
  const pageDescription = 'welcome to react voting app'

  return (
    <div>
      <Meta title={pageTitle} description={pageDescription} />
      <Header head={pageTitle} description={pageDescription} />
    </div>
  )
}

export default Home