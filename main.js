console.log(axios);

async function displayData() {
    const response = await axios.get("https://api.spacexdata.com/v4/launches");
   console.log("response: ", response.data);
   const dataList = document.getElementById("data-list");
   console.log(dataList);

   for (const data of response.data) {
       console.log("data: ", data);
       const listItem = document.createElement('li');

       listItem.textContent = `${data.name} - ${data.details}`;
       console.log(listItem);

       dataList.appendChild(listItem);
   }
}
displayData();