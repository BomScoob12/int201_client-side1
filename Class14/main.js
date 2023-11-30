import { CookieUtil } from "./lib/cookieUtil.js"
document.cookie = "username=Sarawit"
document.cookie = "course=int201"
document.cookie = "credit=3"

const currentCookie = document.cookie
console.log(currentCookie)
console.log(CookieUtil.get('course'))
