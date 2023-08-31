const jobsListings = [
  {
    "id": 1,
    "company": "Photosnap",
    "logo": "./images/photosnap.svg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"]
  },
  {
    "id": 2,
    "company": "Manage",
    "logo": "./images/manage.svg",
    "new": true,
    "featured": true,
    "position": "Fullstack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["React"]
  },
  {
    "id": 3,
    "company": "Account",
    "logo": "./images/account.svg",
    "new": true,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2d ago",
    "contract": "Part Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  },
  {
    "id": 4,
    "company": "MyHome",
    "logo": "./images/myhome.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["CSS", "JavaScript"]
  },
  {
    "id": 5,
    "company": "Loop Studios",
    "logo": "./images/loop-studios.svg",
    "new": false,
    "featured": false,
    "position": "Software Engineer",
    "role": "FullStack",
    "level": "Midweight",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["Ruby", "Sass"]
  },
  {
    "id": 6,
    "company": "FaceIt",
    "logo": "./images/faceit.svg",
    "new": false,
    "featured": false,
    "position": "Junior Backend Developer",
    "role": "Backend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "UK Only",
    "tools": ["RoR"]
  },
  {
    "id": 7,
    "company": "Shortly",
    "logo": "./images/shortly.svg",
    "new": false,
    "featured": false,
    "position": "Junior Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["HTML", "JavaScript"],
    "tools": ["Sass"]
  },
  {
    "id": 8,
    "company": "Insure",
    "logo": "./images/insure.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["Vue", "Sass"]
  },
  {
    "id": 9,
    "company": "Eyecam Co.",
    "logo": "./images/eyecam-co.svg",
    "new": false,
    "featured": false,
    "position": "Full Stack Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "3w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript", "Python"],
    "tools": ["Django"]
  },
  {
    "id": 10,
    "company": "The Air Filter Company",
    "logo": "./images/the-air-filter-company.svg",
    "new": false,
    "featured": false,
    "position": "Front-end Dev",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "1mo ago",
    "contract": "Part Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  }
];
const TAG_ACTIVE_CLASS = 'tag--active';
const SEARCH_HIDDEN_CLASS = 'hidden';
const CLOSE_TAG_CLASS = 'close-tag';
const TAG_CLASS = 'tag';


function getTagHTML(tag, tagClasses) {
    return `<span class="${tagClasses} ">
                ${tag}
            </span>`;
}

function getJobListingHTML(jobData, filterTags = []) {
    if (jobData.featured) {
        jobData.featured = 'FEATURED';
    } else {
        jobData.featured = '';
    }
    if (jobData.new) {
        jobData.new = 'NEW!'
    } else {
        jobData.new = ''
    }
    const JOB_TAGS_PLACEHOLDER = '###JOB_TAGS###';
    let jobListingHTML = `
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center bg-white px-4 pb-8 md:p-8 rounded-md shadow-xl shadow-darkCyan/10; border-l-[6px] border-l-darkCyan;" ${jobData.featured === '' ? '' : 'style="border-left-width: 6px; border-color: #5BA4A4;"'}>
                    <div class="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-6 min-w-max">
                        <div class="w-16 h-16 md:w-auto md:h-auto relative -top-8 md:top-0">
                            <img src="${jobData.logo}" alt="${jobData.company}">
                        </div>
                        <div class="space-y-2">
                            <div class="space-x-1">
                                <span class="text-darkCyan font-bold mr-3">${jobData.company}</span>
                                <span id="jobs-new" class="bg-darkcyan text-white text-xs uppercase p-2 pb-1.5 rounded-full" ${jobData.new === '' ? '' : 'style="padding-right: 10px; background-color: #5BA4A4; font-size: 14px; font-weight: 700; border-radius: 9999px; padding-left: 10px; padding-top: 8px; color: white;"'}>${jobData.new}</span>
                                <span id="jobs-featured" class=" text-white text-xs uppercase p-2 pb-1.5 rounded-full" ${jobData.featured === '' ? '' : 'style="padding-right: 10px; background-color: #2C3A3A; font-size: 14px; font-weight: 700; border-radius: 9999px; border-inline-start-color: #5DA4A4; padding-left: 10px; padding-top: 8px; color: white;"'}>${jobData.featured}</span>
                            </div>
                            <h4 class="font-bold text-[21px] hover:text-darkCyan transition-all cursor-pointer">
                                ${jobData.position}
                            </h4>
                            <ul class="flex list-disc list-inside space-x-4">
                                <li class="text-darkGrayishCyan list-none">${jobData.postedAt}</li>
                                <li class="text-darkGrayishCyan">${jobData.contract}</li>
                                <li class="text-darkGrayishCyan">${jobData.location}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex items-center flex-wrap gap-2 md:gap-4 my-4 md:my-0 border-t-[1px] md:border-t-0 pt-4 hover:text-white md:pt-0 md:ml-4 border-grayish-cyan-medium;">
                        ${JOB_TAGS_PLACEHOLDER}
                    </div>
                  </div>

    `;

    const tagsList = [
        jobData.role,
        jobData.level,
        ...(jobData.languages || []),
        ...(jobData.tools || [])
    ];
    const tagsListLowercase = tagsList.map(t => t && t.toLowerCase());
    const passesFilter = !filterTags.length || filterTags.every(tag => (
        tagsListLowercase.includes(tag && tag.toLowerCase())
    ));

    if (!passesFilter) {
        return '';
    }

    const tagsString = tagsList.reduce((acc, currentTag) => {
       const activeClass = (filterTags.includes(currentTag) && TAG_ACTIVE_CLASS) || '';

        return acc + getTagHTML(currentTag, `${TAG_CLASS} ${activeClass}`);
    }, '');

    return jobListingHTML.replace(JOB_TAGS_PLACEHOLDER, tagsString);
};

function toggleClass(el, className) {
    if (el.classList.contains(className)) {
        el.classList.remove(className);

        return;
    }
    
    el.classList.add(className);
}

function getSearchBarTags(tagValue, searchContentEl) {
    let searchBarTags = Array.from(searchContentEl.children)
        .map(node => node.innerHTML && node.innerHTML.trim())
        .filter(tag => !!tag);

    if (searchBarTags.includes(tagValue)) {
        searchBarTags = searchBarTags.filter(tag => tag !== tagValue);
    } else {
        searchBarTags = [...searchBarTags, tagValue];
    }

    return searchBarTags;
}

function setJobsListings(filterTags) {
    const jobsListingsHTML = jobsListings.reduce((acc, currentListing) => {
        return acc + getJobListingHTML(currentListing, filterTags);
    }, '');
    
    document.getElementById('jobs').innerHTML = jobsListingsHTML;
}

function displaySearchWrapper(display = false) {
    const searchWrapper = document.getElementById('filterContainer');
    const spanElement = searchWrapper.querySelectorAll('span');
    spanElement.forEach(span => {
        span.classList.add(CLOSE_TAG_CLASS); 
    });
    
    if (display) {
    searchWrapper.classList.remove('hidden')
        searchWrapper.classList.add('flex');
        return;
    }
    searchWrapper.classList.add('hidden');
    searchWrapper.classList.remove('flex');
}

function setSearchbarContent(searchContentEl, tags) {
    searchContentEl.innerHTML = tags.reduce((acc, currentTag) => {
        return acc + getTagHTML(currentTag);
    }, '');
}

function resetState(searchContentEl) {
    searchContentEl.innerHTML = '';

    setJobsListings();
    displaySearchWrapper(false);
    toggleClass(targetEl, TAG_ACTIVE_CLASS);
}

window.addEventListener('click', (event) => {
    const targetEl = event.target;
    const targetText = targetEl.innerHTML.trim();
    const searchContentEl = document.getElementById('tabletContainer');
    const searchBarTags = getSearchBarTags(targetText, searchContentEl);

    if (targetEl.id === 'clearButton' || !searchBarTags.length) {
        resetState(searchContentEl);

        return;
    }

    if (![TAG_CLASS, CLOSE_TAG_CLASS].some(c => targetEl.classList.contains(c))) {
        return;
    }
    // if (!targetEl.classList.contains(TAG_CLASS)) {
    //     return;
    // }

    setSearchbarContent(searchContentEl, searchBarTags);
    toggleClass(targetEl, TAG_ACTIVE_CLASS);
    displaySearchWrapper(searchBarTags.length > 0);
    setJobsListings(searchBarTags);
});
setJobsListings();