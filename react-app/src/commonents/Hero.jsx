import "./Hero.css"
export default function Hero(){
    return(
    <div className="Hero">
            <div className="hero-material">

                <div className="hero-content">
                <h1><strong>
                   YOUR FEET DESERVE  THE BEST 
                    </strong>
                </h1>
              <i><p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES</p></i>  
                </div>

                <div className="hero-button">
                    <button style={{padding:"10px",width:"200px"}}>Shop Now</button>
                    <button style={{padding:"10px",width:"200px"}}>Category</button>
                </div>
                <div className="img">
                    
                Also Available on :
                <i style={{fontSize:"30px"}} class="fa-brands fa-uniregistry"></i>
                <i style={{fontSize:"30px"}} class="fa-brands fa-amazon"></i>
                </div>


            </div>


    
            <div className="hero-img">
                <img src="/public/shoe1.avif" alt="" />
            </div>
    </div>
    
    );
}