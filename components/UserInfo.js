export default class UserInfo {
  constructor ({profileName, userJob, userPhoto}) {
    this._userJob = document.querySelector(userJob)
    this._userName = document.querySelector(profileName)
    this._userPhoto = document.querySelector(userPhoto)
  }

  getUserInfo () {
    const userInfo = {
      name: this._userName.textContent,
      info: this._userJob.textContent,
    }
    return userInfo;
  }

  setUserAvatar (data) {
    this._userPhoto.src = data.avatar;
  }

  setUserInfo (data) {
    this._userName.textContent = data.name;
    this._userJob.textContent = data.about;
    this.setUserAvatar(data);
    
  }
}