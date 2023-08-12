import './aboutUs.css'
import logoJakomkris from '../../assets/image/logo_jakomkris.png'
import allLogo from '../../assets/image/all_logo.png'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import desendo from '../../assets/profile/desendo.jpg'
import ebentera from '../../assets/profile/Ebentera.jpg'
import hezkiel from '../../assets/profile/Hezkiel.jpg'
import jesslyn from '../../assets/profile/Jesslyn.jpeg'
import nafarel from '../../assets/profile/nafarel.jpg'
import stevani from '../../assets/profile/Stevani.jpeg'

export default function AboutUs() {
    return (
        <div id='aboutContainer'>
            <div className='atas'>
                <div>
                    <h2 className='atasTitle'>ABOUT US</h2>
                    <p>JAKOMKRIS PBI (Jaringan Komunitas Kristen Untuk Penanggulangan Bencana di Indonesia) didirikan pada 29 September 2017 sebagai saran bagi gereja, lembaga pelayanan, dan komunitas Kristen untuk turut berperan dalam pengurangan resiko bencana. Kegiatan pelatihan, penguatan jaringan, serta gerakan respon terhadap bencana yang terjadi di Indonesia dilakukan secara khusus bagi gereja-gereja yang berdiri di wilayah rawan bencana seperti banjir, tanah longsor, gempa bumi, gunung meletus, tsunami, hingga kebakaran hutan dan lahan melalui pendekatan Church and Community Transformation Resilience Approach.</p>
                </div>
            </div>
            <div className='tengah'>
                <img src='https://static.republika.co.id/uploads/images/inpicture_slide/petugas-gabungan-dari-tni-basarnas-polri-relawan-dan-warga-_160621162452-849.jpg' alt='' className='gmbr'></img>
                <div id='misi'>
                    <h2>MISI</h2>
                    <ul>
                        <li>
                            Memobilisasi sumber daya, kapasitas gereja, dan lembaga untuk kegiatan penanggulangan/pengurangan resiko bencana.
                        </li>
                        <li>
                            Memfasilitasi penyebarluasan informasi tentang pengurangan resiko bencana hingga warga jemaat.
                        </li>
                        <li>
                            Melakukan advokasi kepada pemerintah dan para pihak dalam perihal pengurangan resiko bencana.
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bawah'>
                <img src='https://cloud.jpnn.com/photo/jatim/news/normal/2021/12/07/petugas-ketika-evakuasi-korban-erupsi-gunung-semeru-712-5ixm-iieb.jpg' alt='' className='gmbr'></img>
                <div>
                    <h2>VISI</h2>
                    <h4>“Terwujudnya kerja sama dan sinergi diantara komunitas Kristiani melalui gereja dan Lembaga Kemanusiaan berbasis iman Kristiani untuk membangun masyarakat tangguh dan tanggap bencana.”</h4>
                </div>
            </div>
            <div className='credit'>
                <img src={allLogo} alt='' id='partnership'></img>
                <h2>THE TEAM</h2>
                <div>
                    <Carousel id='carousel'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ebentera}
                                alt="Ebentera"
                            />
                            <Carousel.Caption>
                                <h3>Ebentera Santosa</h3>
                                <p>Frontend</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={hezkiel}
                                alt="Hezkiel"
                            />
                            <Carousel.Caption>
                                <h3>Hezkiel Siregar</h3>
                                <p>Frontend</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={desendo}
                                alt="Desendo"
                            />
                            <Carousel.Caption>
                                <h3>Desendo Imanuel</h3>
                                <p>Backend</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={nafarel}
                                alt="Nafarel"
                            />
                            <Carousel.Caption>
                                <h3>Nafarel Triyoga</h3>
                                <p>Backend</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={jesslyn}
                                alt="Jesslyn"
                            />
                            <Carousel.Caption>
                                <h3>Jesslyn Septhia</h3>
                                <p>-</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={stevani}
                                alt="Stevani"
                            />
                            <Carousel.Caption>
                                <h3>Stevani Dwi Utomo</h3>
                                <p>-</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}