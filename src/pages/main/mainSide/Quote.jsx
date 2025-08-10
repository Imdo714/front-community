import React, { useState, useEffect } from "react";

    const devQuotes = [
        {
            text: "프로그램은 사람이 읽을 수 있도록 작성되어야 하며, 기계가 실행하는 것은 부차적인 일이다.",
            author: "Harold Abelson"
        },
        {
            text: "실패는 끝이 아니라 배움의 시작이다. 계속 시도하라.",
            author: "Do Hyun Lim"
        },
        {
            text: "아무나 컴퓨터가 이해할 수 있는 코드를 작성할 수 있다. 좋은 프로그래머는 사람이 이해할 수 있는 코드를 작성한다.",
            author: "Martin Fowler"
        },
        {
            text: "먼저 문제를 해결하라. 그 다음에 코드를 작성하라.",
            author: "John Johnson"
        },
        {
            text: "단순함은 효율성의 핵심이다.",
            author: "Austin Freeman"
        },
        {
            text: "끈기 있는 개발자는 문제를 해결할 때까지 포기하지 않는다. 그게 바로 성장의 시작이다.",
            author: "Do Hyun Lim"
        },
        {
            text: "코드는 유머와 같다. 설명해야 한다면, 그건 나쁜 코드다.",
            author: "Cory House"
        },
        {
            text: "증상이 아니라 원인을 고쳐라.",
            author: "Steve Maguire"
        },
        {
            text: "완벽한 코드를 작성하는 것은 불가능하다. 하지만 더 나은 코드를 향한 노력은 멈추지 말아야 한다.",
            author: "Do Hyun Lim"
        },
        
        {
            text: "노력은 재능을 이긴다. 재능 있는 사람도 노력하는 사람을 이길 수 없다.",
            author: "John C. Maxwell"
        },
        {
            text: "소프트웨어가 재사용 가능하려면 먼저 사용 가능해야 한다.",
            author: "Ralph Johnson"
        },
        {
            text: "성공은 우연이 아니라 노력의 결과다.",
            author: "Esther Jane Williams"
        },
        {
            text: "당신이 할 수 있는 최선을 다하면, 결과는 자연스럽게 따라온다.",
            author: "John Robert Wooden"
        },
        {
            text: "위대한 일은 힘이 아니라 끈기로 이루어진다.",
            author: "Samuel Johnson"
        },
        {
            text: "코딩은 문제 해결의 예술이다. 그리고 예술은 반복과 인내로 완성된다.",
            author: "Do Hyun Lim"
        },
        {
            text: "기술은 계속 변하지만, 꾸준한 학습과 노력은 변하지 않는다.",
            author: "Do Hyun Lim"
        }
    ];

const Quote = () => {
    const [quote, setQuote] = useState({});

    useEffect(() => {
        changeQuote();
    }, []);

    const changeQuote = () => {
        const randomIndex = Math.floor(Math.random() * devQuotes.length);
        setQuote(devQuotes[randomIndex]);
    }

    return(
        <div className="ad-box">
            <div className="quote-title">💡 오늘의 명언</div>
            <p className="quote-text">
                "{quote.text}"
            </p>
            <p className="quote-author">– {quote.author} –</p>
            <button onClick={changeQuote} className="ad-button">Try Now</button>
        </div>
    )
}

export default Quote;