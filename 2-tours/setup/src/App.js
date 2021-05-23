import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
const url = 'https://course-api.netlify.app/api/react-tours-project';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false)

  const deleteTour = (id) => {
    const newTour = tours.filter(tour => tour.id !== id)
    setTours(newTour)
  }
  const fetchTours = async () => {
    try {
      setLoading(true)
      const response = await fetch(url);
      const getTours = await response.json();
      setTours(getTours)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
   
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
     </main>
   )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours</h2>
          <button className="btn" onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>

      <Tours tours={tours} removeTour={deleteTour} />
    </main>
  )
}

export default App;
