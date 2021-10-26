import React, {useState, useEffect} from 'react';
import Video01 from '../images/video2.mp4';
import StackList from '../components/StackList';
import './Home.css';
import Welcome from '../components/Welcome';
import LoadingSpinner from '../elements/uielements/LoadingSpinner';
import {useHttpClient} from '../elements/hook/http-hook';
import Footer from '../components/Footer';



const Home = () => {
  const {isLoading, error, sendRequest, clearError} = useHttpClient();
  const [loadedStacks, setLoadedStacks] = useState('');
  const [loadedTools, setLoadedTools] = useState('');
  const [loadedDesign, setLoadedDesign] = useState('');
  

useEffect(() => {
  const fetchStacks = async () => {
    try {
      const responseData = await sendRequest (
       //'http://localhost:4000/api/projects'
        process.env.REACT_APP_BACKEND_URL + '/projects'
      );
      setLoadedStacks(responseData.stacks);
    } catch (err) {}
  };
  fetchStacks();
  }, [sendRequest]);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const responseData = await sendRequest (
         // 'http://localhost:4000/api/projects/tool'
          process.env.REACT_APP_BACKEND_URL + '/projects/tool'
        );
        setLoadedTools(responseData.tools);
      } catch (err) {}
    };
    fetchTools();
    }, [sendRequest]);

    useEffect(() => {
      const fetchDesign = async () => {
        try {
          const responseData = await sendRequest (
           // 'http://localhost:4000/api/projects/design'
            process.env.REACT_APP_BACKEND_URL + '/projects/design'
          );
          setLoadedDesign(responseData.designs);
          
        } catch (err) {}
      };
      fetchDesign();
      }, [sendRequest]);

  return (
    <React.Fragment>
  {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
  {!isLoading && <Welcome/>} 
  <div className="main-box"></div>
  <div><h3 className="heading-stack-one">Stack</h3></div>
  {!isLoading && loadedStacks && <StackList items={loadedStacks} /> };
  <div><h3 className="heading-stack-two">Tool</h3></div>
  {!isLoading && loadedTools && <StackList items={loadedTools} /> };
  <div><h3 className="heading-stack-two">Prototype & Design</h3></div>
  {!isLoading && loadedDesign && <StackList items={loadedDesign} /> };
  <div className="main-box"></div>
  <Footer/>
  </React.Fragment>
  )
      
};

export default Home;
/*
const STACKS_ONE = [
  {
    feature: 'stack',
    title: 'HTML5',
    description: '태그 활용 마크업',
    imageUrl: 'https://github.com/frame-creator/stackimage/blob/master/stackimg/html5logo.png?raw=true',
    
  },
  {
    feature: 'stack',
    title: 'CSS3',
    description: '퍼블리싱 & 레이아웃 디자인',
    imageUrl: 'https://github.com/frame-creator/stackimage/blob/master/stackimg/css3logo.png?raw=true',
  },
  {
    feature: 'stack',
    title: 'Sass',
    description: 'Sass 문법 활용',
    imageUrl: 'https://github.com/frame-creator/stackimage/blob/master/stackimg/sasslogo.png?raw=true',
    
  },
  {
    feature: 'stack',
    title: 'Javascript',
    description: 'vanila JS & ES6',
    imageUrl: 'https://github.com/frame-creator/stackimage/blob/master/stackimg/logo-javascript.png?raw=true',
    
  },
  {
    feature: 'stack',
    title: 'React',
    description: 'Hook, Router, API 연동',
    imageUrl: 'https://github.com/frame-creator/stackimage/blob/master/stackimg/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-06-27%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.07.46.png?raw=true',
    
  },
  {
    id: 'stack',
    title: 'Jquery',
    description: '라이브러리 활용',
    imageUrl: 'https://github.com/frame-creator/stackimage/blob/master/stackimg/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-06-29%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%201.22.08.png?raw=true',
    
  },
  {
    feature: 'stack',
   
    title: 'Dart',
    description: 'flutter, web 개발',
    imageUrl: 'https://github.com/frame-creator/stackimage/blob/master/stackimg/dartlogo.png?raw=true',
    
    creator: 'u2'
  },
  {
    feature: 'stack',
    
    title: 'Flutter',
    description: '앱 개발, android와 ios 배포',
    imageUrl: 'https://github.com/frame-creator/stackimage/blob/master/stackimg/flutter-logo.png?raw=true',
    
  },
  {
    feature: 'stack',
    
    title: 'MongoDB',
    description: 'MongoDB compass 활용',
    imageUrl: 'https://github.com/frame-creator/stackimage/blob/master/stackimg/mongodblogo.png?raw=true',
    
  }
,
{
  feature: 'stack',
  stackfeature:'stack',
  title: 'Firebase',
  description: 'Auth, Firestore, Hosting',
  imageUrl: 'https://github.com/frame-creator/stackimage/blob/master/stackimg/firebase-2.png?raw=true',
  
}
,{
  feature: 'stack',
  
  title: 'Heroku',
  description: 'Rest Api 호스팅',
  imageUrl: 'https://github.com/frame-creator/stackimage/blob/master/stackimg/herokulogo.png?raw=true',
  
}
];
const STACKS_Tool = [
{
  feature: 'tool',
  title: 'Git',
  description: '버전 관리',
  imageUrl: 'https://github.com/frame-creator/stackimage/blob/master/stackimg/gitlogo.png?raw=true',
  
},
{
  feature: 'tool',
  title: 'Github',
  description: '소스 코드 이력 관리 & 협업',
  imageUrl: 'https://github.com/frame-creator/stackimage/blob/master/stackimg/github-1.png?raw=true',
  
  
},
{
  feature: 'tool',
  title: 'Zeplin',
  description: '디자인 툴 연동 활용 & 협업',
  imageUrl: 'https://github.com/frame-creator/stackimage/blob/master/stackimg/zeplin.png?raw=true',
 
  
},
];
const STACKS_Design = [
  {
    feature: 'design',
    title: 'Framer',
    description: '프로토타입 & UX 디자인',
    imageUrl: 'https://github.com/frame-creator/stackimage/blob/master/stackimg/framerlogo.png?raw=true',
    
    
  },



{
  feature: 'design',
  title: 'Sketch',
  description: '이미지 export & UI 디자인',
  imageUrl: 'https://github.com/frame-creator/stackimage/blob/master/stackimg/sketch-2.png?raw=true',
  
},
{
  feature: 'design',
  title: 'Adobe Illustrator',
  description: '펜툴 활용 & 로고 디자인',
  imageUrl: 'https://github.com/frame-creator/stackimage/blob/master/stackimg/illustratorcclogo.png?raw=true',
  
},
{
  id: 'design',
  title: 'AdobeXD',
  description: '프로토타입',
  imageUrl: 'https://github.com/frame-creator/stackimage/blob/master/stackimg/adobe-xd-1.png?raw=true',
 
  
},






];
*/
