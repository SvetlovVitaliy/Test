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
                            <div class='fullDataNameUser' id='user${oneUser.name.first}'>
                              <table>
                                <tr><td class='firstCollFullData' rowspan="6"><img class='avatarUserBig' src="${oneUser.picture.large}" alt="bigAvatar" /></td><td><div>Имя</div></td><td><div class='nameUserUpper'>${oneUser.name.first}</div></td></tr>
                                <tr><td><div>Фамилия</div></td><td><div class='nameUserUpper'>${oneUser.name.last}</div></td></tr>
                                <tr><td><div>Улица</div></td><td><div class='nameUpper'>${oneUser.location.street}</div></td></tr>
                                <tr><td><div>Город</div></td><td><div class='nameUpper'>${oneUser.location.city}</div></td></tr>
                                <tr><td><div>Штат</div></td><td><div class='nameUpper'>${oneUser.location.state}</div></td></tr>
                                <tr><td><div>Телефон</div></td><td><div>${oneUser.phone}</div></td></tr>
                              </table>
                              <a href='#close' class="close" title='Закрыть' onclick='fon.style.display="none"'>&times</span>
                              </div>`;
      demo.appendChild(newDiv);
    }
  }
}