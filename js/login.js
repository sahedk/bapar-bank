
document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
      
    const passwordField =document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email,password)
    if(email === 'sahedkhan@gmail.com' && password === 'secret'){
        window.location.href = 'index.html';
    }

    else{
        alert('toke ami tezoputro korlam')
    }
})
