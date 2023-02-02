function palindrome(value) {
    let chars = value;
    console.log("normally value: ", value)
    chars = chars.toLowerCase().replaceAll(/[\W]/g,"").replaceAll("_","").split(" ");

    let duzCumle = "";

    for (let j = 0; j < chars.length; j++) {
        let str = chars[j]
        let duzKelime = ""
        for (let i = 0; i < str.length ; i++) {
            // console.log(str.charAt(i))
            duzKelime += str.charAt(i)
        }
        // console.log(duzKelime)
        duzCumle += duzKelime;
    }
    console.log()

    let tersCumle = ""

    for (let e = chars.length - 1; e >= 0; e--) {
        let tstr = chars[e]
        let tersKelime = ""
        for (let t = tstr.length - 1; t >= 0; t--) {
            // console.log(tstr.charAt(t))
            tersKelime += tstr.charAt(t)
        }
        // console.log(tersKelime)
        tersCumle += tersKelime;
    }
    console.log(duzCumle, "X",tersCumle)

    if (duzCumle == tersCumle)
        console.log("that's palindrome :)");
    else 
        console.log("that's not a palindrome :(");
}

palindrome("ey edip adanada Pide YE")