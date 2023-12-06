import { CookieUtil } from './lib/cookieUtil.js'
document.cookie = 'username=Umaporn'
document.cookie = 'course=INT201'
document.cookie = 'credit=3'
const currentCookie = document.cookie
console.log(currentCookie)
console.log(CookieUtil.get('course'))

CookieUtil.set('Bonk', 'value of bonk', new Date(12,11,2023))