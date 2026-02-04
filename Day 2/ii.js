var input1 =document.getElementById("input1")
    var input2 =document.getElementById("input2")
    var result =document.getElementById("result")

    function openpage()
    {
        var spell = "svk"
        var pass = "7"
        var nameenter = input1.value
        var passenter = input2.value
        if(pass == passenter && spell == nameenter)
        {
            alert("this site can access your location")
            console.log("Welcome"+"   "+spell)
            result.textContent="Welcome"+"    "+spell
        }
        else{
            alert("please check the username & password")
            result.textContent="wrong password"
            console.log("Wrong password")
        }

    }
