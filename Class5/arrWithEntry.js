const str = [...'Hello world']
console.log(str)
for(const [index, value] of str.entries()){
    //each entry use destructure
    console.log(index, value)
}