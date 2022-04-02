
export async function getServerSideProps(context){
    const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=21.116671&lon=105.883331&exclude=&appid=${process.env.API_KEY}&exclude=minutely&units=metric`);
    const data = await res.json()
    if(!data){
      return{
        notFound: true,
      }
    }
    return {
      props:{data}
    }
}

export default function Wheather({data}){
  console.log(data)
  return(
    <div>
      kasd

    </div>
  )
}