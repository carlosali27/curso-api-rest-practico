searchFormBtn.addEventListener('click', () => {
    // const inputValue = searchFormInput.value;

    // location.hash = `#search=${inputValue}`;
    location.hash = '#search=' + searchFormInput.value;
});

trendingBtn.addEventListener('click', () => {
    location.hash = '#trends'
});

arrowBtn.addEventListener('click', () => {
    history.back();    
    // history.go(-2);
    // location.hash = '#home'
});

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    console.log({ location });

    if (location.hash.startsWith('#trends')) {
        trendsPage();
    } else if (location.hash.startsWith('#search=')) {
        searchPage();
    } else if (location.hash.startsWith('#movie=')) {
        movieDetailsPage();
    } else if (location.hash.startsWith('#category=')) {
        categoriesPage();
    } else {
        homePage();
    }
    // document.body.scrollTop = 100;
    // document.documentElement.scrollTop = 500;
}

function homePage() {
    console.log('HOME');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');
    
    getTrendingMoviesPreview();
    getCategoriesPreview();
}

function trendsPage() {
    console.log('TRENDS !!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    headerCategoryTitle.textContent = 'Tendencias';

    getTrendingMovies();
}

function searchPage() {
    console.log('SEARCH !!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    // '#search=yupi' = ['#search', 'yupi']
    const [ _, query ] = location.hash.split('=');
    getMoviesBySearch(query);
}

function movieDetailsPage() {
    console.log('MOVIE !!!');

    headerSection.classList.add('header-container--long');
    // headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');
    
     // '#movie=94816' = ['#movie=', '94816']
     const [ _, movieId ] = location.hash.split('=');
    getMovieById(movieId);
}

function categoriesPage() {
    console.log('CATEGORIES !!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    // '#category=28-Action' = ['#category', '28-Action']
    const [ _, categoryData ] = location.hash.split('=');
    const [ categoryId, categoryName ] = categoryData.split('-');

    headerCategoryTitle.textContent = categoryName;
    
    getMoviesByCategory(categoryId);
}
