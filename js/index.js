 // Preload images
 function preloader() {
     const imagesList = [
           "./img/wall.jpg",
           "./img/lightbulb.jpg",
           "./img/turbine.jpg"
        ];
     const images = [];
     for (let i = 0; i < imagesList.length; i++) {
         images[i] = new Image();
         images[i].src = imagesList[i];
     }
     console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
 };
 window.addEventListener("load", preloader);


 /* buttons to toggle through */

 const btns = document.querySelectorAll("button");

 /* object of resources */

 const resources = {
     wall: {
         headingContent: "Trombe Wall",
         bodyText: "<p>A Trombe wall is a passive solar building design where a wall is built on the winter sun side of a building with a glass external layer and a high heat capacity internal layer separated by a layer of air. Light close to UV in the electromagnetic spectrum passes through the glass almost unhindered then is absorbed by the wall that then re-radiates in the far infrared spectrum which does not pass back through the glass easily, hence heating the inside of the building. Trombe walls are commonly used to absorb heat during sunlit hours of winter then slowly release the heat over night.</p><em>Learn more at <a href='https://en.wikipedia.org/wiki/Trombe_wall'>Wikipedia</a> </em>",
         imgUrl: "./img/wall.jpg",
         imgAlt: "Trombe Wall"
     },
     light: {
         headingContent: "LED Light Bulbs",
         bodyText: "<p>A LED lamp or LED light bulb is an electric light for use in light fixtures that produces light using light-emitting diode (LED). LED lamps have a lifespan and electrical efficiency which are several times greater than incandescent lamps, and are significantly more efficient than most fluorescent lamps,[1][2][3] with some chips able to emit more than 300 lumens per watt (as claimed by Cree and some other LED manufacturers)</p><em>Learn more at <a href=https://en.wikipedia.org/wiki/LED_lamp>Wikipedia</a></em>",
         imgUrl: "img/lightbulb.jpg",
         imgAlt: "LED Lightbulb"
     },
     wind: {
         headingContent: "Small Scale Wind Turbine",
         bodyText: "<p>Smaller scale turbines for residential scale use are available. Their blades are usually 1.5 to 3.5 metres (4 ft 11 in–11 ft 6 in) in diameter and produce 1-10 kW of electricity at their optimal wind speed.[1] Some units have been designed to be very lightweight in their construction, e.g. 16 kilograms (35 lb), allowing sensitivity to minor wind movements and a rapid response to wind gusts typically found in urban settings and easy mounting much like a television antenna. It is claimed, and a few are certified, as being inaudible even a few feet (about a metre) under the turbine.</p><em> Learn more at <a href=https://en.wikipedia.org/wiki/Small_wind_turbine> Wikipedia</a> </em>",
         imgUrl: "./img/turbine.jpg",
         imgAlt: "Small Scale Turbine"
     }
 };

 /* containers that will be changing dynamically */

 const heading = document.getElementById("title");
 const img = document.getElementById("img");
 const content = document.getElementById("content");


 /* Function to perform on click */

 function handleSelection(ev) {

     /* Remove "active-button from first btn */
     for (let i = 0; i < btns.length; i++) {
         if (btns[i].hasAttribute("id")) {
             btns[i].removeAttribute("id");
         }
     }

     /* put active-button on the btn that is clicked */
     let currentBtn = ev.target;

     if (currentBtn.textContent === "Trombe Wall") {
         currentBtn.setAttribute("id", "active-button");
     }
     if (currentBtn.textContent === "LED Lights") {
         currentBtn.setAttribute("id", "active-button");

     }
     if (currentBtn.textContent === "Small Wind Turbine") {
         currentBtn.setAttribute("id", "active-button");

     }

     /* Change content dynamically*/

     if (currentBtn.textContent === "Trombe Wall") {
         heading.innerHTML = `${resources.wall.headingContent}`;
         img.innerHTML = `<img src="${resources.wall.imgUrl} "alt="${resources.wall.imgAlt}">`;
         content.innerHTML = `${resources.wall.bodyText}`
     } else if (currentBtn.textContent === "LED Lights") {
         heading.innerHTML = `${resources.light.headingContent}`;
         img.innerHTML = `<img src="${resources.light.imgUrl} "alt="${resources.light.imgAlt}">`;
         content.innerHTML = `${resources.light.bodyText}`
     } else {
         heading.innerHTML = `${resources.wind.headingContent}`;
         img.innerHTML = `<img src="${resources.wind.imgUrl} "alt="${resources.light.imgAlt}">`;
         content.innerHTML = `${resources.wind.bodyText}`
     }
 }
 /*click event */
 for (let btn of btns) {
     btn.addEventListener("click", handleSelection);

 }
