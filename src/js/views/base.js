export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchRes: document.querySelector('.results'),
    searchResPages: document.querySelector('.results__pages'),
    searchResList: document.querySelector('.results__list')
};

export const elementStrings = {
    loader: 'loader'
};

export const renderLoader = parent => {
    const loaderHtml = `
        <div class="${elementStrings.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loaderHtml);
};

export const clearLoader = () => {
    const loaderObj = document.querySelector(`.${elementStrings.loader}`);
    if (loaderObj) loaderObj.parentElement.removeChild(loaderObj);
};