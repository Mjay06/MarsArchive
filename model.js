export const model = {
  todaysdata: {},
  searchdata:{},
  incasedata: {}
};
function getPreviousDayDate(dayspassed) {
  // Get the current date
  let currentDate = new Date();

  // Subtract 3 day from the current date
  currentDate.setDate(currentDate.getDate() - +dayspassed);

  // Format the previous day's date in "yyyy-mm-dd" format
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
const earth_date = `${getPreviousDayDate(2)}`
const incase = `${getPreviousDayDate(4)}`

const apiUrl =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";
const apiKey = "cvBysfxUYzAxOLd7tCbyU3iAcDfcNoZ3ydxzqejj";
const earthDate = earth_date;

// Function to fetch the data from the API
export async function fetchdata() {
  try{
    const fetchpro = await fetch(`${apiUrl}?earth_date=${earthDate}&api_key=${apiKey}`)
    const res = await fetchpro
    const data = await res.json()

    const fetchincase = await fetch(`${apiUrl}?earth_date=${incase}&api_key=${apiKey}`)
    const resinc = await fetchincase
    const datainc = await resinc.json()
  

    model.incasedata = datainc
    model.todaysdata = data


  }
  catch (err){
    console.log(err)
  }
}
fetchdata();



export async function fetchsearch(date, camera){
  try{
    const fetchpro = await fetch(`${apiUrl}?earth_date=${date}&camera=${camera}&api_key=${apiKey}`)
    const res = await fetchpro
    const data = await res.json()
    model.searchdata = data
  }
  catch(err){
    console.log(err)
  }
}