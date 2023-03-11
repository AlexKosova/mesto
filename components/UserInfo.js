export default class UserInfo {
  constructor ({name, info}) {
    this._name = name;
    this._info = info;
    this._userJob = document.querySelector(".profile__description")
    this._userName = document.querySelector(".profile__name")
  }

  getUserInfo () {
    const userInfoObj = {
      name: this._name,
      info: this._info
    }
    return userInfoObj;
  }

  setUserInfo () {
    this._userName.textContent = this._name;
    this._userJob.textContent = this._info;
  }
}