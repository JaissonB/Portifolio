const initId = 'about-nav-link-';
const fControlAboutNav = id => {
    const linkActive = $(`#${id} a`);
    [1, 2, 3].forEach(el => {
        $(`#${initId + el} a`).removeClass('link-active');
    });
    linkActive.addClass('link-active');
}
