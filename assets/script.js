//NEED TO DO: link external js files


/*fetch("https://api.waifu.pics/sfw/bonk")
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
    */
    fetch("https://api.waifu.pics/sfw/smile")
    .then(response => response.json())
    .then(content => {
        //data, pagination, meta
        console.log(content.url);
        document.getElementById('waifu-gif').src = content.url;
    });

    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(response => {
        console.log(response)
        document.getElementById('anime-quote').innerHTML = '" ' + response.quote + ' "';
        document.getElementById('anime-character').innerHTML = "<br>" + "Said by: " + response.character;
    });




