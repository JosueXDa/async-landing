// const API = 'https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100';
// const content = null || document.getElementById('Content');
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '49fac37b60mshd8ed9abbd39bdaap1ef4a0jsn29eaaf05d9c6',
// 		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
// 	}
// };

// async function fetchData(url){
//     const response = await fetch(url, options);
//     const data = await response.json();
//     return data;
// }

// (async () => {
//     try{
//         const playlist = await fetchData(API);
//         let view = `
//             ${playlist.items.map( rola => `
//                 <div class="group relative">
//                 <div
//                 class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
//                 <img src="${rola.track.album.images}" alt="${rola.track.type}" class="w-full">
//                 </div>
//                 <div class="mt-4 flex justify-between">
//                 <h3 class="text-sm text-gray-700">
//                     <span aria-hidden="true" class="absolute inset-0"></span>
//                     ${rola.track.name}
//                 </h3>
//                 </div>
//                 </div>
//             `).slice(0,4).join('')} 
//         `;
//         content.innerHTML = view;
//     } catch(err){
//         console.log(err);
//         alert('Error: ' + err);
//     }
// })();

const url = 'https://spotify23.p.rapidapi.com/playlist_tracks/?id=7ahuxPrUlRjIViwVZt3bMG&offset=0&limit=100';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '49fac37b60mshd8ed9abbd39bdaap1ef4a0jsn29eaaf05d9c6',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};


async function fetchData(url){
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

 (async () => {
     try{
         const playlist = await fetchData(url);
         console.log(playlist);
         let view = `
            ${playlist.items.map(rola => {
                const track = rola.track;
                const album = track.album || {}; // default to an empty object if undefined
                const images = album.images || []; // default to an empty array
                const imageSrc = images.length > 0 ? images[0].url : ''; // ensure the URL exists
                return `
                    <div class="group relative">
                    <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${imageSrc}" alt="${track.type}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${track.name}
                    </h3>
                    </div>
                    </div>
                `;
            }).slice(0, 10).join('')} 
        `;
         content.innerHTML = view;
     } catch(err){
         console.log(err);
         alert('Error: ' + err);
     }
 })();