import Head from 'next/head'
import Image from 'next/image'

import SearchBox from '../components/SearchBox/SearchBox'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather App - Next</title>
      </Head>

      <div className="home">
        
        <SearchBox placeholder="Search for a city..." />
      </div>
    </div>
  )
}

