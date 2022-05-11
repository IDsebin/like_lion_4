function Hobby(props){       //취미
    return(
        <div className="list">
        <h3>{props.name}</h3>
         <ol>
            <li><a href="https://ko.wikipedia.org/wiki/%EC%B6%95%EA%B5%AC">축구</a></li>
            <li><a href="https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=hello286668&logNo=220973186714">배드민턴</a></li>
            <li><a href="http://www.bowling.or.kr/bbs/board.php?bo_table=free&wr_id=3">볼링</a></li>
         </ol>
        <hr/>
        </div>
    )
}

export default Hobby;