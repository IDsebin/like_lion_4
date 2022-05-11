function Food(props){        //좋아하는 맛집
    return(
        <div className="list">
        <h3>{props.name}</h3>
        <p>배드민턴,축구 </p>
        <hr/>
        </div>
    )
}

export default Food;
