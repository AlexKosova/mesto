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
    this._userPhoto.src = data;
  }

  setUserInfo ({ name, about, avatar}) {
    this._userName.textContent = name;
    this._userJob.textContent = about;
    this.setUserAvatar(avatar);
  }
}