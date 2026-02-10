// Dữ Liệu Phim
const moviesData = [
    {
        id: 1,
        title: "Thoát Khỏi Nhà Tù Shawshank",
        year: 1994,
        genres: ["Chính Kịch"],
        rating: 9.3,
        poster: "images/shawshank.jpg",
        description: "Hai người bị giam giữ kết nối trong nhiều năm, tìm thấy an ủi và cuối cùng được cứu lạc qua những hành động lành mạnh.",
        director: "Frank Darabont",
        cast: "Tim Robbins, Morgan Freeman"
    },
    {
        id: 2,
        title: "Bố Già",
        year: 1972,
        genres: ["Tội Phạm", "Chính Kịch"],
        rating: 9.2,
        poster: "images/godfather.jpg",
        description: "Một ông chủ tội phạm lớn tuổi chuyển giao quyền kiểm soát đế chế bí mật của mình cho con trai trẻ nhất.",
        director: "Francis Ford Coppola",
        cast: "Marlon Brando, Al Pacino"
    },
    {
        id: 3,
        title: "Hiệp Sĩ Bóng Đêm",
        year: 2008,
        genres: ["Hành Động", "Tội Phạm", "Chính Kịch"],
        rating: 9.0,
        poster: "images/dark-knight.jpg",
        description: "Khi Joker gây ra hỗn loạn ở Gotham, Batman phải chấp nhận một trong những thử thách lớn nhất về tâm lý và thể chất.",
        director: "Christopher Nolan",
        cast: "Christian Bale, Heath Ledger"
    },
    {
        id: 4,
        title: "Chuyện Đêm Nóng",
        year: 1994,
        genres: ["Tội Phạm", "Chính Kịch"],
        rating: 8.9,
        poster: "images/pulp-fiction.jpg",
        description: "Cuộc sống của hai sát thủ, một võ sĩ quyền anh, một gangster và vợ anh ta gắn liền trong bốn câu chuyện.",
        director: "Quentin Tarantino",
        cast: "John Travolta, Uma Thurman"
    },
    {
        id: 5,
        title: "Forrest Gump",
        year: 1994,
        genres: ["Chính Kịch", "Tình Cảm"],
        rating: 8.8,
        poster: "images/forrest-gump.jpg",
        description: "Các nhiệm kỳ của Kennedy và Johnson được kể lại từ góc nhìn của một người đàn ông Alabama với chỉ số thông minh 75.",
        director: "Robert Zemeckis",
        cast: "Tom Hanks, Gary Sinise"
    },
    {
        id: 6,
        title: "Giấc Mơ Khai Sinh",
        year: 2010,
        genres: ["Hành Động", "Khoa Học Viễn Tưởng", "Gây Căng Thẳng"],
        rating: 8.8,
        poster: "images/inception.jpg",
        description: "Một kẻ trộm tài ba sử dụng công nghệ chia sẻ giấc mơ được giao nhiệm vụ cấy vào một ý tưởng.",
        director: "Christopher Nolan",
        cast: "Leonardo DiCaprio, Marion Cotillard"
    },
    {
        id: 7,
        title: "Ma Trận",
        year: 1999,
        genres: ["Hành Động", "Khoa Học Viễn Tưởng"],
        rating: 8.7,
        poster: "images/matrix.jpg",
        description: "Một hacker máy tính học từ những người nổi dậy bí ẩn về bản chất thực sự của thực tế của anh ta.",
        director: "Lana Wachowski, Lilly Wachowski",
        cast: "Keanu Reeves, Laurence Fishburne"
    },
    {
        id: 8,
        title: "Biệt Đội Siêu Anh Hùng",
        year: 2012,
        genres: ["Hành Động", "Phiêu Lưu", "Khoa Học Viễn Tưởng"],
        rating: 8.0,
        poster: "images/avengers.jpg",
        description: "Những anh hùng mạnh nhất của Trái Đất phải đoàn kết để bảo vệ thế giới khỏi mối đe dọa ngoài hành tinh.",
        director: "Joss Whedon",
        cast: "Robert Downey Jr., Chris Evans"
    },
    {
        id: 9,
        title: "Tàu Titanic",
        year: 1997,
        genres: ["Chính Kịch", "Tình Cảm"],
        rating: 7.8,
        poster: "images/titanic.jpg",
        description: "Một cô gái quý tộc 17 tuổi yêu thích một nghệ sĩ tốt bụng nhưng nghèo khó trên tàu Titanic.",
        director: "James Cameron",
        cast: "Leonardo DiCaprio, Kate Winslet"
    },
    {
        id: 10,
        title: "Liên Sao Ngoại Khóa",
        year: 2014,
        genres: ["Phiêu Lưu", "Chính Kịch", "Khoa Học Viễn Tưởng"],
        rating: 8.6,
        poster: "images/interstellar.jpg",
        description: "Một đội nhà thám hiểm du hành qua lỗ sâu không gian để đảm bảo sự tồn tại của loài người.",
        director: "Christopher Nolan",
        cast: "Matthew McConaughey, Anne Hathaway"
    },
    {
        id: 11,
        title: "Vua Sư Tử",
        year: 1994,
        genres: ["Hoạt Hình", "Phiêu Lưu", "Chính Kịch"],
        rating: 8.5,
        poster: "images/lion-king.jpg",
        description: "Hoàng tử sư tử Simba và cha anh ta bị nhắm đến bởi cậu chú tham vọng muốn kiểm soát vương quốc.",
        director: "Roger Allers, Rob Minkoff",
        cast: "James Earl Jones, Jeremy Irons"
    },
    {
        id: 12,
        title: "Thế Thân",
        year: 2009,
        genres: ["Hành Động", "Phiêu Lưu", "Khoa Học Viễn Tưởng"],
        rating: 7.8,
        poster: "images/avatar.jpg",
        description: "Một chiến binh tàn tật được gửi đến mặt trăng Pandora và phải chọn giữa lệnh của ông và bảo vệ thế giới anh yêu thích.",
        director: "James Cameron",
        cast: "Sam Worthington, Zoe Saldana"
    }
];

