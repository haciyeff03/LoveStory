import { useState } from "react"
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

  const handleFilter = () => {
    setToggleFilterMenu(false)
  }

  return (
    <div className="home_page">
      <div className="home_container">
        <h2 className="homepage_heading">Ən çox baxılan şəkillər</h2>

        <div className="filter_options">
          <div className="option">Toy çəkilişləri</div>
          <div className="option">Love story</div>
          <div className="option">Ailəvi çəkilişlər</div>
          <div className="option">Portret</div>
          <div className="option">Ad günü</div>
        </div>

        <div className="mobile_filter">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="23" viewBox="0 0 32 23" fill="none" onClick={() => setToggleFilterMenu(true)}>
            <path d="M2.28577 2.28564H29.7143M2.28577 11.4285H29.7143M2.28577 20.5714H29.7143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <div className="filter_menu_container" style={toggleFilterMenu ? openedMenu : closedMenu}>
            <div className="filter_menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" onClick={() => setToggleFilterMenu(false)}>
                <path d="M1 16C1 19.2712 1.17658 21.8316 1.62331 23.8417C2.06751 25.8404 2.7654 27.2332 3.76611 28.2339C4.76681 29.2346 6.15959 29.9325 8.15832 30.3767C10.1684 30.8234 12.7288 31 16 31C19.2712 31 21.8316 30.8234 23.8417 30.3767C25.8404 29.9325 27.2332 29.2346 28.2339 28.2339C29.2346 27.2332 29.9325 25.8404 30.3767 23.8417C30.8234 21.8316 31 19.2712 31 16C31 12.7288 30.8234 10.1684 30.3767 8.15832C29.9325 6.15959 29.2346 4.76681 28.2339 3.76611C27.2332 2.7654 25.8404 2.06751 23.8417 1.62331C21.8316 1.17658 19.2712 1 16 1C12.7288 1 10.1684 1.17658 8.15832 1.62331C6.15959 2.06751 4.76681 2.7654 3.76611 3.76611C2.7654 4.76681 2.06751 6.15959 1.62331 8.15832C1.17658 10.1684 1 12.7288 1 16Z" stroke="#212135" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20 12L16 16M16 16L12 20M16 16L20 20M16 16L12 12" stroke="#212135" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <h5 onClick={handleFilter}>Toy çəkilişləri</h5>
              <h5 onClick={handleFilter}>Love story</h5>
              <h5 onClick={handleFilter}>Ailəvi çəkilişlər</h5>
              <h5 onClick={handleFilter}>Portret</h5>
              <h5 onClick={handleFilter}>Ad günü</h5>
            </div>
          </div>
        </div>

        <div className="big_line"></div>
        <div className="card_wrapper">
          <div className="column_1">
            <div className="card_container">
              <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/3dd6/8b18/18938ba8323b12fe2d31341b45c5dd67?Expires=1691971200&Signature=AtblIkHdy9oMfYqWOBXppA87wWk2pFY3VpIjy6t6ogLkh3LRzkOwrcN4g91SKcRGiksxtxXMxU06EcQP8zDzFqqc8X1vzcNQRS4HmP3c6DU7Bun2qphE9B9H5QCUvyGId4wDKYctPL~QooOhwq3vTkF8NSOT65BLCV62MGuZ1vz207laZq7jWA8npacFOavQFmrj3zogoxIXarMsz0FHa1Rz9qmIaJcEAXFoV2Lqdj9DTolkI-7yErrpWhNzxgJSY2L2H5v2RBCsaMvQaZdVvvxK4jJTM8EILHO6tSwV29LiWWWpdlFtlr7eg1wTnlcvYb2TqA2ufNLZbCZEjpOQGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
            </div>
            <div className="card_container">
              <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/31bf/4373/ca6bb2e4595a8c302786c7c014512147?Expires=1691971200&Signature=Fonqgf16fTN2667cFB53~dhdrOUFSxm8T6288vEoyBOFOWg5hABBvwVVBCtqygI~-gR8Tvtt2NWhQhG17DRRLHDWHLVisQu6xHPPHyBnEQb6A6xsV~Z~QWspl1RoNOG4zNSFxDTi~vo5UUfSlBIqDIYEqW1WmY5lZdjjy0zVQpVvT-9T0DJkmbIPgEf~FV~XLQVQCTqQmIZyOMHN5eE~FDJNU7KzDk8qidQGotpLjMJfOgsKWlOl3Yj7YJ96Vi4iLnxoegZH4D3kdItwwfLQzYmUvPNDIUqLGdmTg3Jb0fVRqqtGf-aafHx0WmGdpReQd8fo7uURlTDLQWorrwINZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
            </div>
            <div className="card_container">
              <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/bd82/ce5c/1bb8c58daa9e758af3158d6f3478c1e4?Expires=1691971200&Signature=T8pdskZdJp7mte1jd9Wv6KglZNz-RcISxHH879sbAAU0abEIvfx8KTasbmbJrdqWMH8DkVbLxMxHHD1Th78Nlv1ptGjfy2sT0033f98bWtXhW2ivddMHw7oDrcJen6AscOj-WDEZbUF9uAnYQtT39LNiMtFH7dZ4lZjAr8YmuLRtVDUhboxixxcc8uLd7L~9C50whzD6anngm8AcdbHPLC~TK~BHdzpTCuHM9i0zDcGU0TNyqowEn7TOs4QtJqZ8i5mVcxGWl~6cul82Wcck2W2TiU6eSb3EExyfOqb~mRYXdeJfmyGOlkWi-8Y3fPhtVyBvsMDfUOCNiq9z1uggXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
            </div>
          </div>
          <div className="column_2">
            <div className="card_container">
              <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/391d/3e49/04a2b490d39a1e703291402727a6b17f?Expires=1691971200&Signature=n2GE6264fwWcExlx4J8Jim7gfwjA9u-ecW8pB~K6ItTMqOJfdwSvfA9~n6CGyr7xvbaTBj3J696XU~TiKNyZcLlVd1ngTR6qIiVpgOE9c1zQToJyb49IlbSgqoApwwUmkGot0MPsb-fNwk9JV1PS3-oKAhQ3neS5MBmCB-Sr5gPOZlTjtIf~xuXyheSCSMudGTC~ZgNFkAenaukSNX2fFlJZp54TOSfz-EoC3b74jK4QKnWMqGHCZ4IM2D-Wpi~JzXMJ2SVr3S6wEyB9kZ-WfovYW91Gyy8aF4ILvuEEGwZFCqG2F-XogcjNCUQayt-eMUpx-vYB1-TURoId4ROWrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
            </div>
            <div className="card_container">
              <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/e5f1/1ef7/8b763bfacc89e1c7a4bcfddfdce4518e?Expires=1691971200&Signature=pFaGeJ6wm8f7hVLVb7O4WUm7UCVma920ruAdHQkUKOGyOdVNcJYkU15lY9IgwEaFmARxpUZH4~RY-dzxho-y2GvfLBl96Reoeg4NaVvGLody1XVhOGl9NNohHXe4oBTv8gflEQYVSrgAnmjAuLgvaYiZLWkXnYg2VXd8yZrA~Eb1lUMNr1OmLPPt~hw~WeYN11luuMqDuWmIYnXoYYM2bU-faYcnoJxwbzK9b4qCcEiBvWckbsszamCNKaOanOvrpZ8XkvYJKklVdP2igP2hPsUcWEGQSGcMwkdBJfY6aWebC9dCJt9UrY2yM96KDAeYs60KVS1qK5SkLTllstHiow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
            </div>
            <div className="card_container">
              <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/6e20/c65d/acaf617c45d6e06a2ec70929de5cd958?Expires=1691971200&Signature=j7cre~ky~OmpC9csfRBBX2aHg68jzNAufsvTfEy-M8rtoxIYtDa4g1eQXjNKwCDAOOeCUs28s1BB3oXcTyfQ1ll7RdfiFm4mrjIwzaAPrTgoumrojhl9gMiEzUmiQNbaO48psb5BQvbiv2uizQ-6IggPp-u56mNj0jd4M5wge-062zKW9DBcr5Cx0uwTEcJ-YyqF4GlAjeLWdGGe8O~QMS8RD5-5LTKObj~yvi7lBb0HvttCsPCy9pwAv6JQwHnIUbrcp-LPMn78kweWNKS1VjJkaSBA-DeRtdRGvTzKTYDRMlze0IqXwqvcKPsaGdqbefTBrUUZh81hWjH4OiZImQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
            </div>
          </div>
          <div className="column_3">
            <div className="card_container">
              <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/9bde/5ce3/78c0fad7b22be6b1763d9fd00189dac7?Expires=1691971200&Signature=SfGSCzsbyC2gZkTQHTY59Ow3aWVW0gUh0o-3jHuVdkQO1~11x8fI4MXAdiIfYOFt7ZF9tg6JAxDQMsO-wy0Mr52xC5LcNvBEweexP7-y961TOKFKZlws0EsZybTcxKzjSdDXy3y1lngstTFseulc-ww~M84vZoXIepGSlv0BMoWuCC6pFu5D0qHklx-GSIVgIKDT94X6rPaVatV5T6Tf9IVCltIhOXC~l8Q2NctuzHrlhL6olzTAwf-B9DNktX36~of~i8Hf8S-w4NCeh9ZhLNriKliX4rKFPuhn0vAJHWqNlBh6uymecMbZ9pWXH-MYIK7OK9vPTlIUKnUPe1yXkQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
            </div>
            <div className="card_container">
              <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/64fc/7616/ddb6541246d068399e40daa1528cca06?Expires=1691971200&Signature=KTOIn~L20mWPPg9oPwVYWt4svr3GqUrg3OXY8Y1QP4o9dlKs9EG5YBGuDzjBv411dmjujT8brP4P4PJr6XtBvg-0z2uxw3SDru5udUd7~Va6sFCj9uaoF3-FoOIsr8WjQVq4nyB-dPLRK-9YFjG~xd47k1a3GkEnnsGQk40NGinYxVhYVpoqCb72iV862zIz8qlIl9wjnheN1XefsO7aYteIxu9jfwoTFzjcHi6g59NJvU9cqRq1EUtkfutTcxKWNktk4cQ7VAjWTm-VPmQQQ1UbVhS1C~PcdFCIB7jOX9rJCfvTpaUbeINCyt6Pp~AoMdTJvVHWII4KdzvioXiJzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
            </div>
            <div className="card_container">
              <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/9cd8/1ef3/feb0ac2be6a22bf5081506f12289d54b?Expires=1691971200&Signature=bS~lK-4yx5iO2EILW8EXW~ja2-xpBatWNINcCu2jp84vOVz6AnVZ9JyH2ewqVs0Qcc6mXgAk-t5IoOnfpGy0wCHF8xzdSsB~v4ml4HfF8E7pkGOPGbJkbG0dKXJzYS82CYABUmA6AKDgE5MqHXbX8sWXw4DbRQ5b05gQNHTL1ZZ8L8~nsLP--Wi3GnylQw8GKDdNEWXA1BD1wFtpnznVsinFaDRoxegp-AWLo3Nrgr5hM4QGjWJfhZ~xf6lYPohDVfJYUgMKNsrhbmKN8H-TaGmJsEKEcQ3jZ98fep0ZYA-HQqkxassecbpgl699kKnjYf8CR3VEfBgwoZeb~oHdkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
            </div>
          </div>
        </div>

        <div className="tablet_card_wrapper">
          <div className="column_1">
            <div className="card_container">
              <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/3dd6/8b18/18938ba8323b12fe2d31341b45c5dd67?Expires=1691971200&Signature=AtblIkHdy9oMfYqWOBXppA87wWk2pFY3VpIjy6t6ogLkh3LRzkOwrcN4g91SKcRGiksxtxXMxU06EcQP8zDzFqqc8X1vzcNQRS4HmP3c6DU7Bun2qphE9B9H5QCUvyGId4wDKYctPL~QooOhwq3vTkF8NSOT65BLCV62MGuZ1vz207laZq7jWA8npacFOavQFmrj3zogoxIXarMsz0FHa1Rz9qmIaJcEAXFoV2Lqdj9DTolkI-7yErrpWhNzxgJSY2L2H5v2RBCsaMvQaZdVvvxK4jJTM8EILHO6tSwV29LiWWWpdlFtlr7eg1wTnlcvYb2TqA2ufNLZbCZEjpOQGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
            </div>
            <div className="card_container">
              <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/31bf/4373/ca6bb2e4595a8c302786c7c014512147?Expires=1691971200&Signature=Fonqgf16fTN2667cFB53~dhdrOUFSxm8T6288vEoyBOFOWg5hABBvwVVBCtqygI~-gR8Tvtt2NWhQhG17DRRLHDWHLVisQu6xHPPHyBnEQb6A6xsV~Z~QWspl1RoNOG4zNSFxDTi~vo5UUfSlBIqDIYEqW1WmY5lZdjjy0zVQpVvT-9T0DJkmbIPgEf~FV~XLQVQCTqQmIZyOMHN5eE~FDJNU7KzDk8qidQGotpLjMJfOgsKWlOl3Yj7YJ96Vi4iLnxoegZH4D3kdItwwfLQzYmUvPNDIUqLGdmTg3Jb0fVRqqtGf-aafHx0WmGdpReQd8fo7uURlTDLQWorrwINZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
            </div>
            <div className="card_container">
              <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/bd82/ce5c/1bb8c58daa9e758af3158d6f3478c1e4?Expires=1691971200&Signature=T8pdskZdJp7mte1jd9Wv6KglZNz-RcISxHH879sbAAU0abEIvfx8KTasbmbJrdqWMH8DkVbLxMxHHD1Th78Nlv1ptGjfy2sT0033f98bWtXhW2ivddMHw7oDrcJen6AscOj-WDEZbUF9uAnYQtT39LNiMtFH7dZ4lZjAr8YmuLRtVDUhboxixxcc8uLd7L~9C50whzD6anngm8AcdbHPLC~TK~BHdzpTCuHM9i0zDcGU0TNyqowEn7TOs4QtJqZ8i5mVcxGWl~6cul82Wcck2W2TiU6eSb3EExyfOqb~mRYXdeJfmyGOlkWi-8Y3fPhtVyBvsMDfUOCNiq9z1uggXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
            </div>
          </div>
          <div className="column_2">
            <div className="card_container">
              <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/391d/3e49/04a2b490d39a1e703291402727a6b17f?Expires=1691971200&Signature=n2GE6264fwWcExlx4J8Jim7gfwjA9u-ecW8pB~K6ItTMqOJfdwSvfA9~n6CGyr7xvbaTBj3J696XU~TiKNyZcLlVd1ngTR6qIiVpgOE9c1zQToJyb49IlbSgqoApwwUmkGot0MPsb-fNwk9JV1PS3-oKAhQ3neS5MBmCB-Sr5gPOZlTjtIf~xuXyheSCSMudGTC~ZgNFkAenaukSNX2fFlJZp54TOSfz-EoC3b74jK4QKnWMqGHCZ4IM2D-Wpi~JzXMJ2SVr3S6wEyB9kZ-WfovYW91Gyy8aF4ILvuEEGwZFCqG2F-XogcjNCUQayt-eMUpx-vYB1-TURoId4ROWrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
            </div>
            <div className="card_container">
              <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/e5f1/1ef7/8b763bfacc89e1c7a4bcfddfdce4518e?Expires=1691971200&Signature=pFaGeJ6wm8f7hVLVb7O4WUm7UCVma920ruAdHQkUKOGyOdVNcJYkU15lY9IgwEaFmARxpUZH4~RY-dzxho-y2GvfLBl96Reoeg4NaVvGLody1XVhOGl9NNohHXe4oBTv8gflEQYVSrgAnmjAuLgvaYiZLWkXnYg2VXd8yZrA~Eb1lUMNr1OmLPPt~hw~WeYN11luuMqDuWmIYnXoYYM2bU-faYcnoJxwbzK9b4qCcEiBvWckbsszamCNKaOanOvrpZ8XkvYJKklVdP2igP2hPsUcWEGQSGcMwkdBJfY6aWebC9dCJt9UrY2yM96KDAeYs60KVS1qK5SkLTllstHiow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
            </div>
            <div className="card_container">
              <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/6e20/c65d/acaf617c45d6e06a2ec70929de5cd958?Expires=1691971200&Signature=j7cre~ky~OmpC9csfRBBX2aHg68jzNAufsvTfEy-M8rtoxIYtDa4g1eQXjNKwCDAOOeCUs28s1BB3oXcTyfQ1ll7RdfiFm4mrjIwzaAPrTgoumrojhl9gMiEzUmiQNbaO48psb5BQvbiv2uizQ-6IggPp-u56mNj0jd4M5wge-062zKW9DBcr5Cx0uwTEcJ-YyqF4GlAjeLWdGGe8O~QMS8RD5-5LTKObj~yvi7lBb0HvttCsPCy9pwAv6JQwHnIUbrcp-LPMn78kweWNKS1VjJkaSBA-DeRtdRGvTzKTYDRMlze0IqXwqvcKPsaGdqbefTBrUUZh81hWjH4OiZImQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
            </div>
          </div>
        </div>

        <div className="mobile_card_wrapper">

          <div className="card_container">
            <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/3dd6/8b18/18938ba8323b12fe2d31341b45c5dd67?Expires=1691971200&Signature=AtblIkHdy9oMfYqWOBXppA87wWk2pFY3VpIjy6t6ogLkh3LRzkOwrcN4g91SKcRGiksxtxXMxU06EcQP8zDzFqqc8X1vzcNQRS4HmP3c6DU7Bun2qphE9B9H5QCUvyGId4wDKYctPL~QooOhwq3vTkF8NSOT65BLCV62MGuZ1vz207laZq7jWA8npacFOavQFmrj3zogoxIXarMsz0FHa1Rz9qmIaJcEAXFoV2Lqdj9DTolkI-7yErrpWhNzxgJSY2L2H5v2RBCsaMvQaZdVvvxK4jJTM8EILHO6tSwV29LiWWWpdlFtlr7eg1wTnlcvYb2TqA2ufNLZbCZEjpOQGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
          </div>
          <div className="card_container">
            <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/31bf/4373/ca6bb2e4595a8c302786c7c014512147?Expires=1691971200&Signature=Fonqgf16fTN2667cFB53~dhdrOUFSxm8T6288vEoyBOFOWg5hABBvwVVBCtqygI~-gR8Tvtt2NWhQhG17DRRLHDWHLVisQu6xHPPHyBnEQb6A6xsV~Z~QWspl1RoNOG4zNSFxDTi~vo5UUfSlBIqDIYEqW1WmY5lZdjjy0zVQpVvT-9T0DJkmbIPgEf~FV~XLQVQCTqQmIZyOMHN5eE~FDJNU7KzDk8qidQGotpLjMJfOgsKWlOl3Yj7YJ96Vi4iLnxoegZH4D3kdItwwfLQzYmUvPNDIUqLGdmTg3Jb0fVRqqtGf-aafHx0WmGdpReQd8fo7uURlTDLQWorrwINZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
          </div>
          <div className="card_container">
            <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/bd82/ce5c/1bb8c58daa9e758af3158d6f3478c1e4?Expires=1691971200&Signature=T8pdskZdJp7mte1jd9Wv6KglZNz-RcISxHH879sbAAU0abEIvfx8KTasbmbJrdqWMH8DkVbLxMxHHD1Th78Nlv1ptGjfy2sT0033f98bWtXhW2ivddMHw7oDrcJen6AscOj-WDEZbUF9uAnYQtT39LNiMtFH7dZ4lZjAr8YmuLRtVDUhboxixxcc8uLd7L~9C50whzD6anngm8AcdbHPLC~TK~BHdzpTCuHM9i0zDcGU0TNyqowEn7TOs4QtJqZ8i5mVcxGWl~6cul82Wcck2W2TiU6eSb3EExyfOqb~mRYXdeJfmyGOlkWi-8Y3fPhtVyBvsMDfUOCNiq9z1uggXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
          </div>


          <div className="card_container">
            <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/391d/3e49/04a2b490d39a1e703291402727a6b17f?Expires=1691971200&Signature=n2GE6264fwWcExlx4J8Jim7gfwjA9u-ecW8pB~K6ItTMqOJfdwSvfA9~n6CGyr7xvbaTBj3J696XU~TiKNyZcLlVd1ngTR6qIiVpgOE9c1zQToJyb49IlbSgqoApwwUmkGot0MPsb-fNwk9JV1PS3-oKAhQ3neS5MBmCB-Sr5gPOZlTjtIf~xuXyheSCSMudGTC~ZgNFkAenaukSNX2fFlJZp54TOSfz-EoC3b74jK4QKnWMqGHCZ4IM2D-Wpi~JzXMJ2SVr3S6wEyB9kZ-WfovYW91Gyy8aF4ILvuEEGwZFCqG2F-XogcjNCUQayt-eMUpx-vYB1-TURoId4ROWrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
          </div>
          <div className="card_container">
            <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/e5f1/1ef7/8b763bfacc89e1c7a4bcfddfdce4518e?Expires=1691971200&Signature=pFaGeJ6wm8f7hVLVb7O4WUm7UCVma920ruAdHQkUKOGyOdVNcJYkU15lY9IgwEaFmARxpUZH4~RY-dzxho-y2GvfLBl96Reoeg4NaVvGLody1XVhOGl9NNohHXe4oBTv8gflEQYVSrgAnmjAuLgvaYiZLWkXnYg2VXd8yZrA~Eb1lUMNr1OmLPPt~hw~WeYN11luuMqDuWmIYnXoYYM2bU-faYcnoJxwbzK9b4qCcEiBvWckbsszamCNKaOanOvrpZ8XkvYJKklVdP2igP2hPsUcWEGQSGcMwkdBJfY6aWebC9dCJt9UrY2yM96KDAeYs60KVS1qK5SkLTllstHiow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
          </div>
          <div className="card_container">
            <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/6e20/c65d/acaf617c45d6e06a2ec70929de5cd958?Expires=1691971200&Signature=j7cre~ky~OmpC9csfRBBX2aHg68jzNAufsvTfEy-M8rtoxIYtDa4g1eQXjNKwCDAOOeCUs28s1BB3oXcTyfQ1ll7RdfiFm4mrjIwzaAPrTgoumrojhl9gMiEzUmiQNbaO48psb5BQvbiv2uizQ-6IggPp-u56mNj0jd4M5wge-062zKW9DBcr5Cx0uwTEcJ-YyqF4GlAjeLWdGGe8O~QMS8RD5-5LTKObj~yvi7lBb0HvttCsPCy9pwAv6JQwHnIUbrcp-LPMn78kweWNKS1VjJkaSBA-DeRtdRGvTzKTYDRMlze0IqXwqvcKPsaGdqbefTBrUUZh81hWjH4OiZImQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
          </div>
          <div className="card_container">
            <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/9bde/5ce3/78c0fad7b22be6b1763d9fd00189dac7?Expires=1691971200&Signature=SfGSCzsbyC2gZkTQHTY59Ow3aWVW0gUh0o-3jHuVdkQO1~11x8fI4MXAdiIfYOFt7ZF9tg6JAxDQMsO-wy0Mr52xC5LcNvBEweexP7-y961TOKFKZlws0EsZybTcxKzjSdDXy3y1lngstTFseulc-ww~M84vZoXIepGSlv0BMoWuCC6pFu5D0qHklx-GSIVgIKDT94X6rPaVatV5T6Tf9IVCltIhOXC~l8Q2NctuzHrlhL6olzTAwf-B9DNktX36~of~i8Hf8S-w4NCeh9ZhLNriKliX4rKFPuhn0vAJHWqNlBh6uymecMbZ9pWXH-MYIK7OK9vPTlIUKnUPe1yXkQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
          </div>
          <div className="card_container">
            <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/64fc/7616/ddb6541246d068399e40daa1528cca06?Expires=1691971200&Signature=KTOIn~L20mWPPg9oPwVYWt4svr3GqUrg3OXY8Y1QP4o9dlKs9EG5YBGuDzjBv411dmjujT8brP4P4PJr6XtBvg-0z2uxw3SDru5udUd7~Va6sFCj9uaoF3-FoOIsr8WjQVq4nyB-dPLRK-9YFjG~xd47k1a3GkEnnsGQk40NGinYxVhYVpoqCb72iV862zIz8qlIl9wjnheN1XefsO7aYteIxu9jfwoTFzjcHi6g59NJvU9cqRq1EUtkfutTcxKWNktk4cQ7VAjWTm-VPmQQQ1UbVhS1C~PcdFCIB7jOX9rJCfvTpaUbeINCyt6Pp~AoMdTJvVHWII4KdzvioXiJzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
          </div>
          <div className="card_container">
            <CardComponent imgpath={'https://s3-alpha-sig.figma.com/img/9cd8/1ef3/feb0ac2be6a22bf5081506f12289d54b?Expires=1691971200&Signature=bS~lK-4yx5iO2EILW8EXW~ja2-xpBatWNINcCu2jp84vOVz6AnVZ9JyH2ewqVs0Qcc6mXgAk-t5IoOnfpGy0wCHF8xzdSsB~v4ml4HfF8E7pkGOPGbJkbG0dKXJzYS82CYABUmA6AKDgE5MqHXbX8sWXw4DbRQ5b05gQNHTL1ZZ8L8~nsLP--Wi3GnylQw8GKDdNEWXA1BD1wFtpnznVsinFaDRoxegp-AWLo3Nrgr5hM4QGjWJfhZ~xf6lYPohDVfJYUgMKNsrhbmKN8H-TaGmJsEKEcQ3jZ98fep0ZYA-HQqkxassecbpgl699kKnjYf8CR3VEfBgwoZeb~oHdkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home