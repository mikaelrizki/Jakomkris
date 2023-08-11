import React, { useEffect } from 'react';
import './style.css'
import IconPrev from '../../assets/icon/ic_prev.png';
import IconNext from '../../assets/icon/ic_next.png';
import Artikel1 from '../../assets/article/article1.png';
import Artikel2 from '../../assets/article/article2.png';
import Artikel3 from '../../assets/article/article3.png';

const Article = () => {
    useEffect(() => {
        const wrapper = document.querySelector(".wrapper");
        const carousel = document.querySelector(".carousel");
        const firstCardWidth = carousel.querySelector(".card").offsetWidth;
        const arrowBtns = document.querySelectorAll(".action div");
        const carouselChildrens = [...carousel.children];

        let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

        // Get the number of cards that can fit in the carousel at once
        let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

        // Insert copies of the last few cards to beginning of carousel for infinite scrolling
        carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });

        // Insert copies of the first few cards to end of carousel for infinite scrolling
        carouselChildrens.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");

        // Add event listeners for the arrow buttons to scroll the carousel left and right
        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
            });
        });

        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add("dragging");
            // Records the initial cursor and scroll position of the carousel
            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
        }

        const dragging = (e) => {
            if(!isDragging) return; // if isDragging is false return from here
            // Updates the scroll position of the carousel based on the cursor movement
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        }

        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        }

        const infiniteScroll = () => {
            // If the carousel is at the beginning, scroll to the end
            if(carousel.scrollLeft === 0) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
                carousel.classList.remove("no-transition");
            }
            // If the carousel is at the end, scroll to the beginning
            else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove("no-transition");
            }

            // Clear existing timeout & start autoplay if mouse is not hovering over carousel
            clearTimeout(timeoutId);
            if(!wrapper.matches(":hover")) autoPlay();
        }

        const autoPlay = () => {
            if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
            // Autoplay the carousel after every 2500 ms
            timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 4000);
        }
        autoPlay();

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);
        carousel.addEventListener("scroll", infiniteScroll);
        wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
        wrapper.addEventListener("mouseleave", autoPlay);
    }, []); // Empty dependency array ensures the effect runs only once after mounting

    return (
        <div id="article">
            <div className="article">
                <div className="title">
                    <h2 className="blue-signature s5">Artikel</h2>
                    <p className="gray">Berikut adalah beberapa artikel kebencanaan yang dapat Anda baca!</p>
                </div>
                <div className="action">
                    <div id="left" className="btnleft" onclick="back()"><img src={IconPrev} width="20px" height="20px" draggable="false" alt="" aria-hidden="true" /></div> 
                    <div id="right" className="btnright" onclick="next()"><img src={IconNext} width="20px" height="20px" draggable="false" alt="" aria-hidden="true" /></div> 
                </div>
            </div>
            <div className='content'>
                <div className="wrapper">
                    <ul className="carousel">
                        <li className="card">
                            <div className="img"><img src={Artikel1} draggable="false" alt="Cover Artikel 1" /></div>
                            <h2>Cara Mitigasi Bencana Alam Angin Topan ...</h2>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </li>
                        <li className="card">
                            <div className="img"><img src={Artikel2} draggable="false" alt="Cover Artikel 2" /></div>
                            <h2>Hal yang Perlu Dilakukan Ketika Terjadi ...</h2>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </li>
                        <li className="card">
                            <div className="img"><img src={Artikel3} draggable="false" alt="Cover Artikel 3" /></div>
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