// State Management
let filteredMovies = [...moviesData];
let selectedGenres = [];
let searchTerm = '';
let debounceTimer;

// DOM Elements
const moviesContainer = document.getElementById('moviesContainer');
const genreFiltersDiv = document.getElementById('genreFilters');
const searchInput = document.getElementById('searchInput');
const clearFiltersBtn = document.getElementById('clearFilters');
const darkModeToggle = document.getElementById('darkModeToggle');
const movieModal = document.getElementById('movieModal');
const closeModalBtn = document.getElementById('closeModal');
const noResultsDiv = document.getElementById('noResults');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeDarkMode();
    generateGenreFilters();
    displayMovies();
    attachEventListeners();
});

// Dark Mode Functions
function initializeDarkMode() {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        document.body.classList.add('dark-mode');
        updateToggleIcon();
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    updateToggleIcon();
}

function updateToggleIcon() {
    const icon = darkModeToggle.querySelector('.toggle-icon');
    const isDarkMode = document.body.classList.contains('dark-mode');
    icon.textContent = isDarkMode ? '☀️' : '🌙';
}

// Genre Filter Functions
function generateGenreFilters() {
    const genres = [...new Set(moviesData.flatMap(movie => movie.genres))];
    genres.sort();

    genreFiltersDiv.innerHTML = genres.map(genre => `
        <div class="genre-filter">
            <input type="checkbox" id="genre-${genre}" value="${genre}">
            <label for="genre-${genre}">${genre}</label>
        </div>
    `).join('');
}

// Display Movies
function displayMovies() {
    if (filteredMovies.length === 0) {
        moviesContainer.innerHTML = '';
        noResultsDiv.style.display = 'block';
        return;
    }

    noResultsDiv.style.display = 'none';
    moviesContainer.innerHTML = filteredMovies.map(movie => `
        <div class="movie-card" data-id="${movie.id}">
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-year">${movie.year}</p>
                <div class="movie-rating">
                    <span class="rating-badge">⭐ ${movie.rating}</span>
                </div>
            </div>
        </div>
    `).join('');

    // Attach click listeners to movie cards
    document.querySelectorAll('.movie-card').forEach(card => {
        card.addEventListener('click', () => openMovieModal(parseInt(card.dataset.id)));
    });
}

// Filter Movies
function filterMovies() {
    filteredMovies = moviesData.filter(movie => {
        // Genre filter
        const genreMatch = selectedGenres.length === 0 || 
                          selectedGenres.some(genre => movie.genres.includes(genre));

        // Search filter
        const searchMatch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());

        return genreMatch && searchMatch;
    });

    displayMovies();
}

// Debounce Search
function debounceSearch(callback, delay = 300) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(callback, delay);
}

// Modal Functions
function openMovieModal(movieId) {
    const movie = moviesData.find(m => m.id === movieId);
    if (!movie) return;

    document.getElementById('modalPoster').src = movie.poster;
    document.getElementById('modalTitle').textContent = movie.title;
    document.getElementById('modalYear').textContent = `Phát Hành: ${movie.year}`;
    document.getElementById('modalGenres').textContent = movie.genres.join(', ');
    document.getElementById('modalRating').textContent = movie.rating;
    document.getElementById('modalDescription').textContent = movie.description;
    document.getElementById('modalDirector').textContent = movie.director;
    document.getElementById('modalCast').textContent = movie.cast;

    movieModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeMovieModal() {
    movieModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Event Listeners
function attachEventListeners() {
    // Genre checkboxes
    genreFiltersDiv.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            const genre = e.target.value;
            if (e.target.checked) {
                selectedGenres.push(genre);
            } else {
                selectedGenres = selectedGenres.filter(g => g !== genre);
            }
            filterMovies();
        }
    });

    // Search input with debounce
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        debounceSearch(() => {
            filterMovies();
        }, 300);
    });

    // Clear filters button
    clearFiltersBtn.addEventListener('click', () => {
        selectedGenres = [];
        searchTerm = '';
        searchInput.value = '';
        
        // Uncheck all checkboxes
        document.querySelectorAll('.genre-filter input').forEach(checkbox => {
            checkbox.checked = false;
        });

        filteredMovies = [...moviesData];
        displayMovies();
    });

    // Dark mode toggle
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // Modal events
    closeModalBtn.addEventListener('click', closeMovieModal);

    // Close modal when clicking outside
    movieModal.addEventListener('click', (e) => {
        if (e.target === movieModal) {
            closeMovieModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && movieModal.classList.contains('show')) {
            closeMovieModal();
        }
    });
}
