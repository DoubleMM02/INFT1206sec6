// Functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

// Initialize comments section as hidden

commentWrapper.style.display = 'none';

// Toggle comment section visibility using event handler

showHideBtn.onclick = function() {
    if (commentWrapper.style.display === 'none') {
        commentWrapper.style.display = 'block';
        showHideBtn.textContent = 'Hide comments';
    } else {
        commentWrapper.style.display = 'none';
        showHideBtn.textContent = 'Show comments';
    }
};

// Functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

// Event handler for form submission
form.onsubmit = function(e) {
    e.preventDefault();
    submitComment();
};

function submitComment() {
    if (nameField.value.trim() !== '' && commentField.value.trim() !== '') {
        const listItem = document.createElement('li');
        const namePara = document.createElement('p');
        const commentPara = document.createElement('p');

        namePara.textContent = nameField.value;
        commentPara.textContent = commentField.value;

        listItem.appendChild(namePara);
        listItem.appendChild(commentPara);
        list.appendChild(listItem);

        nameField.value = '';
        commentField.value = '';
    } else {
        alert('Please fill in both fields.');
    }
}
