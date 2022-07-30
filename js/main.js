let one = document.querySelector('#one')
let two = document.querySelector('#two')
let convert = document.querySelector('span')
let convert2 = document.querySelectorAll('span')[1]

let clear = document.querySelector('button')

convert.onclick = () => {

    const isJson = (str) => {
        try {
            JSON.parse(one.value);
        } catch (e) {
            //Error
            //JSON is not okay
            alert('please write a valid json syntax')
        }

        two.value = `${Object.keys(JSON.parse(one.value))},${Object.values(JSON.parse(one.value))}`
    }
    isJson()
}

let theobj 
let temp
convert2.onclick = () => {

    var thestring = two.value;


    let temp = thestring.split(","),
        theobj = {};
    for (let i = 0; i < temp.length; i += 2) {
        theobj[temp[i]] = temp[(i + 1)];
    }


    one.value = JSON.stringify(theobj);
}


clear.onclick = () => {
    one.value = ' '
    two.value = ' '
}



