

// Fetching data
async function dataimport(data){
   const fetchdata =  await fetch(data)
   if(!fetchdata.ok){
    console.error('Fetch is not returning data')
   }

   const tours = await fetchdata.json();
   return(tours)

}

export default dataimport;