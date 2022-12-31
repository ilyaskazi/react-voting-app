import { Helmet } from 'react-helmet'

const Meta = ({ title, description }) => {
  return (
    <Helmet htmlAttributes>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default Meta
