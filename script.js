function cargarimagen(){
    let select = document.getElementById('opciones');
    let images = document.createElement('img');

    if (select.value == 1){
        images.setAttribute('src', 'https://raw.githubusercontent.com/GusAGeek/Images/main/images/Sandia.png');
    }
    else if (select.value == 2){
        images.setAttribute('src','https://raw.githubusercontent.com/GusAGeek/Images/main/images/Parchita.png');
    }
    else if (select.value == 3){
        images.setAttribute('src', 'https://raw.githubusercontent.com/GusAGeek/Images/main/images/Kiwi.png')
    }
    else if (select.value == 4){
        images.setAttribute('src', 'https://raw.githubusercontent.com/GusAGeek/Images/main/images/Durazno.png')
    }
}