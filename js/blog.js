async function fetchBlogs() {
    try {
        const response = await fetch('../blogs.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.blogs;
    } catch (error) {
        console.error('Error fetching blogs:', error.message, error.stack);
        return [];
    }
}

async function fetchMarkdownInfo(file) {
    try {
        const response = await fetch(`https://vinhveer.github.io/${file}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const markdown = await response.text();
        const lines = markdown.split('\n');
        const info = {};

        lines.forEach(line => {
            if (line.startsWith('icon-dir:')) {
                info.iconDir = line.replace('icon-dir:', '').trim();
            } else if (line.startsWith('title:')) {
                info.title = line.replace('title:', '').trim();
            } else if (line.startsWith('Description:')) {
                info.description = line.replace('Description:', '').trim();
            }
        });

        return info;
    } catch (error) {
        console.error('Error fetching Markdown file:', error.message, error.stack);
        return null;
    }
}

let initialCards = [];

async function displayBlogs() {
    const blogsContainer = document.getElementById('blogs-container');
    if (!blogsContainer) {
        console.error('Error: blogs-container not found');
        return;
    }

    const blogs = await fetchBlogs();

    for (const blog of blogs) {
        const info = await fetchMarkdownInfo(blog);

        if (info) {
            const card = createBlogCard(info, blog);
            blogsContainer.appendChild(card);
            initialCards.push(card);
        }
    }
}

function createBlogCard(info, blogUrl) {
    const card = document.createElement('div');
    card.className = 'card d-flex flex-row align-items-center mt-3 p-2';

    const img = document.createElement('img');
    img.src = info.iconDir || 'path/to/default/icon.png';
    img.width = 90;
    img.className = 'ms-3 me-3';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.innerText = info.title || 'Untitled';

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.innerText = info.description || 'No description available';

    const cardLink = document.createElement('a');
    cardLink.href = `view.html?file=${encodeURIComponent(blogUrl)}`;
    cardLink.className = 'btn btn-success';
    cardLink.innerText = 'View';

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardLink);
    card.appendChild(img);
    card.appendChild(cardBody);

    return card;
}

function searchBlogs() {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value.trim().toLowerCase();
    console.log(searchText);

    initialCards.forEach(card => {
        const title = card.querySelector('.card-title').innerText.toLowerCase();
        const description = card.querySelector('.card-text').innerText.toLowerCase();

        if (title.includes(searchText) || description.includes(searchText)) {
            card.classList.remove('d-none');
        } else {
            card.classList.add('d-none');
        }
    });

    const noResults = document.getElementById('no-results');
    if (initialCards.every(card => card.classList.contains('d-none'))) {
        noResults.classList.remove('d-none');
    } else {
        noResults.classList.add('d-none');
    }
}

function debounce(func, delay) {
    let timer;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(searchBlogs, 200));
    } else {
        console.error('Error: search-input not found');
    }

    displayBlogs();
});

function updateTheme() {
    const someElement = document.getElementById('some-element-id');
    if (someElement) {
        someElement.classList.add('new-class');
    } else {
        console.error('Error: some-element-id not found');
    }
}

updateTheme();
