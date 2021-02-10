console.log(axios);

async function displayData() {
    const response = await axios.get("https://api.spacexdata.com/v4/launches");
   console.log("response: ", response.data);
   const dataList = document.getElementById("data-list");
   console.log(dataList);
}

displayData();