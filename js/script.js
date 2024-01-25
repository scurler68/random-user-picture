const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector(".num-users"); //drop down menu

//create API connection
const getData = async function(numUsers) {
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();
//    console.log(data);

    const userResults = data.results; //array of data
   console.log(userResults);
   displayUsers(userResults);

};

getData(1);


const displayUsers = function(userResults) {
    randomFolks.innerHTML = ""; //empty randomFolks contents to prevent duplication
    //loop over userResults to save values of some properties

    for (const user of userResults) {
    const country = user.location.country;
    const name = user.name.first;
    const imageUrl = user.picture.medium;
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
    <h3>${name}</h3>
    <p>${country}</p>
    <img src=${imageUrl} alt="User avatar" />
    `;
    randomFolks.append(userDiv);

    }
};

//add a change event to change number of pictures shown when drop down selection changes
selectUserNumber.addEventListener("change", function(e) {
    const numUsers = e.target.value;
    getData(numUsers);
});




