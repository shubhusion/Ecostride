import React from 'react';
import './training.css';
import Header from './header';
import Addop from './addop';
import Company from './company';
import Footer from './footer';


const Training = () => {
  const categories = [
    {
      title: 'Carbon Reduction',
      description: 'Carbon reduction is the process of reducing carbon dioxide emissions and minimizing the carbon footprint of human activities. This involves implementing strategies to lower energy consumption, promote renewable energy sources, and adopt sustainable practices.',
      videos: [
        { id: 'rByHiqc0K9k?si=YiI0mGHbaOfaMtfe', title: 'Video 1' },
        { id: 'KdiA12KeSL0?si=8HeSU2PqYFsWHkhY', title: 'Video 2' },
        { id: 'J_iDcKDAwbA?si=SHeS5izXIuTn1lr_', title: 'Video 3' }
      ]
    },
    {
      title: 'Water Conservation',
      description: 'Water conservation aims to reduce water wastage and promote efficient water use. It involves implementing measures such as using water-saving appliances, fixing leaks, and adopting water-efficient practices in agriculture and landscaping.',
      videos: [
        { id: 'oW-iuvCZnNA?si=wmUaXRk12iMnKheK', title: 'Video 4' },
        { id: 'nTcFXJT0Fsc?si=pIAlqbqw4xvJzWTn', title: 'Video 5' },
        { id: 'GVmBWQ7Zrzk?si=xIQm-Rd6gtmE7ZBS', title: 'Video 6' }
      ]
    },
    {
      title: 'Energy Conservation',
      description: 'Energy conservation involves reducing energy consumption and promoting energy efficiency. This includes using energy-saving appliances, optimizing heating and cooling systems, and implementing renewable energy solutions.',
      videos: [
        { id: 's1Bq615xX0Y?si=0PGG83R_TwOCHCuM', title: 'Video 7' },
        { id: 'h72-Kuh02R4?si=GTxujubOyHuVK6bz', title: 'Video 8' },
        { id: 'pY6fAYkscTY?si=BxvGDBFnKWGdw8Kw', title: 'Video 9' }
      ]
    },
    {
      title: 'Sustainable Products',
      description: 'Sustainable products are goods and services that are produced and consumed in a manner that minimizes environmental impact, promotes social responsibility, and ensures economic viability. These products are designed to be resource-efficient, recyclable, and ethically sourced.',
      videos: [
        { id: '4UQebH-Fm8c?si=HZbLwiVcI1SF4iIv', title: 'Video 10' },
        { id: '_e4bkXkeJEI?si=Nl7P4F4Nw_05cM84', title: 'Video 11' },
        { id: 'P8xy-pKe9tg?si=bfLUgRohKkFzLyTH', title: 'Video 12' }
      ]
    },
    {
      title: 'Waste Reduction',
      description: 'Waste reduction involves minimizing the amount of waste generated and maximizing resource recovery through recycling, composting, and reuse. It aims to reduce landfill waste, conserve natural resources, and mitigate environmental pollution.',
      videos: [
        { id: 'PuMGw1olLFI?si=ZO7s1JmiBD-SSy50', title: 'Video 13' },
        { id: 'ishA6kry8nc?si=dPZyy_uenJ99USgH', title: 'Video 14' },
        { id: 'EGzg77rx7Uo?si=HZV5MU9wsd33kNSF', title: 'Video 15' }
      ]
    }
  ];

  return (
    <>
    <Header />
    <Addop />
    <Company />
    <div className="training-container">
      {categories.map(category => (
        <div key={category.title} className="category">
          <h2 className="category-title">{category.title}</h2>
          <p>{category.description}</p>
          <div className="videos">
            {category.videos.map(video => (
              <div key={video.id} className="video">
                <iframe
                  title={video.title}
                  width="360"
                  height="200"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <p>{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <Footer />
    </>
  );
};

export default Training;
