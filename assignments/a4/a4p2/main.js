const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imageFiles = ["pic1.jpg, pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"]

/* Declaring the alternative text for each image file */

const alts = {
    'pic1.jpg' : 'Closeup of the human eye',
    'pic2.jpg' : 'A Rock that looks like a wave',
    'pic3.jpg' : 'Purple and white flowers',
    'pic4.jpg' : 'A painting of a pharos',
    'pic5.jpg' : 'A Large moth on a leaf'
}

/* Looping through images */

for (const image of images) {
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${image}`);
newImage.setAttribute('alt', alts[image]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */
