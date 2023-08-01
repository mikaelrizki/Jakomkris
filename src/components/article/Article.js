import './style.css'
import IconPrev from '../../assets/icon/ic_prev.png';
import IconNext from '../../assets/icon/ic_next.png';
import Artikel1 from '../../assets/article/article1.png';
import Artikel2 from '../../assets/article/article2.png';
import Artikel3 from '../../assets/article/article3.png';


const Article = () => {
    return (
        <div>
            <div className="article">
                <div className="title">
                    <h2 className="blue-signature s5">Artikel</h2>
                    <p className="gray">Berikut adalah beberapa artikel kebencanaan yang dapat Anda baca!</p>
                </div>
                <div className="action">
                    <div id="left" className="btnleft" onclick="back()"><img src={IconPrev} width="20px" height="20px" draggable="false" /></div> 
                    <div id="right" className="btnright" onclick="next()"><img src={IconNext} width="20px" height="20px" draggable="false" /></div> 
                </div>
            </div>
            <div className='content'>
                <div className="wrapper">
                    <ul className="carousel">
                        <li className="card">
                            <div className="img"><img src={Artikel1} draggable="false" /></div>
                            <h2>Cara Mitigasi Bencana Alam Angin Topan ...</h2>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </li>
                        <li className="card">
                            <div className="img"><img src={Artikel2} draggable="false" /></div>
                            <h2>Hal yang Perlu Dilakukan Ketika Terjadi ...</h2>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </li>
                        <li className="card">
                            <div className="img"><img src={Artikel3} draggable="false" /></div>
                            <h2>Banjir? Jangan Panik! Lakukan beberapa ...</h2>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Article