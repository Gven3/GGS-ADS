import { useState } from "react";
import { StyledArticleDiv } from "./article.styled";

const Article = () => {
  // const articles = [
  //   {
  //     image:
  //   }
  // ]
  return (
    <StyledArticleDiv>
      <div className="photoDiv">
        <div className="first"></div>
        <div className="second"></div>
        <div className="third"></div>
      </div>
      <div className="article">
        <h3>სათაური</h3>
        <p>
          5 ხრიკი სარეკლამო კამპანიის ოპტიმიზაციისთვის დღევანდელი ტექნოლოგიური განვითარების ფონზე ძალიან
          ბევრი სარეკლამო პლატფორმა საკუთარ ალგორითმებს ცვლის და მომხმარებელს, ისევე როგორც
          ედვერთაიზერებს, სთავაზობს უკეთეს გამოცდილებას. ალგორითმის ასეთი ცვლილებებია სწორედ ის მიზეზი,
          რატომაც რეკლამების ოპტიმიზირება მუდმივად გჭირდებათ. ახლა კი განვიხილოთ სარეკლამო კამპანიების
          ოპტიმიზაციის ხუთი ხრიკი, რომლებიც უკეთესი უკუგების მიღებაში დაგეხმარებათ (ROAS).
        </p>
      </div>
    </StyledArticleDiv>
  );
};

export default Article;
