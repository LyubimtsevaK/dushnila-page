import React from 'react';
import '../App.css';

const Cards = () => {

    return (
        <div className='container'>
            <div className='cards'>
                <h1 className='cardsText'>Дней без душноты 0</h1>
                <button className='buttCards'>
                    История
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                        <path d="M24.5 14.2521L18.6667 8.41879M24.5 14.2521L18.6667 20.0855M24.5 14.2521H3.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className='logoCards'>
                <svg className='logoBack' width="270" height="269" viewBox="0 0 270 269" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M154.182 307C239.335 307 308.364 238.276 308.364 153.5C308.364 68.7243 239.335 0 154.182 0C69.0295 0 0 68.7243 0 153.5C0 238.276 69.0295 307 154.182 307Z" fill="url(#paint0_linear_2_78)"/>
                    <defs>
                        <linearGradient id="paint0_linear_2_78" x1="60.7735" y1="33.2128" x2="280.017" y2="244.001" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#ED4A27"/>
                            <stop offset="1" stop-color="#EF9A3E"/>
                        </linearGradient>
                    </defs>
                </svg>
                <svg className='logoFront' width="256" height="223" viewBox="0 0 256 223" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M202.44 135.323L180.211 141.807L164.607 95.497C164.607 95.497 221.959 69.6363 239.699 73.195C254.179 76.1003 258.366 104.518 259.416 114.868C261.75 134.132 259.756 153.781 253.295 172.338C243.696 199.901 225.029 223.433 200.316 239.122C175.602 254.81 146.29 261.737 117.127 258.779C87.9641 255.821 60.6588 243.152 39.6333 222.826C18.6081 202.498 5.09462 175.703 1.28133 146.779C-2.53205 117.855 3.57875 88.4968 18.6235 63.4598C33.6683 38.4234 56.7656 19.1742 84.1752 8.83053C111.585 -1.51309 141.699 -2.34542 169.644 6.46831L152.173 61.3243C136.645 56.4264 119.909 56.8889 104.679 62.637C89.4476 68.3851 76.6127 79.0812 68.2529 92.9937C59.8926 106.906 56.4969 123.22 58.6161 139.292C60.7347 155.365 68.2442 170.255 79.9278 181.551C91.6115 192.847 106.784 199.887 122.989 201.53C139.195 203.174 155.483 199.325 169.216 190.606C182.949 181.889 193.323 168.812 198.656 153.495C200.714 147.586 201.975 141.478 202.44 135.323Z" fill="white"/>
                </svg>
            </div>
        </div>
    );
};

export default Cards;