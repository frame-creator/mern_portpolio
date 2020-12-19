import React, {useState, useEffect}  from 'react';
import Video01 from '../images/video2.mp4';
import PrototypeList from '../components/PrototypeList';
import './PrototypeProject.css';
import LoadingSpinner from '../elements/uielements/LoadingSpinner';
import {useHttpClient} from '../elements/hook/http-hook';

const PROTOTYPES_FRAMER = [
  {
    feature: 'framer',
    title: 'framer weekly challenge 1주차',
    description: '',
    imageUrl: '',
    tools: [
      'Framer',
       ]
    
  },
  {
    feature: 'framer',
    title: 'framer weekly challenge 2주차',
    description: '',
    imageUrl: '',
    tools: [
      'Framer',  ]
    
  },
  {
    feature: 'framer',
    title: 'framer weekly challenge 3주차',
    description: '',
    imageUrl: '',
    tools: [
      'Framer', ]
    
  },
  {
    feature: 'framer',
    title: 'framer weekly challenge 4주차',
    description: '',
    imageUrl: '',
    tools: [
      'framer']
    
  }
];

const PROTOTYPES_PLAN = [
  {
    feature: 'prototype',
    title: '투윅스 해커톤 디자인 오픈 마켓 앱 기획',
    description: '디자인 오픈 마켓 앱 기획 및 콘텐츠 제작',
    imageUrl: '',
    tools: [
      'sketch', '기획', '팀 프로젝트','완주상']
    
  },
  {
    feature: 'prototype',
    title: '데이터 분석 주문 예측 모델 대쉬보드 공동기획',
    description: '인공지능 비즈니스 모델 교육과정 팀 프로젝트 ',
    imageUrl: '',
    tools: [
       '공동기획', '팀 프로젝트','인공지능 스퀘어 교육']
    
},

  
]
const PrototypeProjects = () => {
  const {isLoading, error, sendRequest, clearError} = useHttpClient();
  const [loadedFramer, setLoadedFramer] = useState('');
  const [loadedPrototype, setLoadedPrototype] = useState('');

  useEffect(() => {
    const fetchFramer = async () => {
      try {
        const responseData = await sendRequest (
          process.env.REACT_APP_BACKEND_URL + '/projects/framer'
        );
        setLoadedFramer(responseData.framerprojects);
      } catch (err) {}
    };
    fetchFramer();
    }, [sendRequest]);
  
    useEffect(() => {
      const fetchPrototype = async () => {
        try {
          const responseData = await sendRequest (
            process.env.REACT_APP_BACKEND_URL + '/projects/prototype'
          );
          setLoadedPrototype(responseData.prototypeprojects);
        } catch (err) {}
      };
      fetchPrototype();
      }, [sendRequest]);
   
  return(
    <React.Fragment>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
   <section> 
     <div className="heading-prototype"><h3>Framer</h3></div>
     {!isLoading && loadedFramer && <PrototypeList items={loadedFramer} />}
   </section><section>
   <div className="heading-prototype"><h3>기획</h3></div>
   {!isLoading && loadedPrototype && <PrototypeList items={loadedPrototype} />}
   </section>
   </React.Fragment>
  )
};

export default PrototypeProjects;