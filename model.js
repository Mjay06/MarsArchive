export const model = {
  todaysdata: {},
  searchdata:{}
};
function getPreviousDayDate() {
  // Get the current date
  let currentDate = new Date();

  // Subtract one day from the current date
  currentDate.setDate(currentDate.getDate() - 2);

  // Format the previous day's date in "yyyy-mm-dd" format
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
const earth_date = `${getPreviousDayDate()}`
console.log(earth_date)

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
    console.log(model.searchdata)

  }
  catch(err){
    console.log(err)
  }
}