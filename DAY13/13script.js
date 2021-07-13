var button =documant.querySelector('.btn');
var inputVal =document.querySelector('.input');
button.addEventListener("click",( )=>{
url = 'http://api.github.com/user/${inputVal.value}`;
fetch(url.).then((responsae) => {
return responsae.json( );
}).then((data) =>{
console.log(data);
str="";
str += `<li>Name: ${data.name}</li>`
str += `<li>login: ${data.login}</li>`
str += `<li>id: ${data.id}</li>`
str += `<li>Node_id: ${data.Node_id}</li>`
str += `<li>Img Url: ${data.avatar_url}</li>`
str += `<li>Company: ${data.company}</li>`
str += `<li>Location: ${data.location}</li>`
str += `<li>Email: ${data.email}</li>`
str += `<li>Followers: ${data.followers}</li>`
documant.querySelector('.content').innerHTML = str;
})
});

