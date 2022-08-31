//NEED TO DO: link external js files

const animeChar = "";
fetch("https://api.waifu.pics/sfw/bonk")
    .then(response => {
        console.log(response);
        return response.blob();
    })
    .then(blob =>{
        console.log(blob);
        document.getElementById('waifu-gif').src = URL.createObjectURL(blob);
    })
    .catch(error => {

        console.log('Error!');
        console.log(error);
    });

    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(response => {
        console.log(response)
        document.getElementById('anime-quote').innerHTML = '" ' + response.quote + ' "';
        document.getElementById('anime-character').innerHTML = "<br>" + "Said by: " + response.characte;
    });



