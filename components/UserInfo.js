export default class UserInfo {
  constructor ({profileName, userJob}) {
    this._userJob = document.querySelector(userJob)
    this._userName = document.querySelector(profileName)
  }

  getUserInfo () {
    const userInfo = {
      name: this._name,
      info: this._info
    }
    return userInfo;
  }

  setUserInfo (name, info) {
    this._userName.textContent = name;
    this._userJob.textContent = info;
  }
}