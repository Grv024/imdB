let cl=console.log();

const insertvalue = document.getElementById("insert");

function netimg(array){
	let result= "";
	array.forEach(ele => {
		result+=`
		<div class="col-md-3">
		<figure class="fig">
		  <img src="${IMG_path}${ele.poster_path}"  alt="">
   
		<figcaption class="ficaption p-2">
		  
		  <div class="row align-item-center ">
			<div class="col-md-8 text-white">
			  <h5>${ele.title}</h5>             
			</div>
			<div class="col-md-4 text-white">
			  <p>${ele.vote_average}</p>
			</div>
		  </div>
		</figcaption>
		<div class="overview">
		  <h6>overview</h6>
		  <p>
		  ${ele.overview}
		  </p>
		</div>
	  </figure>
	  </div>
		`;

	});
console.log(result);
insertvalue.innerHTML=result;

}; 
netimg(results)












