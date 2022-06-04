const loadBuddies = () => {
    fetch("https://randomuser.me/api/?results=50")
        .then(res => res.json())
        .then(data => displayBuddies(data))
}

const displayBuddies = (buddies) => {
    document.getElementById("buddies").innerHTML = ""
    buddies.results.forEach(element => {
        /* console.log(element.name.first)
         var buddyImage = document.createElement("img");
         var src = document.createAttribute("src");
         src.value = element.picture.large;
         buddyImage.setAttributeNode(src);
         buddyImage.setAttribute("width", "300px");
 
 
         var buddy = document.createElement('p');
         buddy.innerText = `Name:- ${element.name.title}  ${element.name.first} ${element.name.last}(${element.gender})   Email:- ${element.email}
             Call ${element.phone} this number `;
         document.getElementById("buddies").appendChild(buddyImage);
         document.getElementById("buddies").appendChild(buddy)*/
        const div = document.createElement("div");
        var content = `
            <img onclick="alert(this.name)"  width="300px" src="${element.picture.large}" alt="">
            <p>${element.name.title}  ${element.name.first} ${element.name.last}(${element.gender})</p>
            <p>Email:- ${element.email} <span style="margin-left:50px;"> ${element.phone}</p>
        `
        div.innerHTML = content;
        // div.setAttribute("onclick", `showDetails(${buddies})`)
        document.getElementById("buddies").appendChild(div)


    });
}
