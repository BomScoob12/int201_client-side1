if (undefined == null) console.log('undefined==null')
else console.log('undefined!=null')
if (undefined === null) console.log('undefined===null')
else console.log('undefined!==null')
// == do not care types but only check valueif ('2' == 2) console.log(`'2'==2`)else console.log(`'2'!=2`)
//=== start to check data type first. If data types are not the same return false, otherwise then check valueif ('2' === 2) console.log(`'2'===2`)else console.log(`'2'!==2`)
//recommend to use === for equality and !== for inequality
//avoid to use == and !=