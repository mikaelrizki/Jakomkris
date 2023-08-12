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
        </div>    
    )
}

export default Maps