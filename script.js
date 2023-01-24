let images = [
    "Images/ama-dablam-g4ac46f31c_1920.jpg",
    "Images/godafoss-gdfd18d0b9_1920.jpg", 
    "Images/mountains-ge189c32b0_1280.jpg", 
    "Images/nature-g368d984a7_1920.jpg", 
    "Images/road-ga5df27db6_1920.jpg"
];

let image = document.querySelector('#image');

setInterval(toggleImg, 2000);
                
function toggleImg(){
    let randomImg = Math.floor(Math.random() * images.length);
    image.setAttribute('src', `${images[randomImg]}`);
    image.setAttribute('width', '1300px');
    image.setAttribute('height', '700px');
}
    
   









