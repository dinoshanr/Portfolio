import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';



function AboutPage(props) {

    return(
        <div>


            <Hero title={props.title} />

            <Content>
            <p>Hi! My name is Dinoshan Romeltar, I am a software engineer in NYC. I come from a
              non-traditional coding background. I studied International Trade at University at Buffalo and worked at Bank of America as a Credit Specialist II where I have experience in Credit, Marketing and Business.</p>

            <p>My interest in software development sparked when I was using programs at Bank of America and would constantly view the source code to understand how they were written. My interest led me to learn more about programming to understand better about software and web development. After realizing my passion for coding I self taught myself JavaScript, Python, HTML, CSS and React.</p>

  <p>Currently, I am part of the American Express Software Engineering Academy. </p>
            </Content>
        </div>
    );

}

export default AboutPage;
