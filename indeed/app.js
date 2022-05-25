// BURGER MENU
const burgerMenu = document.querySelector(".burgerMenu");
const responsiveMenu = document.querySelector(".responsiveMenu");
const closeResponsiveMenu = document.querySelector(".closeResponsiveMenu");
function clickHandlerOpenMenu() {
  responsiveMenu.classList.toggle("active");
}
burgerMenu.addEventListener("click", clickHandlerOpenMenu);
closeResponsiveMenu.addEventListener("click", clickHandlerOpenMenu);
// SEARCH FILTER LISTS
const searchFilters = document.querySelector(".searchFilters");
const listOptions = searchFilters.querySelectorAll(".options");
const listBtns = searchFilters.querySelectorAll("button");
function showListFilters(e) {
  const btnSelected = e.currentTarget;
  const divToShowId = btnSelected.id;
  const divToShow = searchFilters.querySelector(`.${divToShowId}List`);
  if (divToShow.classList.contains("btnSelected")) {
    listOptions.forEach((list) => {
      list.classList.remove("btnSelected");
    });
    divToShow.classList.remove("btnSelected");
  } else {
    listOptions.forEach((list) => {
      list.classList.remove("btnSelected");
    });
    divToShow.classList.add("btnSelected");
  }
}
function closeSearchFilters(e) {
  const datePostedBtn = searchFilters.querySelector("#datePosted");
  const remoteBtn = searchFilters.querySelector("#remote");
  const kilometresBtn = searchFilters.querySelector("#kilometres");
  const salaryEstimateBtn = searchFilters.querySelector("#salaryEstimate");
  const jobTypeBtn = searchFilters.querySelector("#jobType");
  const occupationBtn = searchFilters.querySelector("#occupation");
  const industryBtn = searchFilters.querySelector("#industry");
  const locationBtn = searchFilters.querySelector("#location");
  const jobLanguageBtn = searchFilters.querySelector("#jobLanguage");
  if (
    e.target !== datePostedBtn &&
    e.target !== remoteBtn &&
    e.target !== kilometresBtn &&
    e.target !== salaryEstimateBtn &&
    e.target !== jobTypeBtn &&
    e.target !== occupationBtn &&
    e.target !== industryBtn &&
    e.target !== locationBtn &&
    e.target !== jobLanguageBtn
  ) {
    listOptions.forEach((list) => {
      list.classList.remove("btnSelected");
    });
  }
}
listBtns.forEach((btn) => btn.addEventListener("click", showListFilters));
window.addEventListener("click", closeSearchFilters);
// SHOW MESSAGES BAR
const messagesHeaderBar = document.querySelector(".messagesHeader");
const messages = document.querySelector("#messagesBar");
function openMessages() {
  messages.classList.toggle("openMessages");
}
messagesHeaderBar.addEventListener("click", openMessages);
// ADDING INFORMATION TO MAIN SEARCH RESULT SELECTED (RIGHT SIDE OF WEBSITE)
const jobAdSelected = document.querySelector(".selected");
const selectedJobTitle = document.querySelector(".selectedJobTitle");
const selectedDescription = document.querySelector(".selectedJobDescription");
const searchResults = document.querySelectorAll(".searchResult");
// variables for job selected:
const jobTitle = jobAdSelected.dataset.jobtitle;
const company = jobAdSelected.dataset.company;
const jobLocation = jobAdSelected.dataset.joblocation;
const jobWage = jobAdSelected.dataset.jobwage;
const jobDescription = jobAdSelected.dataset.jobdescription;
const companySelected = document.querySelector(".companySelected");
selectedJobTitle.innerHTML = `<h1>${jobTitle}</h1>
<h2>${company}</h2>
<p>${jobWage}</p>
<p>${jobLocation}</p>
`;
selectedDescription.innerHTML = `<p>${jobDescription}</p>`;
companySelected.innerHTML = `${company}`;
function clickHandlerResult(e) {
  searchResults.forEach((result) => {
    result.classList.remove("selected");
  });
  e.currentTarget.classList.add("selected");
  selectedJobTitle.innerHTML = `<h1>${e.currentTarget.dataset.jobtitle}</h1>
<h2>${e.currentTarget.dataset.company}</h2>
<p>${e.currentTarget.dataset.jobwage}</p>
<p>${e.currentTarget.dataset.joblocation}</p>
`;
  selectedDescription.innerHTML = `<p>${e.currentTarget.dataset.jobdescription}</p>
`;
  companySelected.innerHTML = `${e.currentTarget.dataset.company}`;
}
searchResults.forEach((result) => {
  result.addEventListener("click", clickHandlerResult);
});
