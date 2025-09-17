import { useEffect, useState } from 'react';
import { Header } from './components/Header.jsx'
import { Content } from './components/Content.jsx'
import { Footer } from './components/Footer.jsx';
import './css/style.css'

/** fetch 예시 : return 하는 html이 동기 형태라 면저 로딩 되어서 에러가 났다.
        // [방법 1.] : 적용X
        // fetch("/data/best_product.json")
        //     .then(response => response.json())
        //     .then(jsonData => setBestProductList(jsonData))
        //     
      
 */

export default function App() {
  const init = { 
    header: {menus: []}, 
    content: {
      home: {},
      about: {
        majors: [],
        jobs: []
      },
      skills: {
        coding: [],
        tools: [],
        etc: []
      },
      work: {
        categories: [],
        project:[]
      },
      testimonials: []
    },
    footer: {links: []}
  };

  const [data, setData] = useState(init);
  useEffect(() => {
    const load = async () => {
      const response = await fetch("/data/portfolio.json");
      const jsonData = await response.json();
      setData(jsonData);
    }

    load();
  }, []); //[]의 값이 변경되는 것에 따라서 다시 불러올것이다.

  return (
    <>
      <Header data={data.header} />
      <Content data={data.content}/>
      <Footer data={data.footer}/>
    </>
  );
}