// Fetch tất cả các tệp Markdown từ thư mục 'blogs'
async function fetchBlogs() {
    try {
        const response = await fetch('blogs/');
        const text = await response.text();
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(text, 'text/html');
        const files = [...htmlDoc.querySelectorAll('a')].map(a => a.href).filter(href => href.endsWith('.md'));

        return files;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return [];
    }
}

// Lấy thông tin từ phần đầu của tệp Markdown
async function fetchMarkdownInfo(file) {
    try {
        const response = await fetch(file);
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
        console.error('Error fetching Markdown file:', error);
        return null;
    }
}

// Lưu trữ các thẻ card ban đầu
let initialCards = [];

// Hiển thị các blog dưới dạng thẻ ban đầu
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
            initialCards.push(card); // Lưu thẻ card vào danh sách ban đầu
        }
    }
}

// Tạo thẻ card cho mỗi blog
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

// Tìm kiếm blog
function searchBlogs() {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value.trim().toLowerCase();
    console.log(searchText)

    // Duyệt qua danh sách thẻ card ban đầu để hiển thị hoặc ẩn dựa trên kết quả tìm kiếm
    initialCards.forEach(card => {
        const title = card.querySelector('.card-title').innerText.toLowerCase();
        const description = card.querySelector('.card-text').innerText.toLowerCase();

        if (title.includes(searchText) || description.includes(searchText)) {
            card.classList.remove('d-none'); // Hiển thị thẻ card nếu chứa từ khóa tìm kiếm
        } else {
            card.classList.add('d-none'); // Ẩn thẻ card nếu không chứa từ khóa tìm kiếm
        }
    });

    // Hiển thị thông báo nếu không tìm thấy kết quả
    const noResults = document.getElementById('no-results');
    if (initialCards.every(card => card.classList.contains('d-none'))) {
        noResults.classList.remove('d-none');
    } else {
        noResults.classList.add('d-none');
    }
}

// Tạo hàm debounce để trì hoãn việc gọi hàm searchBlogs()
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

// Gán sự kiện tìm kiếm cho input search
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', debounce(searchBlogs, 200)); // Áp dụng debounce sau 1s

// Wait for the DOM content to load before executing
document.addEventListener('DOMContentLoaded', displayBlogs);
