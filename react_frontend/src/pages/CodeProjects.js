import React, {useState, useEffect } from 'react';
import Video01 from '../images/videovegi.mp4';
import Video02 from '../images/video3.mp4';
import Video03 from '../images/video2.mp4';
import Video04 from '../images/videomobile.mp4';
import ProjectList from '../components/ProjectList';
import MobileList from '../components/MobileList';
import './CodeProject.css';
import LoadingSpinner from '../elements/uielements/LoadingSpinner';
import {useHttpClient} from '../elements/hook/http-hook';
import Footer from '../components/Footer';

/*
const PROJECTS_MOBILE= [
  {
    feature: 'mobile',
    title: '홈쿠킹레시피 앱',
    description: '구글 플레이 스토어와 애플 앱스토어에 출시된 요리 레시피 flutter app',
    imageUrl: '',
    tools: [
      'Dart', 
      'Flutter', 
      'Firebase',
      'App store',
       'Google Playstore' ]
    
  },
  
];
const PROJECTS_WEB = [
  {
    feature: 'web',
    title: '베지리스트 웹서비스',
    description: '채식 맛집을 등록하고 공유하는 사이트',
    imageUrl: '',
    tools: [
   'MERN',  
   'MongoDB',
   'Express',
   'React',
   'Nodejs',
   'Heroku'
   
    
   ]
    
  },
  {
    feature: 'web',
    title: '레시피앱 앱스토어 지원 url 홈페이지',
    description: '홈쿠킹 레시피앱 서비스를 소개하는 웹페이지',
    imageUrl: '',
    tools: [
      'REACT',
      'CSS3', 
      'HTML5', 
      'Firebase'
      ]
    
  },
  
    {
      feature: 'web',
      title: '고양이 캐릭터 open api fetch 홈페이지',
      description: '고양이 캐릭터 검색 사이트',
      imageUrl: '',
      tools: [
      'HTML5', 
      'CSS3', 
      'REACT',
      'HTTP',
      'Firebase'
        
        ]
      
    },
    {
      feature: 'web',
      title: '제이룸 파우치 홈페이지',
      description: '제이룸 수제 파우치 제작 회사의 상품을 소개하는 웹페이지',
      imageUrl: 'https://d33wubrfki0l68.cloudfront.net/d57696b1fbf9f79779d9184c887b3ad32b712ff4/0528d/static/images/tutorials/stories-interaction.mp4',
      tools: [
        'HTML5', 
        'CSS3', 
        'Jquery', 
      'Firebase']
      
    }
  ];
*/

const CodeProjects = () => {
  const {isLoading, error, sendRequest, clearError} = useHttpClient();
  const [loadedMobile, setLoadedMobile] = useState('');
  const [loadedWeb, setLoadedWeb] = useState('');


  useEffect(() => {
    const fetchMobile = async () => {
      try {
        const responseData = await sendRequest (
          process.env.REACT_APP_BACKEND_URL + '/projects/mobile'
        );
        setLoadedMobile(responseData.mobileprojects);
      } catch (err) {}
    };
    fetchMobile();
    }, [sendRequest]);
  
    useEffect(() => {
      const fetchWeb = async () => {
        try {
          const responseData = await sendRequest (
            process.env.REACT_APP_BACKEND_URL + '/projects/web'
          );
          setLoadedWeb(responseData.webprojects);
        } catch (err) {}
      };
      fetchWeb();
      }, [sendRequest]);

  return (
    <React.Fragment>
       {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
    <div className="main-box"></div>
   <section> 
     <div className="heading-mobile-project"><h3>Mobile App</h3></div>
     {!isLoading && loadedMobile && <MobileList items={loadedMobile} />}
  </section> 
  
  <section> 
  <div className="heading-web-project"><h3>Web</h3></div>
  {!isLoading && loadedWeb &&<ProjectList items={loadedWeb} />}
  </section> 
  <div className="main-box"></div>
  <Footer/>
  

  </React.Fragment>
  )
};

export default CodeProjects;