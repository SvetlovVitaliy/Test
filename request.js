requestToServer();
function requestToServer() {
  var responseToServer;
  var sortResponseToServer;
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
    if (sortResponseToServer===undefined) {
      responseToServer = JSON.parse(xhr.response).results;
      let newDiv = document.createElement('div');
        newDiv.id = 'dataUserList';
      demo.appendChild(newDiv);
    }else{
      responseToServer = sortResponseToServer;
      let deletDataUserList = document.getElementById('dataUserList');
      deletDataUserList.parentNode.removeChild(deletDataUserList);
      let newDiv = document.createElement('div');
        newDiv.id = 'dataUserList';
      demo.appendChild(newDiv);
    }
    let firstKey;
    for (firstKey in responseToServer){
      let oneUser = responseToServer[firstKey];

      let oneUserFirstUp = responseToServer[firstKey].name.first[0].toUpperCase()+responseToServer[firstKey].name.first.slice(1);
      let oneUserLastUp = responseToServer[firstKey].name.last[0].toUpperCase()+responseToServer[firstKey].name.last.slice(1);
      let oneUserCityUp = responseToServer[firstKey].location.city[0].toUpperCase()+responseToServer[firstKey].location.city.slice(1);
      
      let newDiv = document.createElement('div');
        newDiv.className = 'dataNameUser';
        newDiv.innerHTML =  `<img class='avatarUserSmall' src="${oneUser.picture.medium}" alt="smallAvatar" /><div>${oneUser.name.title}.</div><div class='nameUserFirst'>${oneUserFirstUp}</div><div class='nameUserUpper'>${oneUserLastUp}</div>
                            <div class='fullDataNameUser'>
                              <img class='avatarUserBig' src="${oneUser.picture.large}" alt="bigAvatar" />
                              <span class='nameUser'>
                                <span><p>Имя:<br>Фамилия:<br>Улица:<br>Город:<br>Штат:<br>Телефон:</p></span>
                                <span><p>${oneUserFirstUp}<br>${oneUserLastUp}<br>${oneUser.location.street}<br>${oneUserCityUp}<br>${oneUser.location.state}<br>${oneUser.phone}</p></span>
                              </span>
                              <span class="close">&times</span>
                            </div>`;
      dataUserList.appendChild(newDiv);
    }

    var diveEventAssignment = document.getElementsByClassName('dataNameUser');
    for (let i = 0; i < diveEventAssignment.length; i++) {
      diveEventAssignment[i].addEventListener("click", function(){
        let currentUser = this.getElementsByClassName('fullDataNameUser')[0];
        fon.style.display = "block";
        currentUser.style.display = "flex";
      }, true);
    }

    var fullUser = document.getElementsByClassName('fullDataNameUser');
    var close = document.getElementsByClassName('close');
    for (let i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function(){
        for (let i = 0; i < fullUser.length; i++) {
          fullUser[i].style.display = "none";
          fon.style.display = "none";
        }
      }, false);
    }

  }

  let sortByNameAscendingBtn = document.getElementById('sortByNameAscending');
  sortByNameAscendingBtn.addEventListener('click', sortingByNameAscending);
  function sortingByNameAscending() {
    sortResponseToServer = JSON.parse(xhr.response).results.slice(0);
      sortResponseToServer.sort(function(a,b) {
        let x = a.name.first.toLowerCase();
        let y = b.name.first.toLowerCase();
        let z = a.name.last.toLowerCase();
        let g = b.name.last.toLowerCase();
        return x < y ? -1 : x > y ? 1 : x === y ? z < g ? -1 : 0 : 0;
      });
    callback();
  }

  let sortByNameDescendingBtn = document.getElementById('sortByNameDescending');
  sortByNameDescendingBtn.addEventListener('click', sortingByNameDescending);
  function sortingByNameDescending() {
    sortResponseToServer = JSON.parse(xhr.response).results.slice(0);
      sortResponseToServer.sort(function(a,b) {
        let x = a.name.first.toLowerCase();
        let y = b.name.first.toLowerCase();
        let z = a.name.last.toLowerCase();
        let g = b.name.last.toLowerCase();
        return x > y ? -1 : x < y ? 1 : x === y ? z > g ? -1 : 0 : 0;
      });
    callback();
  }

}