import React, { useState, useEffect } from "react";
import styled from "styled-components";
import data from "./data";

const Lecturers = () => {

  const LectureStyle = styled.div`
  
  h1,
h2,
h3,
h4 {
  letter-spacing: 0.1rem;
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}
.section {
  width: 90vw;
  margin:  auto;
  max-width: 1170px;
}

@media screen and (min-width: 992px) {
  .section {
    width: 95vw;
  }
}

.icon {
  font-size: 3rem;
  color: hsl(21, 62%, 45%);
}

.section-center {
  margin: 0 auto;
  margin-top: 4rem;
  width: 80vw;
  height: 450px;
  max-width: 800px;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;
}

article {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.3s linear;
}

article.activeSlide {
  opacity: 1;
  transform: translateX(0);
}
article.lastSlide {
  transform: translateX(-100%);
}
article.nextSlide {
  transform: translateX(100%);
}

.person-img {
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid hsl(210, 31%, 80%);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

article h4 {
  text-transform: uppercase;
  color: hsl(21, 62%, 45%);
  margin-bottom: 0.25rem;
}
.title {
  text-transform: capitalize;
  margin-bottom: 0.75rem;
  color: hsl(209, 34%, 30%);
}

.title {
  text-align: center;
  margin-bottom: 2rem;
}
.title h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
}

.text {
  max-width: 35em;
  margin: 0 auto;
  margin-top: 2rem;
  line-height: 2;
  color: hsl(210, 22%, 49%);
}

.prev,
.next {
  position: absolute;
  top: 200px;
  transform: translateY(-50%);
  background: hsl(210, 22%, 49%);
  color: #fff;
  width: 1.25rem;
  height: 1.25rem;
  display: grid;
  place-items: center;
  border-color: transparent;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s linear;
}
.prev:hover,
.next:hover {
  background: hsl(21, 62%, 45%);
}
.prev {
  left: 0;
}
.next {
  right: 0;
}
@media (min-width: 800px) {
  .text {
    max-width: 45em;
  }
  .prev,
  .next {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
}
  `;



  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (

    <LectureStyle>
    <section className="section">
      <div className="title">
        <h2>top leader</h2>
      </div>
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <i className="fas fa-arrow-left" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    </section>
    </LectureStyle>
  );
};

export default Lecturers;