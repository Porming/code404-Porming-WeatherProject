import './App.css'
import few_cloud from './images/few_cloud.svg';
import search from './images/search.svg'

function App() {

  return (
    <>
      <div className='layout'>
        <header>
          <h1>WEATHER</h1>
        </header>
        <div className="inputbox">
              <input type="text" className='input' placeholder='Search' />
              <div className='search-icon'>
                  <img src={search} alt="" />
              </div>
          </div>
        <section className='container'>
          <div className='content'>
            <section className='temp-detail'>
              <div className='show-day'>
                <p className='day'>Sunday</p>
                <p className='location'>Today in <span className='city'>Phnom Penh </span></p>
              </div>

              <div className='weather-icon-large'>
                <img className='icon-large' src={few_cloud} alt="" />
                <p>Few Cloud</p>
              </div>

              <div className='show-temp-detail'>
                <div className='show-temp'>
                  <p className='tempareture'>33°</p>
                </div>
                <div className='data-temp'>
                  <div className='side-data-temp'>
                    <p>Humidity <span className='humidity'>90%</span></p>
                    <p>wind <span className='wind'> 10km/h</span></p>
                  </div>
                  <div className='side-data-temp'>
                    <p>Min temp <span className='min-temp'>33°</span></p>
                    <p>Max temp <span className='max-temp'>33°</span></p>
                  </div>
                </div>
              </div>
            </section>
            <p className='week-text'>Next 6 Days</p>
            <section className='week-temp'>
              <div className='show-week-temp'>

                <div className='card-temp'>
                  <div className='card-title'>
                    <p>Monday</p>
                  </div>
                  <div className='icon-small'>
                    <img  src={few_cloud} alt="" />
                    <p>Few cloud</p>
                  </div>
                  <div className='temp'>
                    <p>33°</p>
                  </div>
                </div>
                <div className='card-temp'>
                  <div className='card-title'>
                    <p>Tuesday</p>
                  </div>
                  <div className='icon-small'>
                    <img  src={few_cloud} alt="" />
                    <p>Few cloud</p>
                  </div>
                  <div className='temp'>
                    <p>33°</p>
                  </div>
                </div>
                <div className='card-temp'>
                  <div className='card-title'>
                    <p>Wednesday</p>
                  </div>
                  <div className='icon-small'>
                    <img  src={few_cloud} alt="" />
                    <p>Few cloud</p>
                  </div>
                  <div className='temp'>
                    <p>33°</p>
                  </div>
                </div>
                <div className='card-temp'>
                  <div className='card-title'>
                    <p>Thursday</p>
                  </div>
                  <div className='icon-small'>
                    <img  src={few_cloud} alt="" />
                    <p>Few cloud</p>
                  </div>
                  <div className='temp'>
                    <p>33°</p>
                  </div>
                </div>
                <div className='card-temp'>
                  <div className='card-title'>
                    <p>Friday</p>
                  </div>
                  <div className='icon-small'>
                    <img  src={few_cloud} alt="" />
                    <p>Few cloud</p>
                  </div>
                  <div className='temp'>
                    <p>33°</p>
                  </div>
                </div>
                <div className='card-temp'>
                  <div className='card-title'>
                    <p>Satursday</p>
                  </div>
                  <div className='icon-small'>
                    <img  src={few_cloud} alt="" />
                    <p>Few cloud</p>
                  </div>
                  <div className='temp'>
                    <p>33°</p>
                  </div>
                </div>
                

              </div>
            </section>
          </div>

        </section>
      </div>
    </>
  )
}

export default App
