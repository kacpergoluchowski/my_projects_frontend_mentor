let correct = 0;  

function validation()
{
    correct = 0;
    checkCardNumberCorrect();
    checkCardholderNameCorrect();
    checkMonthCorrect();
    checkYearCorrect();
    checkCvcCorrect();
    if(correct == 5)
    {
        updateCard();
    }
    console.log(correct);
}

function checkCardholderNameCorrect() {
    if(document.querySelectorAll("input")[0].value=="")
    {
        document.querySelectorAll("input")[0].placeholder = "BRAK DANYCH!";
        document.querySelectorAll("input")[0].style.border = "solid hsl(0, 100%, 66%) 1px";
    }
    else
    {
        let data = document.querySelectorAll("input")[0].value;
        for(let i = 0; i < data.length; i++)
        {
            if(isNaN(data[i]) || data[i] == " ")
            {
                document.querySelectorAll("input")[0].style.border = "none";
                if(i==data.length-1)
                {
                    correct++;
                }
                continue;
            }
            else
            {
                document.querySelectorAll("input")[0].value = "";
                document.querySelectorAll("input")[0].placeholder = "NIE MOZE ZAWIERAC CYFR!";
                document.querySelectorAll("input")[0].style.border = "solid hsl(0, 100%, 66%) 1px";
                break;
            }
        }
    }
}

function checkCardNumberCorrect() {
    if(document.querySelectorAll("input")[1].value=="")
    {
        document.querySelectorAll("input")[1].placeholder = "BRAK DANYCH!";
        document.querySelectorAll("input")[1].style.border = "solid hsl(0, 100%, 66%) 1px";
    }
    else if(document.querySelectorAll("input")[1].value.length!=16)
    {
        document.querySelectorAll("input")[1].value = "";
        document.querySelectorAll("input")[1].placeholder = "MUSI ZAWIERAC 16 CYFR!";
        document.querySelectorAll("input")[1].style.border = "solid hsl(0, 100%, 66%) 1px";
    }
    else 
    {
        let data = document.querySelectorAll("input")[1].value;
        for(let i = 0; i < data.length; i++)
        {
            if(isNaN(data[i]))
            {
                document.querySelectorAll("input")[1].value = "";
                document.querySelectorAll("input")[1].placeholder = "NIE MOZE ZAWIERAC LITER!";
                document.querySelectorAll("input")[1].style.border = "solid hsl(0, 100%, 66%) 1px";
                break;
            }
            else
            {
                document.querySelectorAll("input")[1].style.border = "none";
                if(i==data.length-1)
                {
                    correct++;
                }
                continue;
            }
        }
    }
}

function checkMonthCorrect() {
    if(document.querySelectorAll("input")[2].value == "")
    {
        document.querySelectorAll("input")[2].placeholder = "BRAK DANYCH!";
        document.querySelectorAll("input")[2].style.border = "solid hsl(0, 100%, 66%) 1px";
    }
    else if(document.querySelectorAll("input")[2].value.length!=2)
    {
        document.querySelectorAll("input")[2].value = "";
        document.querySelectorAll("input")[2].placeholder = "MUSI ZAWIERAC 2 CYFRY!";
        document.querySelectorAll("input")[2].style.border = "solid hsl(0, 100%, 66%) 1px"; 
    }
    else
    {
        let data = document.querySelectorAll("input")[2].value;
        for(let i = 0; i < data.length; i++)
        {
            if(isNaN(data[i]))
            {
                document.querySelectorAll("input")[2].value = "";
                document.querySelectorAll("input")[2].placeholder = "NIE MOZE ZAWIERAC LITER!";
                document.querySelectorAll("input")[2].style.border = "solid hsl(0, 100%, 66%) 1px";
                break;
            }
            else
            {
                if(i==data.length-1)
                {
                    correct++;
                }
                document.querySelectorAll("input")[2].style.border = "none";
                continue;
            }
        }
    }
}

function checkYearCorrect() {
    if(document.querySelectorAll("input")[3].value == "")
    {
        document.querySelectorAll("input")[3].placeholder = "BRAK DANYCH!";
        document.querySelectorAll("input")[3].style.border = "solid hsl(0, 100%, 66%) 1px";
    }
    else if(document.querySelectorAll("input")[3].value.length!=2)
    {
        document.querySelectorAll("input")[3].value = "";
        document.querySelectorAll("input")[3].placeholder = "MUSI ZAWIERAC 2 CYFRY!";
        document.querySelectorAll("input")[3].style.border = "solid hsl(0, 100%, 66%) 1px"; 
    }
    else
    {
        let data = document.querySelectorAll("input")[3].value;
        for(let i = 0; i < data.length; i++)
        {
            if(isNaN(data[i]))
            {
                document.querySelectorAll("input")[3].value = "";
                document.querySelectorAll("input")[3].placeholder = "NIE MOZE ZAWIERAC LITER!";
                document.querySelectorAll("input")[3].style.border = "solid hsl(0, 100%, 66%) 1px";
                break;
            }
            else
            {
                if(i==data.length-1)
                {
                    correct++;
                }
                document.querySelectorAll("input")[3].style.border = "none";
                continue;
            }
        }
    }
}

function checkCvcCorrect()
{
    if(document.querySelectorAll("input")[4].value == "")
    {
        document.querySelectorAll("input")[4].placeholder = "BRAK DANYCH!";
        document.querySelectorAll("input")[4].style.border = "solid hsl(0, 100%, 66%) 1px";
    }
    else if(document.querySelectorAll("input")[4].value.length!=3)
    {
        document.querySelectorAll("input")[4].value = "";
        document.querySelectorAll("input")[4].placeholder = "MUSI ZAWIERAC 3 CYFRY!";
        document.querySelectorAll("input")[4].style.border = "solid hsl(0, 100%, 66%) 1px"; 
    } 
    else
    {
        let data = document.querySelectorAll("input")[4].value;
        for(let i = 0; i < data.length; i++)
        {
            if(isNaN(data[i]))
            {
                document.querySelectorAll("input")[4].value = "";
                document.querySelectorAll("input")[4].placeholder = "NIE MOZE ZAWIERAC LITER!";
                document.querySelectorAll("input")[4].style.border = "solid hsl(0, 100%, 66%) 1px";
                break;
            }
            else
            {
                if(i==data.length-1)
                {
                    correct++;
                }
                document.querySelectorAll("input")[4].style.border = "none";
                continue;
            }
        }
    }
}

function updateCard()
{
    // card number
    document.querySelector("h2").innerHTML = "";
    for(let i = 0; i < 16; i++)
    {
        let data = document.querySelectorAll("input")[1].value;
        if(i % 4 == 0)
        {
            document.querySelector("h2").innerHTML += " ";
            document.querySelector("h2").innerHTML += data[i];
        }
        else
        {
            document.querySelector("h2").innerHTML += data[i];
        }
    }
    // cardholder name
    document.querySelector("h3").innerHTML = "";
    document.querySelector("h3").innerHTML = document.querySelectorAll("input")[0].value;
    //date
    document.querySelectorAll("h3")[1].innerHTML = "";
    document.querySelectorAll("h3")[1].innerHTML = `${document.querySelectorAll("input")[2].value} / ${document.querySelectorAll("input")[3].value}`;
    //cvc
    document.querySelectorAll("h3")[2].innerHTML = "";
    document.querySelectorAll("h3")[2].innerHTML = document.querySelectorAll("input")[4].value;
}