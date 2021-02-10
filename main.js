console.log(axios);

async function displayData() {
    const response = await axios.get("https://api.spacexdata.com/v4/launches");
   console.log(response);
}

displayData();