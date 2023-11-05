import styled from "styled-components";

const CardHeadBlock = styled.div`
  text-align: left;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 30px;
    color: #343a40;
  }
  .day {
    margin-top: 10px;
    color: #868e96;
    font-size: 21px;
  }
`;

var today = new Date();
// 시간
var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);

var dateString = year + '년 ' + month + '월 ' + day + '일';

// 요일
const week = ['일', '월', '화', '수', '목', '금', '토'];
const dayOfWeek = week[today.getDay()];

function CardHead() {
    return (
        <CardHeadBlock>
            <h1>{dateString}</h1>
            <div className="day">{dayOfWeek}요일</div>
        </CardHeadBlock>
    );
}

export default CardHead;