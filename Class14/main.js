import { CookieUtil } from './lib/cookieUtil.js'
// document.cookie = 'username=Sarawit'
// document.cookie = 'course=int201'
// document.cookie = 'credit=3'

// const currentCookie = document.cookie
// console.log(currentCookie)
// console.log(CookieUtil.get('course'))
// date (year, month, date)
CookieUtil.set('nickname', 'Bom', new Date(2023, 11, 25))
CookieUtil.set('nickname2', 'BomScope', new Date(2023, 11, 26))
CookieUtil.set('newYear', '2024', new Date(2023,11,31))
console.log(CookieUtil.get('newYear'))
console.log(CookieUtil.get('nickname'))