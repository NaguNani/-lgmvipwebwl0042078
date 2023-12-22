const registrationForm = document.getElementById("student-list");
const userDetailsTable = document.getElementById("user-details");
registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const website=document.getElementById("website").value;
    const image=document.getElementById("image").value;
    const gender=document.getElementById("gender").value;
    const skills=document.getElementById("skills").value;
    const newRow = userDetailsTable.insertRow();
    const cell1=newRow.insertCell(0);
    const cell2=newRow.insertCell(1);
    const cell3=newRow.insertCell(2);
    const cell4=newRow.insertCell(3);
    const cell5=newRow.insertCell(4);
    const cell6=newRow.insertCell(5);
    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = document.getElementById("website").value;
    cell4.innerHTML = gender;
    cell5.innerHTML = skills;
    const img=document.createElement("img");
    img.src=image;
    cell6.appendChild(img);

    const user={
        name: name,
        email: email,
        website:document.getElementById("website").value,
        image:image,
        gender:gender,
        skills:skills,
    };
    const users=JSON.parse(localstorage.getItem("users")) || []; 
    users.push(user); 
    localstorage.setItem("users", JSON.stringify(users));
    registrationForm.reset();
    location.reload();
});
    const storehouses=JS0N.parse(localstorage.getItem("users")) || [];
    for (const user of storedUsers) {
        const newRow= userDetailsTable.insertRow();
        const cell1 =newRow.insertCell(0);
        const cell2 =newRow.insertCell(1);
        const cell3= newRow.insertCell(2);
        const cell4= newRow.insertCell(3);
        const cell5=newRow.insertCell(4);
        const cell6=newRow.insertCell(5);
        cell1.innerHTML= user.name;
        cell2.innerHTML= user.email;
        cell3.innerHTML= user.website;
        cell4.innerHTML= user.gender;
        cell5.innerHTML= user.skills;
    const img =document.createElement("img");
    img.src=user.image;     img.className ="user-image";
    cell6.appendChild(img);
}