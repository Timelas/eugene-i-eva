import React, {useState, useRef} from "react";
import question from "../../images/questions.svg";
import "./Questions.css";

function Questions() {
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycby30axLxJZSXc3-hc2iXpnnVhphqRAgIGISo5xFEYYZpuv2tVSsh6ECo013oJsetUhctA/exec"
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setisFormVisible] = useState(true);

  const handleSubmit = (e) =>{
      e.preventDefault();
      setLoading(true);
      const FormNew = new FormData(formRef.current);
      FormNew.append('Form', 'questions');

      fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),

  }).then(res => {
          setLoading(false);
          setisFormVisible(false);
      })
      .catch(err => console.log(err))
  }
  
  return (
    <section className="question" id="questions">
      <div className="question__bloks">
        { isFormVisible ?
          <div className="question__container">
            <img src={question} alt="опрос" className="question__header"></ img>
            <p className="question__text">Чтобы все прошло идеально и этот день запомнился надолго, пожалуйста, ответьте на несколько вопросов:</p>
            <form className="question__form" ref={formRef} onSubmit={handleSubmit}>
            <p className="question__string">
              <label htmlFor="who" className="question__label-input">Имя и фамилия:</label>
              <input type="text" name="Имя и Фамилия" id="who" required className="question__input" minLength={2}></input>
            </p>
            <fieldset className="question__string">Предпочтения по алкоголю:
              <label  htmlFor="champangne" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Шампанское" value="Шампанское" id="champangne"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Шампанское</span>
              </label>
              <label htmlFor="whitewine" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Белое вино" value="Белое вино" id="whitewine"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Белое вино</span>
              </label>
              <label htmlFor="redwine" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Красное вино" value="Красное вино" id="redwine"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Красное вино</span>
              </label>
              <label htmlFor="whiskey" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Виски" value="Виски" id="whiskey"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Виски</span>
              </label>
              <label htmlFor="rum" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Ром" value="Ром" id="rum"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Ром</span>
              </label>
              <label htmlFor="vodka" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Водка" value="Водка" id="vodka"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Водка</span>
              </label>
            </fieldset>
            <button type="submit" className="question__button" disabled={loading ? true : false}>{loading ? "Отправка..." : "Подтвердить"}</button>
          </form>
        </div>
        :
        <div>
          <img src={question} alt="опрос" className="question__header"></ img>
          <p className="question__answer">Форма отправлена!</p>
        </div>
        }
      </div>
      <div className="question__line"></div>
    </section>
  );
}

export default Questions;