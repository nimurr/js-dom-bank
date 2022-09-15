

document.getElementById('submit-btn').addEventListener('click', function(){
    const user = document.getElementById('user-email');
    const uservalue = user.value ;

    const passord= document.getElementById('user-pass');
    const passordvalue = passord.value;
    
    if( uservalue === 'nerob@gmail.com' && passordvalue === '0000'){
        location.href = 'bank.html';
        
    }

    else{
        alert('Invalid Email or passowrd')
    }





   
})
