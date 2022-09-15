const Card = (props) => {
  return (
    <>
    <div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-sm">Gennaio</a> 
  <a href="#item2" className="btn btn-sm">Febbraio</a> 
  <a href="#item3" className="btn btn-sm">Marzo</a> 
  <a href="#item4" className="btn btn-sm">Aprile</a>
  <a href="#item5" className="btn btn-sm">Maggio</a>
  <a href="#item6" className="btn btn-sm">Giugno</a>
  <a href="#item6" className="btn btn-sm">Luglio</a>
  <a href="#item6" className="btn btn-sm">Agosto</a>
  <a href="#item6" className="btn btn-sm">Settembre</a>
  <a href="#item6" className="btn btn-sm">Ottobre</a>
  <a href="#item6" className="btn btn-sm">Novembre</a>
  <a href="#item6" className="btn btn-sm">Dicembre</a>

</div>
	  <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full h-full">
  <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
  </div>
</div> 

<div>{console.log(props.invoices.invoices[0])}</div>
<div>{props.invoices.invoices[0].company_name}</div>

<div>hello</div>

</>
  );
};

export default Card;
