import React from 'react';
import armenia from '../../images/armenia.jpg';
import greece from '../../images/greece.jpg';
import './ChangeArticle.css';

const ChangeArticle = ({ number }) => {
  const sec1 = (
    <div className="travel-inner">
      <article className="travel-article">
        <div className="travel-article__top">
          <img className="travel-img" src={armenia} alt="armenia" />
        </div>
        <div className="travel-article__main">
          <p />
          <button type="button">more</button>
        </div>
      </article>
      <article className="travel-article">
        <div className="travel-article__top">
          <img className="travel-img" src={armenia} alt="armenia" />
        </div>
        <div className="travel-article__main">
          <p />
          <button type="button">more</button>
        </div>
      </article>
      <article className="travel-article">
        <div className="travel-article__top">
          <img className="travel-img" src={armenia} alt="armenia" />
        </div>
        <div className="travel-article__main">
          <p />
          <button type="button">more</button>
        </div>
      </article>
      <article className="travel-article">
        <div className="travel-article__top">
          <img className="travel-img" src={armenia} alt="armenia" />
        </div>
        <div className="travel-article__main">
          <p />
          <button type="button">more</button>
        </div>
      </article>
      <article className="travel-article">
        <div className="travel-article__top">
          <img className="travel-img" src={armenia} alt="armenia" />
        </div>
        <div className="travel-article__main">
          <p />
          <button type="button">more</button>
        </div>
      </article>
      <article className="travel-article">
        <div className="travel-article__top">
          <img className="travel-img" src={armenia} alt="armenia" />
        </div>
        <div className="travel-article__main">
          <p />
          <button type="button">more</button>
        </div>
      </article>
    </div>
  );
  const sec2 = (
    <div className="travel-inner">
      <article className="travel-article">
        <div className="travel-article__top">
          <img className="travel-img" src={greece} alt="greece" />
        </div>
        <div className="travel-article__main">
          <p />
          <button type="button">more</button>
        </div>
      </article>
      <article className="travel-article">
        <div className="travel-article__top">
          <img className="travel-img" src={greece} alt="greece" />
        </div>
        <div className="travel-article__main">
          <p />
          <button type="button">more</button>
        </div>
      </article>
      <article className="travel-article">
        <div className="travel-article__top">
          <img className="travel-img" src={greece} alt="greece" />
        </div>
        <div className="travel-article__main">
          <p />
          <button type="button">more</button>
        </div>
      </article>
      <article className="travel-article">
        <div className="travel-article__top">
          <img className="travel-img" src={greece} alt="greece" />
        </div>
        <div className="travel-article__main">
          <p />
          <button type="button">more</button>
        </div>
      </article>
      <article className="travel-article">
        <div className="travel-article__top">
          <img className="travel-img" src={greece} alt="greece" />
        </div>
        <div className="travel-article__main">
          <p />
          <button type="button">more</button>
        </div>
      </article>
      <article className="travel-article">
        <div className="travel-article__top">
          <img className="travel-img" src={greece} alt="greece" />
        </div>
        <div className="travel-article__main">
          <p />
          <button type="button">more</button>
        </div>
      </article>
    </div>
  );
  const sec3 = (
    <div className="travel-inner">
      오류오류오류오류오류오류오류오류오류오류오류오류오류오류오류오류오류오류오류오류오류오류오류오류
    </div>
  );

  switch (number) {
    case 1:
      return sec1;
    case 2:
      return sec2;
    default:
      return sec3;
  }
};

export default ChangeArticle;
