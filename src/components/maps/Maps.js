import './style.css'
import IconMove from '../../assets/icon/ic_next.png';

const Maps = () => {
    return (
        <div id="maps">
            <div className="peta">
                <div className="title">
                    <h2 className="blue-signature s5">Peta Gereja</h2>
                    <p className="gray">Berikut adalah sebaran Gereja di Indonesia untuk Siaga Bencana!</p>
                </div>
                <div className="action">
                    <p className="gray">Lihat Selengkapnya!</p>
                    <a href="https://maps.google.com/maps?ll=-7.786049,110.378376&z=17&t=m&hl=id&gl=ID&mapclient=embed&cid=13191267989300737806">
                        <div id="next" className="btnright"><img src={IconMove} width="20px" height="20px" alt="" aria-hidden="true" draggable="false" /></div> 
                    </a>
                </div>
            </div> 
            <div id="gmaps">
                <iframe title='Google Maps Dummy' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2155.4031794659472!2d110.37702260283012!3d-7.78696807133443!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5828f6fb7ef7%3A0xb710cc588f40770e!2sUniversitas%20Kristen%20Duta%20Wacana!5e0!3m2!1sid!2sid!4v1690455252182!5m2!1sid!2sid" width="1300" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>    
    )
}

export default Maps