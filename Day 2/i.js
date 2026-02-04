function gotp()
    {
        let OTP=""
        for(let i=0;i<6;i++)
        {
            let randomNumber=Math.floor(Math.random()*10)
            OTP = OTP +randomNumber.toString(); 
        }
        return OTP;
    }
    
    function ot()
    {
        let a=document.getElementById("one")
        otp=gotp()
        console.log(otp)
        a.textContent=otp}