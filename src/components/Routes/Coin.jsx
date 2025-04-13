import React from "react";

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import axios from 'axios';

import '../Routes/Coin.scss';

import DOMPurify from "dompurify";

const Coin = () => {
    const params = useParams();
    const [coin, setCoin] = useState([]);
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

    useEffect(()=>{
        axios.get(url).then((response)=> {
            setCoin(response.data);
        }).catch((error) => {
            console.log(error);
        });

    }, [])

    return ( 
        <div>
            <div className="coinBase">
                <div className="coin-info">
                    {coin.image ? <img src={coin.image.small} alt="" /> : null}
                    <h1>{coin.name}</h1>
                    {coin.symbol ? <p>{coin.symbol.toUpperCase()}</p> : null}
                </div>
                <div className="coin-info">
                    <div className="coin-rank">
                        <span className="coin-rank-btn">Rank # {coin.market_cap_rank}</span>
                        {coin.market_data ?. current_price ? <h1>${parseInt(coin.market_data.current_price.usd).toLocaleString()}</h1> : null}
                    </div>
                </div>
                <div className="coin-info">
                    <table >
                        <thead>
                            <tr>
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th>14d</th>
                                <th className="hide-mobile">30d</th>
                                <th className="hide-mobile">1yr</th>
                            </tr>                                                      
                       
                        </thead>
                        <tbody>
                            <tr>
                                <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(3)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency?<p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(3)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_7d_in_currency?<p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(3)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_14d_in_currency?<p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(3)}%</p> : null}</td>
                                <td className="hide-mobile">{coin.market_data?.price_change_percentage_30d_in_currency?<p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(3)}%</p> : null}</td>
                                <td className="hide-mobile">{coin.market_data?.price_change_percentage_1y_in_currency?<p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(3)}%</p> : null}</td>
                            </tr>   

                        </tbody>
                    </table>
                </div>
                <div className="coin-info">
                    <div className="coin-stats">
                        <div className="left">
                            <div className="coin-t">
                                <h4>24 Hour Low</h4>
                                {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
                                
                            </div>
                            <div className="coin-t">
                                <h4>24 Hour High</h4>
                                {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}
                                
                            </div>
                            <div className="coin-t">
                                <h4>Marketing Cap</h4>
                                {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}                                
                            </div>
                            <div className="coin-t">
                                <h4>Circulating Supply</h4>
                                {coin.market_data ? <p>{coin.market_data.circulating_supply.toLocaleString()}</p> : null}    
                                
                            </div>
                        </div>
                      
                    </div>
                </div>
                <div className="coin-info">
                    <div className="coin-about">
                        <h4>About</h4>
                        <p dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(coin.description ? coin.description.en : '')
                        }}></p>
                    </div>
                </div>

            </div>
        </div>
    );
//     import React, { useState, useEffect, useRef } from 'react';
// import Card from '../../images/card.jpg';

// const Rootcard = () => {
//   const [links, setLinks] = useState([]);

//   useEffect(() => {
//     const username = 'mike';
//     const password = 'rootscard';

//     const basicAuth = 'Basic' + btoa(username + ':' + password);
//     // Fetch data from the API
//     fetch('https://api.therootshive.com/v3/rootscard/rootscardLinks', {
//       method: 'POST',
//       mode: 'no-cors',
//       headers: {
//         'Authorization': basicAuth
//       }
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setLinks(data); // Set the fetched data into state
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   // const specificDate = new Date(2023, 0, 1);
//   return (
//     <div className='container py-2 col-12 col-md-6 h-auto border bg-gray' style={{background: '#f6f6f6'}}>
//       <div className='d-flex px-3 justify-content-between'>
//         <ul className="nav nav-underline" id="myTab" role="tablist">
//           <li className="nav-item" role="presentation">
//             <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Profile</button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Community</button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
//           </li>
//         </ul>
//         <div><button type="button" className="btn btn-outline-dark rounded-pill">Login</button></div>
//       </div>
//       <div className="tab-content" id="myTabContent">
//         <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
//         <div className="row py-2 gy-2">
//       <div className="col-lg-12">
//         <div className="card rounded-4">
//           <div className="card-body">
//           <div className='d-flex justify-content-between'>
//             <ul className="nav nav-underline">Hamburger</ul>
//             <button type="button" className="btn btn-dark rounded-pill">Ask Ola</button>
//           </div>
//             <h5 className="card-title">Big Mike</h5>
//             <p className="card-text">Basic created on 2022-03-11</p>
//           </div>
//         </div>
//       </div>
//       <div className="col-lg-12">
//         <div className="card rounded-4 bg-dark text-white">
//           <div className="card-body">
//             <h5 className="card-title">About</h5>
//             <p className="card-text col-12 col-md-7">I am Oguntolu Emmanuel. My expertise lies in designing and implementing...</p>
//             <div>
//               <button 
//                 className="btn btn-light text-dark rounded-5" 
//                 type="button" 
//                 data-bs-toggle="offcanvas" 
//                 data-bs-target="#offcanvasBottom" 
//                 aria-controls="offcanvasBottom"
//               >
//                 Read More
//               </button>

//               <div 
//                 className="offcanvas offcanvas-bottom col-12 col-md-6 mx-auto"
//                 style={{height: '90vh'}} 
//                 tabIndex="-1" 
//                 id="offcanvasBottom" 
//                 aria-labelledby="offcanvasBottomLabel"
//               >
//                 <div className="offcanvas-header">
//                   <h5 className="offcanvas-title" id="offcanvasBottomLabel">About Section</h5>
//                   <button 
//                     type="button" 
//                     className="btn-close" 
//                     data-bs-dismiss="offcanvas" 
//                     aria-label="Close"
//                   ></button>
//                 </div>
//                 <div className="offcanvas-body  large">
//                   <p>I am Oguntolu Emmanuel. My expertise lies in designing and implementing captivating user interfaces, ensuring optimal performance and a delightful user experience across various devices and browsers. Besides, I make web interactive with web animations.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="col-lg-12">
//         <div className="card">
//           <div className="card-body">
//             <h5 className="card-title">Links</h5>
//           </div>
//         </div>
//       </div>
//       <div className="col-lg-12">
//         <div className="card rounded">
//           <div className="card-body justify-content-between d-flex align-items-center">
//             <div className='d-flex gap-2 align-items-center'>
//               <div style={{height: '40px', width: '40px', justifyContent: 'center', alignItems: 'center', border: '2px solid black', borderRadius: '50%', background: '#ededed', display: 'flex'}}>E</div>
//               <div className='flex-column'>
//                 <h5 className="card-title">Mike</h5>
//                 <h6>null</h6>
//               </div>
//             </div>
//             <h6>Hamburger</h6>
//           </div>
//         </div>
//       </div>
//       <div className='col-lg-12'>
//       <div className="card">
//         <img src={Card} className="card-img-top img-fluid" alt="..."/>
//         <div className="card-body">
//           <h5 className="card-title">Rootshive Card</h5>
//           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" className="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//       </div>
//       </div>
//         </div>
//         <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">COMMUNITY</div>
//         <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">CONTACT</div>
//       </div>

//     </div>
//   )
// }

// export default Rootcard
}

export default Coin;