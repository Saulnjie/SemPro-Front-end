import { getAllAlbums } from "./data.js";
import { renderAlbum } from "./album.js";

getAllAlbums().then(albums => albums.forEach(renderAlbum))

// export const featuredHTML = (getAllAlbums, albums) => {
//     getAllAlbums.forEach(({ Albumcover, Featured, ArtistName, id }) => {
//       if (Featured === true) {
//         return (document.querySelector(albums).innerHTML += `
//             <div class="col-sm-4 col-md-4">
//           <div class="featured__card">
//             <a class="" href="details.html?id=${id}">
//               <img class="featured__img" src="${Albumcover}">
//               <h5 class="featured__heading">${ArtistName}</h5>
//             </a>
//           </div>
//             </div>`);
//       }
//     });
//   };

    
    // const renderFeatured =(featured) {
    //     let renderAllFeatured;
    //     if (featured === true){
    //         renderAllFeatured = (document.querySelector(albums).innerHTMl += renderFeatured);
    //     } else {
    //         renderAllFeatured = (document.querySelector(albums).innerHTMl += ``);
    //     }

    //     return renderAllFeatured;
    //     console.log(renderAllFeatured)
    // };
    