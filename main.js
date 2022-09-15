

document.getElementById('dip-btn').addEventListener('click', function(){
    const dipinputfild = document.getElementById('dip-int-vlue');
    const dipinputvalue = dipinputfild.value ;
    const dipinputvaluefloat = parseFloat(dipinputvalue);
    // console.log(dipinputvalue);

    const dipmoney = document.getElementById('dip-money');
    const dipmoneytext = dipmoney.innerText;
    const diptofloat = parseFloat(dipmoneytext)

    const totaldipvalue = dipinputvaluefloat + diptofloat;
    

    const totaldipmoney = document.getElementById('total-money');
    const totaldiptotext = totaldipmoney.innerText;
    const totaltofloat = parseFloat(totaldiptotext);

    const totalbalenc = dipinputvaluefloat + totaltofloat;
    if(0< dipinputvaluefloat){
        dipmoney.innerText = totaldipvalue;
        totaldipmoney.innerText = totalbalenc;

    }
    
    else{
        alert('Please Depisit money')
    }
    dipinputfild.value = '';
})


document.getElementById('wid-btn').addEventListener('click', function(){

    const widmoney = document.getElementById('wid-int-value');
    const widtotext = widmoney.value ;
    const widtofloat = parseFloat(widtotext);

    const totalmoney = document.getElementById('total-money');
    const totaltotext = totalmoney.innerText;
    const totaltofloating = parseFloat(totaltotext);

    const totalmoneywid = totaltofloating - widtofloat;
    if(0<totalmoneywid){
        totalmoney.innerText = totalmoneywid;
    }
    


    

    const widmoneytext = document.getElementById('wid-money');
    const widmoneytotext = widmoneytext.innerText;
    const widmoneytofloat = parseFloat(widmoneytotext) ;


    const widrowmonyadd = widtofloat + widmoneytofloat ;
    
    if(0<totalmoneywid){
        widmoneytext.innerText = widrowmonyadd;
    }
    else{
        alert('Please Withdrow money');
    }
    


    widmoney.value = '';

})
















// function getvalueInputById(id){
//     const sendvalue = document.getElementById(id);
//     const allsendvaluestr = sendvalue.value ;
//     sendvalue.value = '';
//     const allsendvalue = parseFloat(allsendvaluestr) ;
//     return allsendvalue;
// } 

// document.getElementById('dip-btn').addEventListener('click', function(){
//     const depositValue = getvalueInputById('int-vlue');
//     // console.log(typeof allsendvalue);
//     const dipmoney = document.getElementById('dip-money');
//     const widmoney = document.getElementById('wid-money');
//     dipmoney.innerText = depositValue;
//     widmoney.innerText = depositValue;
     

// })