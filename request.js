requestToServer();
function requestToServer() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", 'https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture', true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (this.readyState !== 4) return;
    if (this.status === 200) {
      callback();
    }else{
      console.log(xhr.status + ': ' + xhr.statusText);//проверка ошибки
    }
  }

  function callback(){    
    var responseToServer = JSON.parse(xhr.response).results;
    let firstKey;
    for (firstKey in responseToServer){
      let oneUser = responseToServer[firstKey];
      let newDiv = document.createElement('div');
        newDiv.className = 'dataNameUser';
        newDiv.innerHTML = `<a class='link' href='#user${oneUser.name.first}' onclick='fon.style.display="block"'><table><tr><td class="firstColl"><img class='avatarUserSmall' src="${oneUser.picture.thumbnail}" alt="smallAvatar" /></td><td class="tooColl"><span class='nameUser'><span>${oneUser.name.title}</span><span class='nameUserFirst'>${oneUser.name.first}</span><span class='nameUserUpper'>${oneUser.name.last}</span></span></td></tr></table></a>
      demo.appendChild(newDiv);
    }
  }
}