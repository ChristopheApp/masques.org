import React from 'react';
import '../App.css';
import { Row, Col, Card} from 'antd';
import 'antd/dist/antd.css';
import Nav from './Nav'


function ScreenHome() {
  const { Meta } = Card;

  return (
   <div>
 <Nav/>

<body>

<h1 id="title">Masques personnalisés</h1>

<h3 id="choix">Entreprises | Collectivités | Grand Public</h3>

<div className="card">
<div  style={{display:'flex',justifyContent:'center'}}>
                      <Card
                        style={{  
                          width: 300, 
                          margin:'15px', 
                          display:'flex',
                          flexDirection: 'column',
                          justifyContent:'space-between' }}
                        cover={
                        <img
                            alt="article"
                            src='./assets/Mask-6.jpg'
                        />
                         }
                         >
                         <Meta title="Masque" description="photo" />           
                      </Card>
                      <Card
                        style={{  
                          width: 300, 
                          margin:'15px', 
                          display:'flex',
                          flexDirection: 'column',
                          justifyContent:'space-between' }}
                        cover={
                        <img
                            alt="article"
                            src='./assets/Mask-6.jpg'
                        />
                         }
                         >
                         <Meta title="Masque" description="photo" />           
                      </Card>
                      <Card
                        style={{  
                          width: 300, 
                          margin:'15px', 
                          display:'flex',
                          flexDirection: 'column',
                          justifyContent:'space-between' }}
                        cover={
                        <img
                            alt="article"
                            src='./assets/Mask-6.jpg'
                        />
                         }
                         >
                         <Meta title="Masque" description="photo" />           
                      </Card>
                      <Card
                        style={{  
                          width: 300, 
                          margin:'15px', 
                          display:'flex',
                          flexDirection: 'column',
                          justifyContent:'space-between' }}
                        cover={
                        <img
                            alt="article"
                            src='./assets/Mask-6.jpg'
                        />
                         }
                         >
                         <Meta title="Masque" description="photo" />           
                      </Card>
                      <Card
                        style={{  
                          width: 300, 
                          margin:'15px', 
                          display:'flex',
                          flexDirection: 'column',
                          justifyContent:'space-between' }}
                        cover={
                        <img
                            alt="article"
                            src='./assets/Mask-6.jpg'
                        />
                         }
                         >
                         <Meta title="Masque" description="photo" />           
                      </Card>
                      <Card
                        style={{  
                          width: 300, 
                          margin:'15px', 
                          display:'flex',
                          flexDirection: 'column',
                          justifyContent:'space-between' }}
                        cover={
                        <img
                            alt="article"
                            src='./assets/Mask-6.jpg'
                        />
                         }
                         >
                         <Meta title="Masque" description="photo" />           
                      </Card>
  </div>
</div>
</body>
</div>
  );
}

export default ScreenHome;
