
import  "./Footer.css"
export default function Footer(){
    return(
        <div>
            <div className="Upper">
            <div className="Lower">
                <img style={{width:"80px"}} src="/public/nike.png" alt="Nike" />
            </div>
            </div>
            <div className="line"></div>
            <div className="Footer-line">
                <div> <p>© 2025 Nike shoes wearing, Inc. All rights reserved.</p></div>


                <div className="footer-icons"><i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-github"></i></div>
            
            </div>
        </div>
    );
}