import Header from '../components/Header'
import Meta from '../components/Meta'

const Home = () => {
  // page content
  const pageTitle = 'Home'
  const pageDescription = 'welcome to react voting app'

  return (
    <>
    <div>
      <Meta title={pageTitle} description={pageDescription} />
      <Header head={pageTitle} description={pageDescription} />
    </div>
    <div class="poll-container">
  <h2 class="poll-question">What is your favorite color?</h2>
  <form class="poll-form">
    <label>
      <input type="radio" name="color" value="red" /> Red
    </label>
    <label>
      <input type="radio" name="color" value="blue" /> Blue
    </label>
    <label>
      <input type="radio" name="color" value="green" /> Green
    </label>
    <input type="submit" value="Submit" />
  </form>
</div>

    </>
  )
}

export default Home