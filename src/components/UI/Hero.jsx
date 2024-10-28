import React from 'react'

const Hero = () => {
  return (
    <section>
    <div className='container'>
        <div className='hero-wrapper'>
            <div className='hero_content'>
                <h2>Get Fit With Steeze Lifestyle</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea odit, autem accusantium, eum quasi laborum, non esse distinctio veniam nihil reprehenderit consequatur assumenda. Repellat commodi asperiores magni ullam id amet.
                </p>
                <div className='hero_btn'>
                    <button className='register_btn'>Get Started</button>
                    <button className='watch_btn' >
                        <span>
                            <i class="riplay-fill">
                            </i>
                        </span>
                    </button>
                </div>
            </div>
            <div className='hero_img'></div>
        </div>
    </div>
  </section>
  )
}

export default Hero
