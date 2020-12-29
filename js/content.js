// On page load, this message will trigger the background script to allow popup on LinkedIn profile page
window.chrome.runtime.sendMessage({ "message": "activate_icon" });

// After scrape button press in popup, page will be scraped and sends the info back to popup
if (!window.chrome.runtime.onMessage.hasListeners()) {
  window.getInfo = () => {
    let name = document.querySelector('.t-24').textContent.trim();
    let mostRecentExp;
    let company;
    let errorMessage;
    let headerExperience = document.querySelector('a[data-control-name="position_see_more"] > span');
    if (!headerExperience) {
      let experience = document.getElementById("experience-section");
      if (!experience) {
        errorMessage = "We're sorry, we could not find a current company for this person";
      } else {
        mostRecentExp = experience.querySelector('ul > li:first-child');
        let dateRange = mostRecentExp.querySelector('.pv-entity__date-range > span:nth-child(2)').textContent;
        if (!dateRange.includes('Present')) {
          errorMessage = "We're sorry, we could not find a current company for this person";
        } else {
          let companyEl = mostRecentExp.querySelector('p.pv-entity__secondary-title') || mostRecentExp.querySelector('.pv-entity__company-details span:nth-child(2)'),
            child = companyEl.firstChild,
            texts = [];

          while (child) {
            if (child.nodeType === 3) {
              texts.push(child.data);
            }
            child = child.nextSibling;
          }
          company = texts.join("").trim();
        }
      }
    } else {
      company = headerExperience.textContent.trim();
    };
    return {
      name,
      company,
      errorMessage
    }
  };
  
  window.chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if (req.message === 'scrape') {
      const info = window.getInfo();
      window.chrome.runtime.sendMessage({
        message: "info_response",
        name: info.name,
        company: info.company,
        error: info.errorMessage
      });
    };
  });
}

window.getInfo = () => {
  let name = document.querySelector('.t-24').textContent.trim();
  let mostRecentExp;
  let company;
  let errorMessage;
  let experience = document.getElementById("experience-section");
  if (!experience) {
    let headerExperience = document.querySelector('a[data-control-name="position_see_more"] > span');
    if (!headerExperience) {
      errorMessage = "We're sorry, we could not find a current company for this person";
    } else {
      company = headerExperience.textContent.trim();
    }
  } else {
    mostRecentExp = experience.querySelector('ul > li:first-child');
    let dateRange = mostRecentExp.querySelector('.pv-entity__date-range > span:nth-child(2)').textContent;
    if (!dateRange.includes('Present')) {
      errorMessage = "We're sorry, we could not find a current company for this person";
    } else {
      let companyEl = mostRecentExp.querySelector('p.pv-entity__secondary-title') || mostRecentExp.querySelector('.pv-entity__company-details span:nth-child(2)'),
        child = companyEl.firstChild,
        texts = [];

      while (child) {
        if (child.nodeType === 3) {
          texts.push(child.data);
        }
        child = child.nextSibling;
      }
      company = texts.join("").trim();
    }
  };
  return {
    name,
    company,
    errorMessage
  }
};