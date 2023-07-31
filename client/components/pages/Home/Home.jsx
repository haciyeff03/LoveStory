import CardComponent from "../../FeedCards/CardComponent"
import './home.scss'

const Home = () => {
  return (
    <div className="home_page">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <CardComponent />
          </div>
          <div className="col-lg-4">
            <CardComponent />
          </div>
          <div className="col-lg-4">
            <CardComponent />
          </div>
          <div className="col-lg-4">
            <CardComponent />
          </div>
          <div className="col-lg-4">
            <CardComponent />
          </div>
          <div className="col-lg-4">
            <CardComponent />
          </div>
          <div className="col-lg-4">
            <CardComponent />
          </div>
          <div className="col-lg-4">
            <CardComponent />
          </div>
          <div className="col-lg-4">
            <CardComponent />
          </div>
          <div className="col-lg-4">
            <CardComponent />
          </div>
          <div className="col-lg-4">
            <CardComponent />
          </div>
          <div className="col-lg-4">
            <CardComponent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home