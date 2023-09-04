import { useEffect, useState } from "react"
import CardComponent from "../../FeedCards/CardComponent"
import './home.scss'

const Home = () => {
  const [toggleFilterMenu, setToggleFilterMenu] = useState(false);

  const openedMenu = {
    gridTemplateRows: '1fr',
    paddingBottom: '18px'
  }
  const closedMenu = {
    gridTemplateRows: '0fr',
    padding: '0',
    boxShadow: 'none'
  }

  const handleFilter = (flt) => {
    setToggleFilterMenu(false);
    setFilter(flt);
  }

  const [cards, setCards] = useState([]);

  const [filter, setFilter] = useState('all');

  const [filteredCards, setFilteredCards] = useState([]);


  // const carddata = [
  //   {
  //     "images": [
  //       "https://source.unsplash.com/random/?water,beach",
  //       "https://source.unsplash.com/random/?forest",
  //       "https://source.unsplash.com/random/?mountain,sunset"
  //     ],
  //     "description": "A beautiful beach with clear blue water.",
  //     "tags": "#beach #water #vacation #wedding"
  //   },
  //   {
  //     "images": [
  //       "https://source.unsplash.com/random/?city",
  //       "https://source.unsplash.com/random/?architecture",
  //       "https://source.unsplash.com/random/?street,lights"
  //     ],
  //     "description": "A vibrant cityscape with modern architecture.",
  //     "tags": "#city #architecture #urban #lovestory"
  //   },
  //   {
  //     "images": [
  //       "https://source.unsplash.com/random/?animals",
  //       "https://source.unsplash.com/random/?wildlife",
  //       "https://source.unsplash.com/random/?jungle"
  //     ],
  //     "description": "Wildlife in their natural habitat.",
  //     "tags": "#wildlife #nature #animals #family"
  //   },
  //   {
  //     "images": [
  //       "https://source.unsplash.com/random/?portrait",
  //       "https://source.unsplash.com/random/?people",
  //       "https://source.unsplash.com/random/?face"
  //     ],
  //     "description": "Beautiful portraits of people.",
  //     "tags": "#portret #portrait #lovestory"
  //   },
  //   {
  //     "images": [
  //       "https://source.unsplash.com/random/?cake,birthday",
  //       "https://source.unsplash.com/random/?party,balloons",
  //       "https://source.unsplash.com/random/?candles,birthday"
  //     ],
  //     "description": "Birthday celebration with a delicious cake.",
  //     "tags": "#birthday #celebration #family"
  //   },
  //   {
  //     "images": [
  //       "https://source.unsplash.com/random/?water,beach",
  //       "https://source.unsplash.com/random/?forest",
  //       "https://source.unsplash.com/random/?mountain,sunset"
  //     ],
  //     "description": "A beautiful beach with clear blue water.",
  //     "tags": "#beach #water #vacation #wedding"
  //   },
  //   {
  //     "images": [
  //       "https://source.unsplash.com/random/?city",
  //       "https://source.unsplash.com/random/?architecture",
  //       "https://source.unsplash.com/random/?street,lights"
  //     ],
  //     "description": "A vibrant cityscape with modern architecture.",
  //     "tags": "#city #architecture #urban #lovestory"
  //   },
  //   {
  //     "images": [
  //       "https://source.unsplash.com/random/?animals",
  //       "https://source.unsplash.com/random/?wildlife",
  //       "https://source.unsplash.com/random/?jungle"
  //     ],
  //     "description": "Wildlife in their natural habitat.",
  //     "tags": "#wildlife #nature #animals #family"
  //   },
  //   {
  //     "images": [
  //       "https://source.unsplash.com/random/?portrait",
  //       "https://source.unsplash.com/random/?people",
  //       "https://source.unsplash.com/random/?face"
  //     ],
  //     "description": "Beautiful portraits of people.",
  //     "tags": "#portret #portrait #lovestory"
  //   },
  //   {
  //     "images": [
  //       "https://source.unsplash.com/random/?cake,birthday",
  //       "https://source.unsplash.com/random/?party,balloons",
  //       "https://source.unsplash.com/random/?candles,birthday"
  //     ],
  //     "description": "Birthday celebration with a delicious cake.",
  //     "tags": "#birthday #celebration #family"
  //   }
  // ]


  // localStorage.setItem('cards',JSON.stringify(carddata))
  // setCards(JSON.parse(localStorage.getItem('cards')));

  useEffect(() => {

    const fetchCards = async () => {
      const res = await fetch('/cards.json');
      const data = await res.json()
      if (data) {
        setCards(data);
        setFilteredCards(data);
      }
     
    }

    fetchCards()
  }, []);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredCards(cards);
    }
    else {
      const filteredArr = cards.filter((el) => {
        return el.tags.includes(filter)
      })
      setFilteredCards(filteredArr)
    }
  }, [filter])

  return (
    <div className="home_page">
      <div className="home_container">
        <h2 className="homepage_heading">Ən çox baxılan şəkillər</h2>

        <div className="filter_options">
          <div className="option" style={filter === 'all' ? { backgroundColor: '#222222', color: '#f5f5f5' } : {}} onClick={() => setFilter('all')}>Hamısı</div>
          <div className="option" style={filter === '#wedding' ? { backgroundColor: '#222222', color: '#f5f5f5' } : {}} onClick={() => setFilter('#wedding')}>Toy çəkilişləri</div>
          <div className="option" style={filter === '#lovestory' ? { backgroundColor: '#222222', color: '#f5f5f5' } : {}} onClick={() => setFilter('#lovestory')}>Love story</div>
          <div className="option" style={filter === '#family' ? { backgroundColor: '#222222', color: '#f5f5f5' } : {}} onClick={() => setFilter('#family')}>Ailəvi çəkilişlər</div>
          <div className="option" style={filter === '#portre' ? { backgroundColor: '#222222', color: '#f5f5f5' } : {}} onClick={() => setFilter('#portre')}>Portret</div>
          <div className="option" style={filter === '#birthday' ? { backgroundColor: '#222222', color: '#f5f5f5' } : {}} onClick={() => setFilter('#birthday')}>Ad günü</div>
        </div>

        <div className="mobile_filter">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="23" viewBox="0 0 32 23" fill="none" onClick={() => setToggleFilterMenu(true)}>
            <path d="M2.28577 2.28564H29.7143M2.28577 11.4285H29.7143M2.28577 20.5714H29.7143" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <div className="filter_menu_container" style={toggleFilterMenu ? openedMenu : closedMenu}>
            <div className="filter_menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" onClick={() => setToggleFilterMenu(false)}>
                <path d="M1 16C1 19.2712 1.17658 21.8316 1.62331 23.8417C2.06751 25.8404 2.7654 27.2332 3.76611 28.2339C4.76681 29.2346 6.15959 29.9325 8.15832 30.3767C10.1684 30.8234 12.7288 31 16 31C19.2712 31 21.8316 30.8234 23.8417 30.3767C25.8404 29.9325 27.2332 29.2346 28.2339 28.2339C29.2346 27.2332 29.9325 25.8404 30.3767 23.8417C30.8234 21.8316 31 19.2712 31 16C31 12.7288 30.8234 10.1684 30.3767 8.15832C29.9325 6.15959 29.2346 4.76681 28.2339 3.76611C27.2332 2.7654 25.8404 2.06751 23.8417 1.62331C21.8316 1.17658 19.2712 1 16 1C12.7288 1 10.1684 1.17658 8.15832 1.62331C6.15959 2.06751 4.76681 2.7654 3.76611 3.76611C2.7654 4.76681 2.06751 6.15959 1.62331 8.15832C1.17658 10.1684 1 12.7288 1 16Z" stroke="#212135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 12L16 16M16 16L12 20M16 16L20 20M16 16L12 12" stroke="#212135" strokeWidth="2" strokewinecap="round" strokeLinejoin="round" />
              </svg>

              <h5 style={filter === 'all' ? { backgroundColor: '#222222', color: '#ffffff' } : {}} onClick={() => handleFilter('all')}>Hamısı</h5>
              <h5 style={filter === '#wedding' ? { backgroundColor: '#222222', color: '#ffffff' } : {}} onClick={() => handleFilter('#wedding')}>Toy çəkilişləri</h5>
              <h5 style={filter === '#lovestory' ? { backgroundColor: '#222222', color: '#ffffff' } : {}} onClick={() => handleFilter('#lovestory')}>Love story</h5>
              <h5 style={filter === '#family' ? { backgroundColor: '#222222', color: '#ffffff' } : {}} onClick={() => handleFilter('#family')}>Ailəvi çəkilişlər</h5>
              <h5 style={filter === '#portre' ? { backgroundColor: '#222222', color: '#ffffff' } : {}} onClick={() => handleFilter('#portre')}>Portret</h5>
              <h5 style={filter === '#birthday' ? { backgroundColor: '#222222', color: '#ffffff' } : {}} onClick={() => handleFilter('#birthday')}>Ad günü</h5>
            </div>
          </div>
        </div>

        <div className="big_line"></div>
        <div className="card_wrapper">
          <div className="column_1">
            {
              filteredCards.map((card, index) => {
                if ((index + 3) % 3 == 0) return (<div key={index} className="card_container">
                  <CardComponent imgpath={card.images[0]} description={card.description} tags={card.tags} />
                </div>)
              })
            }
          </div>
          <div className="column_2">

            {
              filteredCards.map((card, index) => {
                if ((index + 2) % 3 == 0) return (<div key={index} className="card_container">
                  <CardComponent imgpath={card.images[0]} description={card.description} tags={card.tags} />
                </div>)
              })
            }
          </div>
          <div className="column_3">
            {
              filteredCards.map((card, index) => {
                if ((index + 1) % 3 == 0) return (<div key={index} className="card_container">
                  <CardComponent imgpath={card.images[0]} description={card.description} tags={card.tags} />
                </div>)
              })
            }
          </div>
        </div>

        <div className="tablet_card_wrapper">
          <div className="column_1">
            {
              filteredCards.map((card, index) => {
                if ((index + 2) % 2 == 0) return (<div key={index} className="card_container">
                  <CardComponent imgpath={card.images[0]} description={card.description} tags={card.tags} />
                </div>)
              })
            }
          </div>
          <div className="column_2">
            {
              filteredCards.map((card, index) => {
                if ((index + 1) % 2 == 0) return (<div key={index} className="card_container">
                  <CardComponent imgpath={card.images[0]} description={card.description} tags={card.tags} />
                </div>)
              })
            }
          </div>
        </div>

        <div className="mobile_card_wrapper">
          {
            filteredCards.map((card, index) => {
              return (<div key={index} className="card_container">
                <CardComponent imgpath={card.images[0]} description={card.description} tags={card.tags} />
              </div>)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home