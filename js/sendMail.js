const form=document.querySelector('#contactForm')



form.addEventListener('submit',(e)=>{
    console.log(e)
    e.preventDefault();
    const data=new FormData(e.currentTarget);
    const name=data.get('name');
    const number=data.get('number');
    const email=data.get('email');
    const msg=data.get('msg');

    if (name!="" && number!="" && email!="" && msg!="") {
        const body=`name: ${name} <br/>
        email: ${email} <br/>
        number: ${number} <br/>
        message: ${msg}`
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "yepiengesso@gmail.com",
            Password : "F6B6E944875A43A1F865CF8351C98E0EC311",
            To : 'yepiengesso@gmail.com',
            From : 'yepiengesso@gmail.com',
            Subject : "This is the subject",
            Body : body
        }).then(
          message => {
            console.log(message)
            if (message=="OK") {
                Swal.fire({
                    icon: 'success',
                    title: 'Succes!',
                    text: "message envoyer"
                  })
            }else{
                
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "veillez remplir correctement le formulaire"
                  })
                
            }
          }
        );
        
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "veillez remplir correctement le formulaire"
          })
        
    }

    
})