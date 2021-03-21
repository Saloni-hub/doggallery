let generate_btn = document.querySelector('.generate_btn');
generate_btn.addEventListener('click', fetchPics);

function fetchPics() {
    const dogsImgDiv = document.querySelector('.dogsImgDiv')
    dogsImgDiv.innerHTML='';
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((r) => r.json())
    .then((data) => {
        let dogImg = data.message;
        console.log(data);
        const dogEle = document.createElement('img');
        dogEle.setAttribute('src',`${dogImg}`)
        dogEle.classList.add('show');

        const dogsImgDiv = document.querySelector('.dogsImgDiv')
        dogsImgDiv.appendChild(dogEle);

    })
}