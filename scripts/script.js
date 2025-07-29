import { apps } from "./data.js";

const appsGridElement = document.querySelector('.apps-grid');


apps.forEach((apps)=>{
  let fullStarsHTML = '';
  let emptyStarsHTML = '';
     for (let i = 0; i < apps.rating; i++ ) {
                fullStarsHTML += `<i class="fas fa-star star-full"></i>`
              }

      if (apps.rating < 6) { 
        const emptyStars = 6 - apps.rating
        for (let i = 0; i < emptyStars; i++ ) {
          emptyStarsHTML += ` <i class="fas fa-star star-empty"></i>`
        }
      }

      const ratingsHTML = fullStarsHTML + emptyStarsHTML;

    const appCardElement = document.createElement('div')
    appCardElement.setAttribute("class", "app-card flex-row")

    appCardElement.innerHTML = 
    `
    <div class="app-thumbnail" style="background: url('${apps.Image}') ;"></div>
          <div class="app-details">
            <h2 id="app-name">${apps.appName}</h2>
            <p id="app-developer">${apps.appcompany}</p>
            <div class="star-rating flex-row">${ratingsHTML}</div>
            <button>INSTALL APP</button>
    </div>
    `
    appsGridElement.appendChild(appCardElement)

})